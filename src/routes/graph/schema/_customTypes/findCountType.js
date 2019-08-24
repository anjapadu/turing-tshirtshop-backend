import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList
} from 'graphql';
import GraphQLJSON from 'graphql-type-json'

export const findCountType = (type) => new GraphQLObjectType({
    name: `findCount_${type}`,
    fields: () => ({
        data: {
            type: GraphQLList(type)
        },
        count: {
            type: GraphQLInt
        }
    })
})