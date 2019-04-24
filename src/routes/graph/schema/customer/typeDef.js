import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} from 'graphql';

export default new GraphQLObjectType({
    name: 'customer',
    description: 'customer',
    fields: function () {
        return {
            name: {
                type: GraphQLString
            },
            email: {
                type: GraphQLString
            },
            credit_card: {
                type: GraphQLString
            },
            address_1: {
                type: GraphQLString
            },
            address_2: {
                type: GraphQLString
            },
            city: {
                type: GraphQLString
            },
            region: {
                type: GraphQLString
            },
            postal_code: {
                type: GraphQLString
            },
            country: {
                type: GraphQLString
            },
            shippingRegionId: {
                type: GraphQLInt
            },
            shippingRegionName: {
                type: GraphQLString
            },
            day_phone: {
                type: GraphQLString
            },
            eve_phone: {
                type: GraphQLString
            },
            mob_phone: {
                type: GraphQLString
            },
            token: {
                type: GraphQLString
            }
        }
    }
})