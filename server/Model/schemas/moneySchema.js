const { Schema } = require("mongoose");

const moneySchema = new Schema(
  {
    amount: Number,
    formatted: String,
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

module.exports = moneySchema;

  // type Money {
  //   amount: Int
  //   formatted: String
  // }
