import * as React from 'react';
import styled from 'styled-components';

import Input from '../Form/Input';
import TagList from '../TagList';

const Main = styled.div`
  text-align: center;
  padding-top: 160px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fafafa;
`;

const main = () => {
  return (
    <Main>
      <Input />
      <TagList />
    </Main>
  );
};

export default main;
