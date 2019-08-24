import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} from 'graphql';

export default new GraphQLObjectType({
    name: 'eventDays',
    description: 'eventDays',
    fields: function () {
        return {
            id: {
                type: GraphQLInt
            },
            date: {
                type: GraphQLString
            }
        }
    }
})