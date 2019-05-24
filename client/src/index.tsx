import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';

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
  resolvers: {
    Mutation: {
      toggleTodo: (_root, variables, { cache, getCacheKey }) => {
        const data = { todos: [1] };
        cache.writeData({ data });
        console.log(1);
        return null;
      },
    },
  },
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
