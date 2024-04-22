const { Cart } = require("../../Model");
const shapeCartData = require("./shapeCartData");

async function addCartItem({ food, id }) {
  // console.log('\ncartOps addCartItem: \n')
  try {
    let cart = await Cart.findOneAndUpdate(
      { id, 'items.id': food._id},
      { $inc: { 'items.$.quantity': food.quantity} },
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

    if (!cart || cart.items.every(item => item.id._id.toString() !== food._id)) {
      console.log("food doesn't exist in cart. Pushing new one")
      cart = await Cart.findOneAndUpdate(
        { id },
        { $push: { items: { id: food._id, quantity: food.quantity } } },
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
    }

    if (!cart) {
      throw new Error("failed to update cart");
    }

    return shapeCartData(cart.toObject());
  } catch (err) {
    console.error(err);
    return { error: err };
  }
};


module.exports = addCartItem;
