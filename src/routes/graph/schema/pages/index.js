import {
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList
} from 'graphql';
import { findCountType } from "../_customTypes/findCountType";
import PageType from './typeDef';
import { list } from './resolvers';
const queries = {};
const mutations = {};

queries.getPages = {
    type: findCountType(PageType),
    resolve: list
};

export {
    queries,
    mutations
}