import { GraphQLObjectType, GraphQLSchema } from "graphql";

import { UserQuery } from "./queries/UserQuery";
import { addTag } from "./mutations/TagMutation";

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    users: UserQuery
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addTag
  }
});

export default new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
