import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
} from 'graphql';

export default new GraphQLObjectType({
    name: 'users',
    description: 'users',
    fields: function () {
        return {
            id: {
                type: GraphQLInt
            },
            email: {
                type: GraphQLString
            },
            password: {
                type: GraphQLString
            },
            username: {
                type: GraphQLString
            },
            firstname: {
                type: GraphQLString
            },
            status: {
                type: GraphQLBoolean
            },
            lastname: {
                type: GraphQLString
            },
            lastLogin: {
                type: GraphQLString
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