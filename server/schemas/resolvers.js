const { GraphQLScalarType, Kind } = require("graphql");
const { User, Food } = require("../model");
const { signToken, AuthenticationError } = require("../utils/auth");
const { queryCartQL, CartQueries, CartMutation } = require("../utils/cartQL");
const { cartCheckout } = require("../utils/cartQL/mutations");
// const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  serialize(value) {
    if (value instanceof Date) {
      return value.getTime(); // Convert outgoing Date to integer for JSON
    }
    throw Error("GraphQL Date Scalar serializer expected a `Date` object");
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

        let p1 = User.findById(context.user._id);
        let p2 = queryCartQL(CartQueries.queryCart, { id: context.user._id });

        let [user, cart] = await Promise.all([p1, p2]);

        if (!user) {
          throw AuthenticationError;
        }

        user = user.toJSON();
        if (!cart?.cart) {
          throw new Error("error fetching cart");
        }

        user.cart = cart.cart;
        return user;
      } catch (err) {
        console.error(err);
      }
    },

    getCart: async (_, __, context) => {
      if (!context.user?._id) {
        throw AuthenticationError;
      }

      const variables = {
        id: context.user._id,
      };

      const cart = await queryCartQL(CartQueries.queryCart, variables);
      return cart.cart;
    },
    getAllFood: async () => {
      return await Food.find();
    },
    getFood: async (_, { name }) => {
      // Search for the food item by name regardless of the case
      return await Food.findOne({ name: { $regex: new RegExp(name, "i") } });
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
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
      console.log(userInput);
      const user = await User.create(userInput);
      const token = signToken(user);

      return { token, user };
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
      const variables = {
        food,
        id: context.user._id,
      };
      const result = await queryCartQL(CartMutation.updateCartItem, variables);
      if (!result) {
        throw new Error("error fetching cart");
      }
      return result.updateItem;
    },
    addCartItem: async (_, { food }, context) => {
      if (!context.user?._id) {
        throw AuthenticationError;
      }
      const variables = {
        food,
        id: context.user._id,
      };
      const result = await queryCartQL(CartMutation.addCartItem, variables);
      if (!result) {
        throw new Error("error fetching cart");
      }
      return result.addItem;
    },
    removeCartItem: async (_, { food }, context) => {
      if (!context.user?._id) {
        throw AuthenticationError;
      }
      const variables = {
        food,
        id: context.user._id,
      };
      const result = await queryCartQL(CartMutation.removeCartItem, variables);
      if (!result) {
        throw new Error("error fetching cart");
      }
      console.log(result);
      return result.removeItem;
    },
    cartCheckout: async (_, __, context) => {
      if (!context.user?._id) {
        throw AuthenticationError;
      }
      const variables = {
        id: context.user._id,
      };

      const result = await queryCartQL(CartMutation.cartCheckout, variables);
      if (!result) {
        throw new Error("error fetching cart");
      }
      console.log(result);
      return result.checkout;
    },
  },
};

module.exports = resolvers;
