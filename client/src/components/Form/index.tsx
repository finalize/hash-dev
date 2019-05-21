import * as React from 'react';
import styled from 'styled-components';

import Input from '../Form/Input';
import TagList from '../TagList';

import { Query, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { InMemoryCache } from 'apollo-boost';

const cache = new InMemoryCache();

const Form = styled.div``;

const GET_VISIBILITY_FILTER = gql`
  {
    visibilityFilter @client
  }
`;
const form = (props: any) => {
  return (
    <Query query={GET_VISIBILITY_FILTER}>
      {({ data, client }: any) => {
        cache.writeData({
          data: {
            isLoggedIn: !!localStorage.getItem('token'),
            cartItems: [],
          },
        });
        if (data) {
          console.log(data);
        }

        return <Input />;
      }}
    </Query>
  );
};

export default form;
