import {
    GraphQLString,
    GraphQLFloat,
    GraphQLInt,
    GraphQLObjectType,
} from 'graphql'
import ProductType from './typeDef';
import { DataPage, findCountType } from '../_customTypes';
import { fetchProducts, fetchMaxMinPrice } from './resolvers';

const queries = {},
    mutations = {};

queries.maxMinPrice = {
    type: new GraphQLObjectType({
        name: 'maxMinPrice',
        description: '',
        fields: function () {
            return {
                min: {
                    type: GraphQLFloat
                },
                max: {
                    type: GraphQLFloat
                }
            }
        }
    }),
    resolve: fetchMaxMinPrice
}

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
        },
        autoComplete: {
            type: GraphQLString
        },
        color: {
            type: GraphQLString
        },
        size: {
            type: GraphQLString
        },
        minPrice: {
            type: GraphQLFloat
        },
        maxPrice: {
            type: GraphQLFloat
        }
    },
    resolve: fetchProducts
}

export {
    queries,
    mutations
}