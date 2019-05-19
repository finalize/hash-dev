import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Main from './components/Main';

const client = new ApolloClient({});

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
