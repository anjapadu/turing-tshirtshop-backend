import {
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLInt,
} from 'graphql';
import DaysType from './typeDef';
import { list } from './resolvers';

const queries = {};
const mutations = {};

queries.eventDays = {
    type: GraphQLList(DaysType),
    resolve: list
}

export {
    queries,
    mutations
}