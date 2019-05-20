import * as graphql from "graphql";

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const TagType: any = new GraphQLObjectType({
  name: "TagType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    relationalTags: { type: new GraphQLList(TagType) }
  })
});

console.log(TagType);

export default TagType;
