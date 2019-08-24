import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} from 'graphql';

export default new GraphQLObjectType({
    name: 'pages',
    description: 'pages',
    fields: function () {
        return {
            id: {
                type: GraphQLInt
            },
            name:{
                type:GraphQLString
            }
        }
    }
})