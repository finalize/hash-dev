import * as graphql from "graphql";

import User from "../../db/Model/User";

import UserType from "../types/UserType";

const { GraphQLString } = graphql;

const UserQuery = {
  type: UserType,
  args: {
    id: { type: GraphQLString }
  },
  resolve(parentValue: any, args: { id: string }) {
    User.find({ name: "Harr" }).then(data => {
      console.log(data);
    });

    return { id: "1", name: "Harry" };
  }
};

export { UserQuery };
