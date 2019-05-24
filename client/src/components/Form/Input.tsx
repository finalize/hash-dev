import * as React from 'react';
import styled from 'styled-components';
import { ApolloConsumer, graphql, Query, Mutation } from 'react-apollo';
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
    todos @client
  }
`;

const TOGGLE_TODO = gql`
  mutation ToggleTodo($id: Int!) {
    toggleTodo(id: $id) @client
  }
`;

const input = (props: any) => {
  const [value, setValue] = React.useState('');

  const onSubmit = async (
    e: React.ChangeEvent<HTMLInputElement>,
    client: any,
  ) => {
    e.preventDefault();
    client.writeData({ data: { test: !true } });
    client.toggleTodo;
    // props
    //   .mutate({
    //     variables: {
    //       name: value,
    //     },
    //     refetchQueries: [{ GET_VISIBILITY_FILTER }],
    //   })
    //   .then((data: any) => {
    //     client.writeData({ data: { test: 1 } });
    //     console.log(client);
    //     setValue('');
    //   });
  };

  return (
    <Query query={GET_VISIBILITY_FILTER}>
      {({ data: { todos } }: any) => (
        <Mutation mutation={TOGGLE_TODO}>
          {(toggleTodo: any) => (
            <Input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                toggleTodo();
                console.log(todos);
              }}
            />
          )}
        </Mutation>
      )}
    </Query>
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
