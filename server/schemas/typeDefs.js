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

  input UserInput {
    username: String!
    email: String!
    password: String!
    address: AddressInput!
    isSupplier: Boolean!
    isClient: Boolean!
    business_name: String
    first_name: String
    last_name: String
    household_size: Int
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

  input FoodInput {
    _id: ID!
    name: String
    price: Float
    image: String
    quantity: Int
    inventory: Int
  }

  type Auth {
    token: ID!
    user: User!
  }

  type Cart {
    id: ID!
    totalItems: Int!
    totalUniqueItems: Int!
    items: [CartItem]!
    grandTotal: Money!
  }

  scalar JSON
  type CartItem {
    id: ID!
    name: String!
    images: [String]
    unitTotal: Money!
    lineTotal: Money!
    quantity: Int!
    metadata: JSON
  }

  type Money {
    amount: Int
    formatted: String
  }

  input CartInput {
    id: ID!
    totalItems: Int!
    totalUniqueItems: Int!
    items: [CartItemInput]!
    grandTotal: MoneyInput!
  }

  input CartItemInput {
    id: ID!
    name: String!
    images: [String]
    unitTotal: MoneyInput!
    lineTotal: MoneyInput!
    quantity: Int!
  }

  input MoneyInput {
    amount: Int
    formatted: String
  }

  input OrderInput {
    cart: CartInput!
    payment_amount: Int!
  }

  type Checkout {
    session: String!
  }

  type Query {
    user: User!
    getCart: Cart!
    getAllFood: [Food!]!
    getFood(name: String!): Food!
    getFoodByCategory(category: String!): [Food!]!
    getFoodByPreference(
      vegan: Boolean
      vegetarian: Boolean
      glutenFree: Boolean
      dairyFree: Boolean
      nutFree: Boolean
    ): [Food!]!
    cartCheckout(order: OrderInput!): Checkout!
  }

  type Mutation {
    addUser(userInput: UserInput!): Auth
    updateUser(username: String, email: String, password: String):Auth
    login(email: String!, password: String!): Auth
    updateInventory(inventoryId: ID!, inventory: Int!): Food!
    updateCartItem(food:FoodInput!): Cart
    addCartItem(food:FoodInput!): Cart
    removeCartItem(food:FoodInput!): Cart
    saveOrder(stripeId: ID!): User
  }
`;

module.exports = typeDefs;
