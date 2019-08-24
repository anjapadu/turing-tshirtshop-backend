import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} from 'graphql';

import dateGenerator from '../_customTypes'

export default new GraphQLObjectType({
    name: 'streaming',
    description: 'streaming',
    fields: function () {
        return {
            id: {
                type: GraphQLInt
            },
            linkStreamin: {
                type: GraphQLString
            },
            language: {
                type: GraphQLString
            },
            createdAt: {
                type: dateGenerator('createdAt')
            },
            updatedAt: {
                type: dateGenerator('updatedAt')
            }
        }
    }
})