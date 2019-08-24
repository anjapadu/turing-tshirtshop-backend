import {
    GraphQLObjectType,
    GraphQLInputType,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
} from 'graphql';

export default new GraphQLObjectType({
    name: 'post_detail',
    description: 'post_detail',
    fields: function () {
        return {
            id: {
                type: GraphQLInt
            },
            postId:{
                type:GraphQLInt
            },
            title: {
                type: GraphQLString
            },
            content: {
                type: GraphQLString
            },
            image: {
                type: GraphQLString
            },
            language: {
                type: GraphQLString
            },
            status: {
                type: GraphQLBoolean,
            },
            visible: {
                type: GraphQLBoolean
            },
            gorro:{
                type: GraphQLString
            },
            link:{
                type: GraphQLString
            },
            gallery:{
                type: GraphQLString
            },
            createdAt: {
                type: GraphQLString,
                field:"created_at"
            },
            updatedAt: {
                type: GraphQLString,
                field:"updated_at"
            }
        }
    }
})