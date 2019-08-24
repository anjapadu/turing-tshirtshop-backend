import {
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLInt,
} from 'graphql';
import { findCountType } from "../_customTypes/findCountType";
import { BasicResponse } from '../_customTypes';
import PagseDetailType from './typeDef';
import { list, insert, update } from './resolvers';

const queries = {};
const mutations = {};

queries.getPagesDetail = {
    type: findCountType(PagseDetailType),
    args:{
        section_id:{
            type:GraphQLInt
        },
        language:{
            type:GraphQLString
        }
    },
    resolve: list
}

mutations.addSectionDetail = {
    type: BasicResponse,
    args:{
        language:{
            type:GraphQLString
        },
        content:{
            type:GraphQLString
        },
        section_id:{
            type:GraphQLInt
        },
        page_id:{
            type:GraphQLInt
        }
    },
    resolve:insert
}

mutations.updateSectionDetail = {
    type:BasicResponse,
    args:{
        id:{
            type:GraphQLInt
        },
        language:{
            type:GraphQLString
        },
        content:{
            type:GraphQLString
        }
    },
    resolve:update
}

export {
    queries,
    mutations
}