import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean
} from 'graphql';

export default new GraphQLObjectType({
    name: 'activities',
    description: 'activities',
    fields: function () {
        return {
            id: {
                type: GraphQLInt
            },
            hour: {
                type: GraphQLString
            },
            dayId:{
                type: GraphQLInt
            },
            status:{
                type: GraphQLBoolean
            }
        }
    }
})