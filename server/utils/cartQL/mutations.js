module.exports = {
  addCartItem(a) {
    return `
      mutation {
        addItem(
          input: {
            cartId: "${a.id}"
            id: "${a.food._id}"
            name: "${a.food.name}"
            price: ${a.food.price}
            quantity: ${a.food.quantity || 1}
          }
        ) {
          id
          isEmpty
          totalItems
          totalUniqueItems
          abandoned
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
  removeCartItem(a) {
    return `
      mutation {
        removeItem(
          input: {
            cartId: "${a.id}"
            id: "${a.food._id}"
          }
        ) {
          id
          isEmpty
          totalItems
          totalUniqueItems
          abandoned
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

  updateCartItem(a) {
    return `
      mutation {
        updateItem(
          input: {
            cartId: "${a.id}"
            id: "${a.food._id}"
            name: "${a.food.name}"
            price: ${a.food.price}
            quantity: ${a.food.quantity || 1}
          }
        ) {
          id
          isEmpty
          totalItems
          totalUniqueItems
          abandoned
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

  cartCheckout(a) {
    return `
      mutation {
        checkout(
          input: {
            cartId: "${a.id}"
            email: "bob@bob.com"
            shipping: {
              name: "Bob"
              line1: "123 Anywhere Lane"
              city: "Brooklyn"
              postalCode: "95255"
              country: "USA"
            }
          }
        ) {
          id
          items {
            id
            name
            quantity
            lineTotal {
              amount
              formatted
            }
          }
          grandTotal {
            amount
            formatted
          }
          createdAt
        }
      }
    `;
  },
};
