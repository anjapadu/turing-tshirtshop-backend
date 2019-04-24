import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} from 'graphql';
import ShippingType from '../shipping/typeDef';

export default new GraphQLObjectType({
    name: 'shipping_region',
    description: 'shipping_region',
    fields: function () {
        return {
            id: {
                type: GraphQLInt
            },
            shipping_region: {
                type: GraphQLString
            },
            shipping: {
                type: GraphQLList(ShippingType)
            }
        }
    }
})