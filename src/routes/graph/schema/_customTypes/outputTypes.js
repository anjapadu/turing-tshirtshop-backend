import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList
} from 'graphql';

/**
 * Response object that adds total count of rows
 */
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