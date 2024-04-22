const { Schema } = require("mongoose");
const cartItemSchema = require("./cartItemSchema");
const moneySchema = require("./moneySchema");

const cartSchema = new Schema(
  {
    id: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    totalItems: Number,
    totalUniqueItems: Number,
    grandTotal: moneySchema,
    payment_amount: Number,
    items: [cartItemSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

module.exports = cartSchema;

  //   id: ID!
  //   totalItems: Int!
  //   totalUniqueItems: Int!
  //   items: [CartItem]!
  //   grandTotal: Money!
