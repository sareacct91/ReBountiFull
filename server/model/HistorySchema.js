const { Schema, model } = require('mongoose');
const foodItemSchema = require('./FoodItemSchema');

const historySchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    date: {
      type: Date,
      require: true,
      default: Date.now,
      get: (v) => v.toLocaleString(),
    },
    food_item: [foodItemSchema], 
    grand_total: {
      type: Number,
    }
  }, {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

module.exports = historySchema;
