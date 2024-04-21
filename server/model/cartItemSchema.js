const { Schema } = require("mongoose");
const metadataSchema = require("./metadataSchema");

const cartItemSchema = new Schema(
  {
    id: {
      type: Schema.Types.ObjectId,
      ref: "food",
    },
    quantity: {
      type: Number,
      default: 1,
      require: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    toObject: {
      getters: true,
    },
    _id: false,
  }
);

module.exports = cartItemSchema;

  // type CartItem {
  //   id: ID!
  //   name: String!
  //   images: [String]
  //   unitTotal: Money!
  //   lineTotal: Money!
  //   quantity: Int!
  // }
