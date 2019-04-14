import {
    GraphQLList
} from 'graphql'
import UserType from './typeDef';
import { fetchUsers } from './resolvers';

const queries = {},
    mutations = {};
queries.users = {
    type: GraphQLList(UserType),

    resolve: () => {
        return [{
            id: 1,
            name: 'Gustavo'
        }]
    }
}

export {
    queries,
    mutations
}