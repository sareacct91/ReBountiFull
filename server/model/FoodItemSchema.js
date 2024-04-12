const { Schema, model } = require('mongoose');

const foodItemSchema = new Schema(
  {
    food: {
      type: Schema.Types.ObjectId,
      ref: 'Food',
    },
    amount: {
      type: Number,
      require: true,
    },
  }, {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

module.exports = foodItemSchema;
