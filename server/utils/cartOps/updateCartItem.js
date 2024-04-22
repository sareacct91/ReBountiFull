const { Cart } = require("../../Model");
const shapeCartData = require("./shapeCartData");

async function updateCartItem({ food, id }) {
  // console.log('\ncartOps updateCartItem: \n');
  try {
    let cart = await Cart.findOneAndUpdate(
      { id, 'items.id': food._id },
      { $set: { 'items.$.quantity': food.quantity }},
      {
        new: true,
        runValidators: true,
        projection: '-_id',
        populate: {
          path: 'items.id',
          select: '_id name price inventory image'
        }
      }
    );

    if (!cart) {
      throw new Error("failed to update cart");
    }

    return shapeCartData(cart.toObject());
  } catch (err) {
    console.error(err);
    return { error: err };
  }
}


module.exports = updateCartItem;
