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

  input AddressInput {
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
    cart: Cart
    household_size: Int
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
    nut_free: Boolean!
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

  type Order {
    id: ID!
    cartId: ID!
    items: [OrderItem!]!
    grandTotal: Money!
    totalItems: Int!
    totalUniqueItems: Int!
    status: OrderStatus!
    createdAt: Date!
    updatedAt: Date!
  }

  type OrderItem {
    id: ID!
    name: String
    images: [String]
    unitTotal: Money!
    lineTotal: Money!
    quantity: Int!
    createdAt: Date!
    updatedAt: Date!
  }
  enum OrderStatus {
    UNPAID
    PAID
  }

  type Query {
    user(email: String!): User!
    getCart(id: ID!): Cart!
    getAllFood: [Food!]!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, address: AddressInput!, business_name: String, first_name:String, last_name:String, household_size:Int ): Auth
    updateUser(username: String, email: String, password: String):Auth
    login(email: String!, password: String!): Auth
    updateCartItem(cartId: ID!, foodId: ID!, quantity: Int!): Cart
    addCartItem(cartId: ID!, foodId: ID!, quantity: Int!): Cart
    removeCartItem(cartId: ID!, foodId: ID!, quantity: Int!): Cart 
  }
`;

module.exports = typeDefs;
