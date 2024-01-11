import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './components/App.tsx';
import './styles.less';
import { DataContextProvider } from './context/DataContext.tsx';

const client = new ApolloClient({
  uri: 'https://simple-jokes-api-50bx.onrender.com/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <DataContextProvider>
        <div className="container">
          <App />
        </div>
      </DataContextProvider>
    </ApolloProvider>
  </React.StrictMode>
);