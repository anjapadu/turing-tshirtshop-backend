import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean
} from 'graphql';

export default new GraphQLObjectType({
    name: 'donation',
    description: 'donation',
    fields: function () {
        return {
            id: {
                type: GraphQLInt
            },
            url: {
                type: GraphQLString
            },
            status: {
                type: GraphQLBoolean
            }
        }
    }
})