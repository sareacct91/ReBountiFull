module.exports = {
  queryCart({id}) {
    return `
      query {
        cart(id: "${id}" ) {
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
