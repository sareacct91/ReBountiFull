const typeDefs = `
  type FoodItem {
    food: Food
    amount: Int
  }

  type History {
    date: String
    food_item: [FoodItem]
    amount_paid: Float
  }

  type Address {
    street: String
    city: String
    state: String
    zip: Int
  } 

  type User {
    _id: ID
    username: String
    email: String
    address: Address
    isSupplier: Boolean
    isClient: Boolean
    business_name: String
    first_name: String
    last_name: String
    household_size: Int
    cart: [FoodItem]
    history: [History]
  }    

  type Food {
    _id: ID
    name: String
    price: Float
    inventory: Int
    category: String
    image: String
    vegan: Boolean
    vegetarian: Boolean
    gluten_free: Boolean
    dairy_free: Boolean
    nut: Boolean
  } 

  type Cart {
    foodItem: [FoodItem]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user(email: String!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateCartItem(foodId: ID!, amount: Int!): Cart
    updateUser(username: String, email: String, password: String):Auth
  }
`;

module.exports = typeDefs;
