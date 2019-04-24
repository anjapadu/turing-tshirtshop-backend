import {
    GraphQLList,
    GraphQLInt
} from 'graphql'
import ProductType from './typeDef';
import { DataPage, findCountType } from '../_customTypes';
import { fetchProducts } from './resolvers';

const queries = {},
    mutations = {};

queries.products = {
    type: findCountType(ProductType),
    args: {
        categoryId: {
            type: GraphQLInt
        },
        departmentId: {
            type: GraphQLInt
        },
        paging: {
            type: DataPage
        },
        id: {
            type: GraphQLInt
        },
        notId: {
            type: GraphQLInt
        }
    },
    resolve: fetchProducts
}

export {
    queries,
    mutations
}