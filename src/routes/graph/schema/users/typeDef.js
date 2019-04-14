import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} from 'graphql';

export default new GraphQLObjectType({
    name: 'user',
    description: 'user',
    fields: function () {
        return {
            id: {
                type: GraphQLInt
            },
            name: {
                type: GraphQLString
            }
        }
    }
})