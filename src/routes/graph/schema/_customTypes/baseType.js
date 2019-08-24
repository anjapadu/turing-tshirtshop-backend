import { GraphQLString, GraphQLObjectType, GraphQLBoolean } from 'graphql';

export const BasicResponse = new GraphQLObjectType({
    name: 'message_update_insert_delete',
    description: 'message_update_insert_delete',
    fields: () => ({
        message: {
            type: GraphQLString
        },
        error: {
            type: GraphQLBoolean
        }
    })
})