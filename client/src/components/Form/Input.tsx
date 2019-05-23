import * as React from 'react';
import styled from 'styled-components';
import { ApolloConsumer, graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Input = styled.input`
  width: 560px;
  height: 48px;
  border-radius: 50px;
  outline: none;
  border: 1px solid #ccc;
  padding: 4px 24px;
  font-size: 20px;
  color: #555;
`;

const GET_VISIBILITY_FILTER = gql`
  {
    visibilityFilter @client
  }
`;

const input = (props: any) => {
  const [value, setValue] = React.useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>, client: any) => {
    e.preventDefault();

    props
      .mutate({
        variables: {
          name: value,
        },
        refetchQueries: [{ GET_VISIBILITY_FILTER }],
      })
      .then((data: any) => {
        client.writeData({ data: { test: 1 } });
        console.log(client);
        setValue('');
      });
  };

  return (
    <ApolloConsumer>
      {client => {
        return (
          <Input
            onChange={async () => {
              client.writeData({ data: { test: !true } });
              const { data } = await client.query({
                query: gql`
                  {
                    test @client
                  }
                `,
              });
              console.log(data);
            }}
          />
        );
      }}
    </ApolloConsumer>
  );
};

const mutation = gql`
  mutation AddTag($name: String) {
    addTag(name: $name) {
      name
    }
  }
`;

export default graphql(mutation)(input);
