import {
    GraphQLInt,
    GraphQLInputObjectType
} from 'graphql'

/**
 * Custom input object for paging.
 */
export const DataPage = new GraphQLInputObjectType({
    name: "DataPage",
    fields: () => ({
        limit: { type: GraphQLInt },
        offset: { type: GraphQLInt }
    })
})

