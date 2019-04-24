import {
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLBoolean
} from 'graphql'
import CustomerType from './typeDef';
import {
    fetchCustomers,
    logInCustomer,
    registerCustomer
} from './resolvers';

const queries = {},
    mutations = {};

mutations.registerCustomer = {
    type: CustomerType,
    args: {
        firstname: {
            type: GraphQLNonNull(GraphQLString)
        },
        lastname: {
            type: GraphQLNonNull(GraphQLString)
        },
        email: {
            type: GraphQLNonNull(GraphQLString)
        },
        password: {
            type: GraphQLNonNull(GraphQLString)
        },
        isGoogle: {
            type: GraphQLBoolean
        }
    },
    resolve: registerCustomer
}


queries.customers = {
    type: GraphQLList(CustomerType),
    resolve: fetchCustomers
}

queries.customerLogin = {
    type: CustomerType,
    args: {
        email: {
            type: GraphQLNonNull(GraphQLString)
        },
        password: {
            type: GraphQLNonNull(GraphQLString)
        }
    },
    resolve: logInCustomer
}

export {
    queries,
    mutations
}