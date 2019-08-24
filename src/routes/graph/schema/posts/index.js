import {
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLInt,
} from 'graphql';
import { BasicResponse } from '../_customTypes';
import { findCountType } from "../_customTypes/findCountType";
import PostType from './typeDef';
import { list, add, remove, update, saveImage } from './resolvers';

const queries = {};
const mutations = {};

queries.posts = {
    type: findCountType(PostType),
    args:{
        filter:{
            type:GraphQLString
        },
        page:{
            type:GraphQLInt
        },
        limit:{
            type:GraphQLInt
        }
    },
    resolve: list
}

mutations.addPost = {
    type:BasicResponse,
    resolve:add,
    args: {
        title: {
            type: GraphQLString
        },
        image: {
            type: GraphQLString
        },
        status: {
            type: GraphQLBoolean,
        },
        type:{
            type:GraphQLInt
        }
    }
}

mutations.deletePosts = {
    type:BasicResponse,
    resolve:remove,
    args:{
        ids : {
            type:GraphQLList(GraphQLInt)
        }
    }
}

mutations.updatedPost = {
    type:BasicResponse,
    resolve:update,
    args:{
        id: {
            type: GraphQLInt
        },
        title: {
            type: GraphQLString
        },
        url: {
            type: GraphQLString
        },
        image: {
            type: GraphQLString
        },
        status: {
            type: GraphQLBoolean,
        },
        type:{
            type:GraphQLInt
        }
    }
}

mutations.saveImage = {
    resolve:saveImage,
    type:BasicResponse,
    args:{
        rawImage:{
            type:GraphQLString
        },
        encode:{
            type:GraphQLString
        }   
    }
}

export {
    queries,
    mutations
}