const { ApolloServer } = require('@apollo/server');
// const { typeDefs, resolvers } = require('./schema');
// const server = new ApolloServer({
//   typeDefs,
//   resolvers
// });

async function startApolloServer() {
  // await server.start();

  const express = require('express');
  const { expressMiddleware } = require('@apollo/server/express4');
  // const { authMiddleware } = require('./utils/auth');
  const path = require('path');
  const db = require('./config/connection');
  // const routes = require('./routes');

  const app = express();
  const PORT = process.env.PORT || 3001;

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  // app.use('/graphql', expressMiddleware(server, {
  //   context: authMiddleware
  // }))

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

  // app.use(routes);

  // db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server listening on localhost:${PORT}`);
      console.log(`GraphQL at http://localhost:${PORT}/graphql`);
    });
  // });
}
startApolloServer();
