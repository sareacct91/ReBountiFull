const { Schema, model } = require("mongoose");

const foodItemSchema = new Schema(
  {
    id: {
      type: Schema.Types.ObjectId,
      ref: "Food",
    },
    quantity: {
      type: Number,
      require: true,
    },
    lineTotal: {
      type: Number,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

module.exports = foodItemSchema;
