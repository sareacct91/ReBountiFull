module.exports = {
  addItem(a) {
    return `
      mutation {
        addItem(
          input: {
            cartId: "${a.user.cart}"
            id: "${a.food._id}"
            name: "${a.food.name}"
            price: ${a.food.price}
          }
        ) {
          id
          isEmpty
          totalItems
          items {
            id
            name
            quantity
            unitTotal {
              amount
              formatted
          }
            lineTotal {
              amount
              formatted
          }
            images
          }
          grandTotal {
            amount
            formatted
          }
        }
      }
    `; 
  },
}
