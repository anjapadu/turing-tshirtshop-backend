import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} from 'graphql';

export default new GraphQLObjectType({
    name: 'pages_detail',
    description: 'pages_detail',
    fields: function () {
        return {
            id: {
                type: GraphQLInt
            },
            page_id: {
                type: GraphQLInt
            },
            content:{
                type:GraphQLString
            },
            language:{
                type:GraphQLString
            },
            section_id: {
                type: GraphQLInt
            }
        }
    }
})