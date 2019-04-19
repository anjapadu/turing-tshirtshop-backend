import {
    GraphQLInt,
    GraphQLInputObjectType
} from 'graphql'

export const DataPage = new GraphQLInputObjectType({
    name: "DataPage",
    fields: () => ({
        limit: { type: GraphQLInt },
        offset: { type: GraphQLInt }
    })
})

