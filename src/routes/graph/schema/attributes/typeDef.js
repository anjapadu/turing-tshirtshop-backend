import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
} from 'graphql';

export default new GraphQLObjectType({
    name: 'attributes',
    description: 'attributes',
    fields: function () {
        return {
            name: {
                type: GraphQLString
            },
            values: {
                type: GraphQLString
            },
            attributeValues: {
                type: GraphQLString
            }
        }
    }
})