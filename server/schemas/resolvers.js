const { GraphQLScalarType, Kind } =  require('graphql');
const { User, Food } = require("../model");
const { signToken, AuthenticationError } = require("../utils/auth");
const  { queryCartQL, CartQueries, CartMutation } = require("../utils/cartQL")
// const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");


const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    if (value instanceof Date) {
      return value.getTime(); // Convert outgoing Date to integer for JSON
    }
    throw Error('GraphQL Date Scalar serializer expected a `Date` object');
  },
  parseValue(value) {
    if (typeof value === 'number') {
      return new Date(value); // Convert incoming integer to Date
    }
    throw new Error('GraphQL Date Scalar parser expected a `number`');
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
    user: async (_, { email }) => {
      const user = await User.findOne({ email });
      return user;
    },
    getCart: async (_, args) => {
      const cart = await queryCartQL(CartQueries.queryCart, args); 
      return cart;
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPw(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
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
    updateCartItem: async (parent, { foodId, amount }, context) => {

      if (context.user) {
        const foodItem = { foodId, amount };

        return User.findByIdAndUpdate(context.user._id, {
          $push: { cart: foodItem },
        });
      }

      throw AuthenticationError;
    },
    addCartItem: async (parent, { foodId, amount }, context) => {

      if (context.user) {
        const foodItem = { foodId, amount };

        return User.findByIdAndUpdate(context.user._id, {
          $push: { cart: foodItem },
        });
      }

      throw AuthenticationError;
    },

    // updateProduct: async (parent, { _id, quantity }) => {
    //   const decrement = Math.abs(quantity) * -1;

    //   return await Product.findByIdAndUpdate(
    //     _id,
    //     { $inc: { quantity: decrement } },
    //     { new: true }
    //   );
    // },
  },
};

module.exports = resolvers;
