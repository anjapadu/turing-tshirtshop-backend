import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean
} from 'graphql';

export default new GraphQLObjectType({
    name: 'activitiesDetail',
    description: 'activitiesDetail',
    fields: function () {
        return {
            id: {
                type: GraphQLInt
            },
            activity_id: {
                type: GraphQLInt
            },
            language:{
                type: GraphQLString
            },
            titleSection:{
                type: GraphQLString
            },
            title:{
                type: GraphQLString
            },
            contentSection:{
                type: GraphQLString
            },
        }
    }
})