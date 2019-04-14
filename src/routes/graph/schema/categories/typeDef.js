import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} from 'graphql';


export default new GraphQLObjectType({
    name: 'categories',
    description: 'categories',
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
            }
        }
    }
})