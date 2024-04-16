import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import Page from './components/Page';
import Header from './components/Header/header';
import Footer from "./components/Footer/footer";
import Hero from "./components/Hero/hero";

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
  return (
    <ApolloProvider client={client}>
        <Header />
        <Hero />
        <main className='flex grow'>
          <Page />
        </main>
        <Footer />
    </ApolloProvider>
  )
}
export default App

