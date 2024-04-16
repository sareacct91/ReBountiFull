module.exports = {
  queryCart(a) {
    return `
      query {
        cart(id: "${a.user._id}" ) {
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
    `
  } 
}
