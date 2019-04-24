import {
    GraphQLFloat,
    GraphQLInt,
    GraphQLString,
    GraphQLInputObjectType,
    GraphQLObjectType,
    GraphQLList
} from 'graphql'
import OrderType from './typeDef';
import { createOrder } from './resolvers';
import GraphQLJSON from 'graphql-type-json';
import OrderDetailType from '../order_detail/typeDef';

const queries = {},
    mutations = {};

mutations.order = {
    type: OrderType,
    args: {
        address_1: {
            type: GraphQLString
        },
        address_2: {
            type: GraphQLString
        },
        city: {
            type: GraphQLString
        },
        country: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        postal_code: {
            type: GraphQLString
        },
        region: {
            type: GraphQLString
        },
        shipping_region_id: {
            type: GraphQLInt
        },
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
        },
        detail: {
            type: GraphQLList(new GraphQLInputObjectType({
                name: 'input_detail_order',
                fields: OrderDetailType.getFields()
            }))
        },
        card: {
            type: new GraphQLInputObjectType({
                name: 'input_card_order',
                fields: (new GraphQLObjectType({
                    name: 'cardType',
                    description: '',
                    fields: () => ({
                        number: {
                            type: GraphQLString
                        },
                        exp_month: {
                            type: GraphQLString
                        },
                        exp_year: {
                            type: GraphQLString
                        },
                        cvc: {
                            type: GraphQLString
                        }
                    })
                })).getFields()
            })
        }

    },
    resolve: createOrder
}

export {
    queries,
    mutations
}