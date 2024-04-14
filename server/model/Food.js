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
    category: {
      type: String,
      enum: ['meat','vegetable','fruit','seafood','dairy','egg','grain','nut','misc'],
    },
    image: {
      type: String,
    },
    vegan: Boolean,
    vegetarian: Boolean,
    gluten_free: Boolean,
    dairy_free: Boolean,
    nut_free: Boolean,
  },
  {
    versionKey: false,
  }
);

const Food = model('Food', foodSchema);

module.exports = Food;
