import {
    GraphQLObjectType,
    GraphQLInputType,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
} from 'graphql';

export default new GraphQLObjectType({
    name: 'hotels',
    description: 'hotels',
    fields: function () {
        return {
            id: {
                type: GraphQLInt
            },
            name: {
                type: GraphQLString
            },
            address: {
                type: GraphQLString,
            },
            status: {
                type: GraphQLBoolean
            },
            visible: {
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