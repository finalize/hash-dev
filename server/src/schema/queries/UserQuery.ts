import * as graphql from "graphql";

import User from "../../db/Model/User";

import UserType from "../types/UserType";

const { GraphQLString } = graphql;

const UserQuery = {
  type: UserType,
  args: {
    id: { type: GraphQLString }
  },
  async resolve(parentValue: any, args: { id: string }) {
    return await User.find({ name: "Harr" });
  }
};

export { UserQuery };
