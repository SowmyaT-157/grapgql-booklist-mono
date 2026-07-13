import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core/index.js';
import { ApolloProvider } from '@apollo/client/react/index.js';

const httpLink = createHttpLink({
  uri: 'http://localhost:3009/', 
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
