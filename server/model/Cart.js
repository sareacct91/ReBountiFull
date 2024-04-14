const { Schema, model } = require("mongoose");
const foodItemSchema = require("./FoodItemSchema");

const cartSchema = new Schema({
  cart_id: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  cart_owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  cart_items: [foodItemSchema],
});

const Cart = model("Cart", cartSchema);

module.exports = Cart;
