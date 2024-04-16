const typeDefs = `
  scalar Date

  type FoodItem {
    food: Food!
    amount: Int!
  }

  type History {
    date: Date!
    food_item: [FoodItem!]!
    amount_paid: Float!
  }

  type Address {
    street: String!
    city: String!
    state: String!
    zip: Int!
  } 

  type User {
    _id: ID!
    username: String!
    email: String!
    address: Address!
    isSupplier: Boolean!
    isClient: Boolean!
    business_name: String
    first_name: String
    last_name: String
    household_size: Int
    cart: String!
    history: [History!]!
  }    

  type Food {
    _id: ID!
    name: String!
    price: Float!
    inventory: Int!
    category: String!
    image: String
    vegan: Boolean!
    vegetarian: Boolean!
    gluten_free: Boolean!
    dairy_free: Boolean!
    nut: Boolean!
  } 

  type Auth {
    token: ID!
    user: User!
  }

  type Cart {
    id: ID
    totalItems: Int
    totaluniqueItems: Int
    items: [CartItem!]!
    subTotal: Money!
    taxTotal: Money!
    grandTotal: Money!
    abandoned: Boolean
  }
  type CartItem {
    id: ID!
    name: String
    description: String
    images: [String]
    unitTotal: Money!
    lineTotal: Money!
    quantity: Int!
  }
  type Money {
    amount: Int
    currency: Currency!
    formatted: String!
  }
  type Currency {
    symbol: String
    thousandsSeparator: String
    decimalSeparator: String
    decimalDigits: Int
  }

  type Query {
    user(email: String!): User!
    getCart(id: ID!): Cart!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateCartItem(foodId: ID!, amount: Int!): Cart
    updateUser(username: String, email: String, password: String):Auth
  }
`;

module.exports = typeDefs;
