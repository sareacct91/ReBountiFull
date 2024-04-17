
const testString = `
  query User($email: String!) {
    user(email: $email) {
      _id
      username
      email
      address {
        street
        city
        state
        zip
      }
      isSupplier
      isClient
      business_name
      first_name
      last_name
      household_size
      cart {
        id
        totalItems
        items {
          id
          name
          images
          unitTotal {
            amount
            formatted
          }
          lineTotal {
            amount
            formatted
          }
          quantity
        }
        grandTotal {
          amount
          formatted
        }
        abandoned
        totalUniqueItems
      }
      history {
        date
        food_item {
          food {
            _id
            name
            price
            inventory
            category
            image
            vegan
            vegetarian
            gluten_free
            dairy_free
            nut
          }
          amount
        }
        amount_paid
      }
    }
  }
`
