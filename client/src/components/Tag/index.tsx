import * as React from 'react';
import styled from 'styled-components';

const Tag = styled.input`
  width: 560px;
  height: 48px;
  border-radius: 50px;
  outline: none;
  border: 1px solid #ccc;
  padding: 4px 24px;
  font-size: 20px;
  color: #555;
`;

const tag = () => {
  return <Tag />;
};

export default tag;
