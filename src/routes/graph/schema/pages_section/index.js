import {
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLInt,
} from 'graphql';
import { findCountType } from "../_customTypes/findCountType";
import PagesSectionType from './typeDef';
import { list } from './resolvers';

const queries = {};
const mutations = {};

queries.getPagesSection = {
    type: findCountType(PagesSectionType),
    args:{
        page_id:{
            type:GraphQLInt
        },
    },
    resolve: list
}

export {
    queries,
    mutations
}