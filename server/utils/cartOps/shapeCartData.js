const { inspect } = require("util");

function shapeCartData(cartData) {
  // console.log(inspect(cartData, {depth: null}));

  let totalItems = 0;
  let grandTotal = 0;

  for (let i = 0; i < cartData.items.length; i++) {
    // test amount
    // cartData.items[i].quantity = 10;

    const item = cartData.items[i];
    const price = item.id.price;
    const totalPrice = price * item.quantity;

    // sum up the total items
    totalItems += item.quantity;
    grandTotal += totalPrice;

    cartData.items[i].name = item.id.name;
    cartData.items[i].images = [item.id.image];
    cartData.items[i].unitTotal = {
      amount: price,
      formatted: `$${(price / 100).toFixed(2)}`
    }
    cartData.items[i].lineTotal = {
      amount: totalPrice,
      formatted: `$${(totalPrice / 100).toFixed(2)}`
    }
    cartData.items[i].metadata = {
      inventory: item.id.inventory
    }
    cartData.items[i].id = item.id._id;
  }

  cartData.totalItems = totalItems; 
  cartData.grandTotal =  {
    amount: grandTotal,
    formatted: `$${(grandTotal / 100).toFixed(2)}`
  };
  cartData.totalUniqueItems = cartData.items.length;

  // console.log(inspect(cartData, {depth: null}))
  return cartData;
}

module.exports = shapeCartData;
