// "product_id":9,"attributes":"white, S","product_name":"Corsica","quantity":2,"unit_cost":22}

import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
} from 'graphql';

export default new GraphQLObjectType({
    name: 'order_detail',
    description: 'order_detail',
    fields: function () {
        return {
            product_id: {
                type: GraphQLInt
            },
            attributes: {
                type: GraphQLString
            },
            product_name: {
                type: GraphQLString
            },
            quantity: {
                type: GraphQLInt
            },
            unit_cost: {
                type: GraphQLFloat
            }
        }
    }
})