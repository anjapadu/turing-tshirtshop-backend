import {
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLBoolean
} from 'graphql'
import AttributeType from './typeDef';
import {
    fetchAttributes
} from './resolvers';

const queries = {},
    mutations = {};



queries.attributes = {
    type: GraphQLList(AttributeType),
    resolve: fetchAttributes
}



export {
    queries,
    mutations
}