import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList
} from 'graphql';

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