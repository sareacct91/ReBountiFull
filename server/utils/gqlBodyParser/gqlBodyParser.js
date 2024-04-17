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

/** @param {String} str */
function gqlBodyParser(str) {
  const stack = [];
  let isStart = false;
  let isFinish = false;

  let sIndex = str.indexOf('cart');
  let tmp = str.substring(sIndex);
  let tmpArr = [];

  for (const c of tmp) {
    if (isFinish || (isStart && !stack.length)) {
      break;
    } 

    tmpArr.push(c);

    if (c === '{' ) {
      isStart = true;
      stack.push(c);

    } else if (c === '}') {
      stack.pop();

      if (!stack.length) {
        isFinish = true;
      }
    } 
  }
  
  return tmpArr.join('');
}
gqlBodyParser(testString);

