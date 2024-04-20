const { Schema, model } = require('mongoose');
const cartSchema = require('./cartSchema');

const orderSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
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
