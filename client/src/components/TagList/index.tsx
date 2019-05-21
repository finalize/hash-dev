import * as React from 'react';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const TagList = styled.div`
  width: 560px;
  height: 48px;
`;

const taglist = (props: any) => {
  return <TagList />;
};

const fetchTags = gql`
  {
    users {
      id
      name
    }
  }
`;

export default graphql(fetchTags)(taglist);
