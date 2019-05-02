import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} from 'graphql';


export default new GraphQLObjectType({
    name: 'attributes_value',
    description: 'attributes_value',
    fields: function () {
        return {
            id: {
                type: GraphQLInt
            },
            attribute_id: {
                type: GraphQLInt
            },
            value: {
                type: GraphQLString
            }
        }
    }
})