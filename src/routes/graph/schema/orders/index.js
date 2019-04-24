import {
    GraphQLFloat,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from 'graphql'
import OrderType from './typeDef';
import { createOrder } from './resolvers';
import GraphQLJSON from 'graphql-type-json';

const queries = {},
    mutations = {};

mutations.order = {
    type: OrderType,
    args: {
        total_amount: {
            type: GraphQLFloat
        },
        comments: {
            type: GraphQLString
        },
        detail: {
            type: GraphQLJSON
        },
        shipping_id: {
            type: GraphQLInt
        },
        tax_id: {
            type: GraphQLInt
        },
        customer_id: {
            type: GraphQLInt
        }
    },
    resolve: createOrder
}

export {
    queries,
    mutations
}