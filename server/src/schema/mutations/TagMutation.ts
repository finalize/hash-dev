import { GraphQLObjectType, GraphQLString } from "graphql";

import TagType from "../types/UserType";

import * as Resolver from "../resolvers/Tag";

export const addTag = {
  type: TagType,
  args: {
    name: { type: GraphQLString }
  },
  async resolve(parentValue: any, args: any) {
    return await Resolver.createTag({ name: args.name });
  }
};
