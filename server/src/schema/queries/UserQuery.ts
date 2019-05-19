import * as graphql from "graphql";

import UserType from "../types/UserType";

const { GraphQLString } = graphql;

const UserQuery = {
  type: UserType,
  args: {
    id: { type: GraphQLString }
  },
  resolve(parentValue: any, args: { id: string }) {
    return { id: "1", name: "Harry" };
  }
};

export { UserQuery };
