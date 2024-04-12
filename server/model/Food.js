const { Schema, model } = require('mongoose');

const foodSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    inventory: {
      type: Number,
      require: true,
    },
    calories: {
      type: Number,
      require: true,
    },
    category: {
      type: String,
      enum: ['Meat',],
    },
    vegan: Boolean,
    vegetarian: Boolean,
    gluten_free: Boolean,
  }
);

const Food = model('Food', foodSchema);

module.exports = Food;
