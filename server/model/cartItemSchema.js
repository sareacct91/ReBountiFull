const { Schema } = require("mongoose");
const moneySchema = require("./moneySchema");
const metadataSchema = require("./metadataSchema");

const cartItemSchema = new Schema(
  {
    id: {
      type: Schema.Types.ObjectId,
      ref: "food",
    },
    name: String,
    images: [String],
    unitTotal: moneySchema,
    lineTotal: moneySchema,
    quantity: Number,
    metadata: metadataSchema,
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
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
