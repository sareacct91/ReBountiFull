const { Cart } = require("../../model");
const shapeCartData = require("./shapeCartData");

async function getCart(id) {
  try {
    const cartData = await Cart.findOne(
      {id},
      "-_id",
      {
        new: true, 
        populate: {
          path: 'items.id',
          select: '_id name price inventory image'
        } 
      }
    );

    if (!cartData) {
      throw new Error("can't find cart");
    }

    return shapeCartData(cartData.toObject());
  } catch (err) {
    console.error(err)
    return { error: err }; 
  }
};

module.exports = getCart;  
