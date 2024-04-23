require("dotenv").config();
const { GraphQLScalarType, Kind } = require("graphql");
const { User, Food, Cart } = require("../Model");
const { signToken, AuthenticationError } = require("../utils/auth");
const { queryCartQL, CartQueries, CartMutation } = require("../utils/cartQL");
const cartOps = require("../utils/cartOps");
const { Stripe } = require("stripe");
const stripe = new Stripe(process.env.STRIPE_TEST_KEY);

const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  serialize(value) {
    if (value instanceof Date) {
      return value.getTime(); // Convert outgoing Date to integer for JSON
    }
    throw Error(
      "GraphQL Date Scalar serializer expected a `Date` objectsk_test_51P77UQ1ufoiv9vhHbQG68ZcWiXw7YFVp87YZ1EnS8MyRMyG8lSu365uhtM61Fwx5WVjls365VE789lYIb2SbQ6cW00m7bv72kJ"
    );
  },
  parseValue(value) {
    if (typeof value === "number") {
      return new Date(value); // Convert incoming integer to Date
    }
    throw new Error("GraphQL Date Scalar parser expected a `number`");
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      // Convert hard-coded AST string to integer and then to Date
      return new Date(parseInt(ast.value, 10));
    }
    // Invalid hard-coded value (not an integer)
    return null;
  },
});

const resolvers = {
  Date: dateScalar,
  Query: {
    user: async (_, __, context) => {
      try {
        if (!context.user?._id) {
          throw AuthenticationError;
        }
        console.log('\nresolvers user: \n')

        let user = await User.findById(
          context.user._id,
          "-password",
        );

        if (!user) {
          throw AuthenticationError;
        }

        // console.log('user query', require('util').inspect(user, {depth: null}));
        return user;
      } catch (err) {
        console.error(err);
      }
    },

    getCart: async (_, __, context) => {
      if (!context.user?._id) {
        throw AuthenticationError;
      }
      console.log("\nresolvers getCart: \n");

      try {
        // const variables = {
        //   id: context.user._id,
        // };
        // const cart = await queryCartQL(CartQueries.queryCart, variables);
        // console.log("Cart", cart.cart.items);

        const cart = await cartOps.getCart(context.user._id);

        return cart;
      } catch (err) {
        console.error(err);
      }
    },
    getAllFood: async () => {
      return await Food.find();
    },
    getFood: async (_, { name }) => {
      // Search for the food item by name ignoring case
      return await Food.findOne({ name: { $regex: new RegExp(name, "i") } });
    },
    getFoodByCategory: async (_, { category }) => {
      console.log("\nresolvers getFoodByCategory: \n");
      try {
        // Search for food items by category, ignoring case
        const foodItems = await Food.find({
          category: { $regex: new RegExp(category, "i") },
        });
        return foodItems;
      } catch (error) {
        throw new Error("Failed to retrieve food items by category");
      }
    },
    // fitering food items based on the preference
    getFoodByPreference: async (
      _,
      { vegan, vegetarian, glutenFree, dairyFree, nutFree }
    ) => {
      console.log("\nresolvers getFoodByPreference: \n");
      try {
        const filter = {};
        // variable example = { "dairyFree" : false }
        if (vegan !== undefined) filter.vegan = vegan;
        if (vegetarian !== undefined) filter.vegetarian = vegetarian;
        if (glutenFree !== undefined) filter.gluten_free = glutenFree;
        if (dairyFree !== undefined) filter.dairy_free = dairyFree;
        if (nutFree !== undefined) filter.nut_free = nutFree;

        console.log("filtering...: ", filter);
        // Query food items based on the filter
        const foodItems = await Food.find(filter);
        return foodItems;
      } catch (error) {
        throw new Error("Failed to retrieve food items by preference");
      }
    },
    cartCheckout: async (_, { order }, context) => {
      const url = new URL(context.headers.referer).origin;

      try {
        if (!context?.user._id) {
          console.log("no id");
          throw AuthenticationError;
        }

        const { payment_amount, cart: { totalItems } } = order;
        const newItemPrice = Math.floor( payment_amount / totalItems );
        let remainder = Math.floor(payment_amount % totalItems);

        const line_items = [];
        for (const item of order.cart.items) {
          line_items.push({
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
                images: item.images,
              },
              unit_amount: newItemPrice,
            },
            quantity: item.quantity,
          });
        }
        line_items.push({
          price_data: {
            currency: "usd",
            product_data: {
              name: "Remaining amount",
            },
            unit_amount: remainder,
          },
          quantity: 1,
        });

        const cartPromise = Cart.findOneAndUpdate(
          { id: context.user._id },
          { payment_amount },
          { new: true, runValidators: true }
        );

        const stripePromise = stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          line_items,
          mode: "payment",
          success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${url}/`,
        });

        const [updatedCart, session] = await Promise.all([
          cartPromise,
          stripePromise,
        ]);

        if (!updatedCart) {
          console.log("no cart found and update");
          throw AuthenticationError;
        }

        console.log(updatedCart);

        return { session: session.url };
      } catch (err) {
        console.error(err);
        return err;
      }
    },
    donation: async (_, { amount }, context) => {
      console.log("\nresolvers donation: \n");
      const url = new URL(context.headers.referer).origin;

      const line_items = [];
      line_items.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: "Donation",
          },
          unit_amount: amount,
        },
        quantity: 1,
      });

      try {
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          line_items,
          mode: "payment",
          success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${url}/`,
        });

        if (!session) {
          throw new Error("Something went wrong. Try again later");
        }

        return { session: session.url };
        
      } catch (err) {
        console.error(err);
        return err;
      }
    },
  },

  Mutation: {
    login: async (_, { email, password }) => {
      console.log(email, password);
      const user = await User.findOne({ email });

      if (!user) {
        console.log("notfound");
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPw(password);

      if (!correctPw) {
        console.log("badpwd");
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },

    addUser: async (parent, { userInput }) => {
      try {
        console.log(userInput);
        const user = await User.create(userInput);
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        console.error("error adding a user",error);
      }
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw AuthenticationError;
    },
    updateCartItem: async (_, { food }, context) => {
      if (!context.user?._id) {
        throw AuthenticationError;
      }
      console.log("\nresolvers updateCartItem: \n");

      const variables = {
        food,
        id: context.user._id,
        metadata: {
          inventory: food.inventory,
        },
      };

      try {
        // const result = await queryCartQL(
        //   CartMutation.updateCartItem,
        //   variables
        // );
        // if (!result) {
        //   throw new Error("error fetching cart");
        // }
        // return result.updateItem;

        const cart = await cartOps.updateCartItem(variables);

        if (cart.error) {
          throw cart.error;
        }

        return cart;
      } catch (error) {
        console.error(error);
      }
    },
    addCartItem: async (_, { food }, context) => {
      if (!context.user?._id) {
        throw AuthenticationError;
      }
      console.log("\nresolvers addCartItem: \n");

      try {
        const variables = {
          food,
          id: context.user._id,
          metadata: {
            inventory: food.inventory,
          },
        };
        // const cart = await queryCartQL(CartMutation.addCartItem, variables);
        const cart = await cartOps.addCartItem(variables);

        if (cart.error) {
          throw cart.error;
        }
        // console.log("RESULT: ITEM:PLEASE WORK", result.addItem.items);

        // return cart.addCartItem;
        return cart;
      } catch (err) {
        console.error(err);
      }
    },
    removeCartItem: async (_, { food }, context) => {
      if (!context.user?._id) {
        throw AuthenticationError;
      }
      console.log("\nresolvers removeCartItem: \n");
      const variables = {
        food,
        id: context.user._id,
        metadata: { inventory: food.inventory },
      };
      // const result = await queryCartQL(CartMutation.removeCartItem, variables);
      // if (!result) {
      //   throw new Error("error fetching cart");
      // }
      // console.log(result);
      // return result.removeItem;

      const cart = await cartOps.removeCartItem(variables);

      if (cart.error) {
        throw cart.error;
      }
      console.log(cart);

      return cart;

    },
    updateInventory: async (_, { inventoryId, inventory }) => {
      console.log("\nresolvers updateInventory: \n");
      try {
        // Find the food item by ID and update its inventory
        const updatedFood = await Food.findOneAndUpdate(
          { _id: inventoryId },
          { $set: { inventory } },
          { new: true }
        );
        return updatedFood;
      } catch (error) {
        console.error("error!: ", error);
        throw new Error("Failed to update inventory");
      }
    },
    saveOrder: async (_, { stripeId }, context) => {
      console.log('\nresolvers saveHistory: \n');
      if (!context.user?._id) {
        throw AuthenticationError;
      }
      const userId = context.user._id;

      console.log(stripeId);
      try {
        const cartPromise = cartOps.getCart(userId);
        const userPromise = User.findById(userId);

        const [cart, user] = await Promise.all([cartPromise, userPromise]);

        if (!(cart && user)) {
          throw new Error("something went wrong");
        }

        // save order to user and rest the cart
        user.history.push({ stripeId, cart });
        await user.save();

        const myCart = await Cart.findOneAndUpdate(
          { id: userId },
          {
            $set: {
              payment_amount: 0,
              items: [],
            }
          },
          {
            new: true,
            runValidators: true,
          }
        );

        if (!myCart) {
          throw new Error("Couldn't reset cart");
        }

        return user
      } catch (err) {
        console.error(err);
        return err;
      }
    }
  },
};

module.exports = resolvers;
