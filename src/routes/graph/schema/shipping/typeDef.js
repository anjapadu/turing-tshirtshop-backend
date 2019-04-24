import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat
} from 'graphql';

export default new GraphQLObjectType({
    name: 'shipping',
    description: 'shipping',
    fields: function () {
        return {
            id: {
                type: GraphQLInt
            },
            shipping_type: {
                type: GraphQLString
            },
            shipping_cost: {
                type: GraphQLFloat
            },
            shipping_region_id: {
                type: GraphQLInt
            }
        }
    }
})