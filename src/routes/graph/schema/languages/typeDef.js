import {
    GraphQLObjectType,
    GraphQLInputType,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
} from 'graphql';

export default new GraphQLObjectType({
    name: 'language',
    description: 'language',
    fields: function () {
        return {
            id: {
                type: GraphQLInt
            },
            name: {
                type: GraphQLString
            },
            iso2: {
                type: GraphQLString,
            },
            status: {
                type: GraphQLBoolean
            },
            createdAt: {
                type: GraphQLString
            },
            updatedAt: {
                type: GraphQLString
            }
        }
    }
})