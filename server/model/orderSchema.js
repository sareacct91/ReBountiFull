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
    payment_amount: Number,
    cart: cartSchema, 
  }, {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

module.exports = orderSchema;
