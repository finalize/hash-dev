import * as React from 'react';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
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

const input = () => {
  return <Input />;
};

export default input;
