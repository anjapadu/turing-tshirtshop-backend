import {
    GraphQLList,
    GraphQLInt
} from 'graphql'
import ProductType from './typeDef';
import { fetchProducts } from './resolvers';

const queries = {},
    mutations = {};

queries.products = {
    type: GraphQLList(ProductType),
    args: {
        categoryId: {
            type: GraphQLInt
        },
        departmentId: {
            type: GraphQLInt
        }
    },
    resolve: fetchProducts
}

export {
    queries,
    mutations
}