import {
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean
} from 'graphql';
// import { BasicResponse } from '../_customTypes';
import UserType from './typeDef';
import { login } from './resolvers';

const queries = {};
const mutations = {};

queries.login = {
    type: UserType,
    args: {
        email: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        },  
    },
    resolve: login
}

export {
    queries,
    mutations
}