import {
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLInt,
} from 'graphql';
import { BasicResponse } from '../_customTypes';
import { findCountType } from "../_customTypes/findCountType";
import PostType from './typeDef';
import { list, add, remove, update } from './resolvers';

const queries = {};
const mutations = {};

queries.postsDetail = {
    type: findCountType(PostType),
    args:{
        language:{
            type:GraphQLString
        },
        postId:{
            type:GraphQLInt
        }
    },
    resolve: list
}

mutations.addPostDetail = {
    type:BasicResponse,
    resolve:add,
    args: {
        postId:{
            type:GraphQLInt
        },
        title: {
            type: GraphQLString
        },
        content: {
            type: GraphQLString
        },
        language: {
            type: GraphQLString
        },
        gorro:{
            type:GraphQLString
        },
        link:{
            type:GraphQLString
        },
        gallery:{
            type:GraphQLString
        },
        image: {
            type: GraphQLString
        },
        isNewImage: {
            type: GraphQLBoolean
        },
        rawImage:{
            type:GraphQLString
        }
    }
}

mutations.updatePostDetail = {
    type:BasicResponse,
    resolve:update,
    args:{
        id:{
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
        language:{
            type: GraphQLString
        },
        gorro:{
            type:GraphQLString
        },
        link:{
            type:GraphQLString
        },
        gallery:{
            type:GraphQLString
        },
        isNewImage: {
            type: GraphQLBoolean
        },
        rawImage:{
            type:GraphQLString
        }
    }
}

export {
    queries,
    mutations
}