import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Main from './components/Main';

const cache = new InMemoryCache();
cache.writeData({
  data: {
    todos: ['test'],
  },
});
const client = new ApolloClient({
  cache,
  link: new HttpLink(),
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Main} />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
