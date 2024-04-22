const { Schema, model } = require('mongoose');
const cartSchema = require('./cartSchema');

const orderSchema = new Schema(
  {
    date: {
      type: Date,
      require: true,
      default: Date.now,
      get: (v) => v.toLocaleString(),
    },
    stripeId: String,
    cart: cartSchema, 
  }, {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

module.exports = orderSchema;
