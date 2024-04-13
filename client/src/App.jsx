import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import Page from './components/Page';
import { useState } from 'react';
import Header from  './components/Header/header'
import Nav from "./components/Nav/nav";
import Footer from "./components/Footer/footer";



// temp solution until we decide on how to store the token
const token = localStorage.getItem('id_token');
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: token ? `Bearer ${token}` : '',
  },
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <ApolloProvider client={client}>
      <Header />
        <Nav/>
       <main>
        <Page/>
      </main>
      <Footer />
    </ApolloProvider>
  )
}
export default App

