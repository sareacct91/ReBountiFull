const { Cart } = require("../../model");
const shapeCartData = require("./shapeCartData");

async function removeCartItem({ food, id }) {
  // console.log('\ncartOps removeCartItem: \n');
  try {
    let cart = await Cart.findOneAndUpdate(
      { id },
      { $pull: { items: {id: food._id }}},
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


module.exports = removeCartItem;
