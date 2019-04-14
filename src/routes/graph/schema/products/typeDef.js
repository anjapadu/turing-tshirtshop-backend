import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
} from 'graphql';

export default new GraphQLObjectType({
    name: 'products',
    description: 'products',
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
            price: {
                type: GraphQLFloat
            },
            discounted_price: {
                type: GraphQLFloat
            },
            image: {
                type: GraphQLString
            },
            image_2: {
                type: GraphQLString
            },
            thumbnail: {
                type: GraphQLString
            },
            display: {
                type: GraphQLInt
            },
            categoryName: {
                type: GraphQLString
            },
            categoryId: {
                type: GraphQLInt
            },
            departmentId: {
                type: GraphQLInt
            },
            departmentName: {
                type: GraphQLString
            },
            colors: {
                type: GraphQLString
            },
            sizes: {
                type: GraphQLString
            }
        }
    }
})