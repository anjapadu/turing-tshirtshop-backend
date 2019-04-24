import {
    GraphQLList,
} from 'graphql';
import ShippingRegionType from './typeDef';
import { fetchShippingRegion } from './resolvers';

const queries = {},
    mutations = {};

queries.shippingRegion = {
    type: GraphQLList(ShippingRegionType),
    resolve: fetchShippingRegion
}

export {
    queries,
    mutations
}