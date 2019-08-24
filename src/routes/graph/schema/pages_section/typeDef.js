import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} from 'graphql';

export default new GraphQLObjectType({
    name: 'pages_section',
    description: 'pages_section',
    fields: function () {
        return {
            id: {
                type: GraphQLInt
            },
            page_id: {
                type: GraphQLInt
            },
            name:{
                type:GraphQLString
            }
        }
    }
})