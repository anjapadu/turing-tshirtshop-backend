import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLList
} from 'graphql';
import Category from '../categories/typeDef';

export default new GraphQLObjectType({
    name: 'departments',
    description: 'departments',
    fields: function () {
        return {
            id: {
                type: GraphQLInt
            },
            name: {
                type: GraphQLString
            },
            description: {
                type: GraphQLString
            },
            categories: {
                type: GraphQLList(Category)
            }
        }
    }
})