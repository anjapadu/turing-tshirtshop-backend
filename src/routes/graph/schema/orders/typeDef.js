import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLList
} from 'graphql';

export default new GraphQLObjectType({
    name: 'orders',
    description: 'orders',
    fields: function () {
        return {
            id: {
                type: GraphQLInt
            },
            total_amount: {
                type: GraphQLFloat
            },
            created_on: {
                type: GraphQLString
            },
            shipped_on: {
                type: GraphQLString
            },
            status: {
                type: GraphQLInt
            },
            comments: {
                type: GraphQLString
            },
            customer_id: {
                type: GraphQLInt
            },
            auth_code: {
                type: GraphQLString
            },
            reference: {
                type: GraphQLString
            },
            shipping_id: {
                type: GraphQLInt
            },
            tax_id: {
                type: GraphQLInt
            }
        }
    }
})