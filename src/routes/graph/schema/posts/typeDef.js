import {
    GraphQLObjectType,
    GraphQLInputType,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
} from 'graphql';

export default new GraphQLObjectType({
    name: 'posts',
    description: 'posts',
    fields: function () {
        return {
            id: {
                type: GraphQLInt
            },
            title: {
                type: GraphQLString
            },
            status: {
                type: GraphQLBoolean,
            },
            visible: {
                type: GraphQLBoolean
            },
            createdAt: {
                type: GraphQLString,
                field:"created_at"
            },
            updatedAt: {
                type: GraphQLString,
                field:"updated_at"
            },
            type:{
                type:GraphQLInt
            }
        }
    }
})