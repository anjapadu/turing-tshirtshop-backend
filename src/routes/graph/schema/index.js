import {
    GraphQLSchema,
    GraphQLObjectType
} from 'graphql';

import {
    queries as customerQueries,
    mutations as customerMutations
} from './customer';
import { queries as productQueries } from './products';
import { queries as departmentQueries } from './departments';


// console.log(customerQueries)
const query = new GraphQLObjectType({
    name: 'query',
    description: '...',
    fields: () => ({
        ...customerQueries,
        ...productQueries,
        ...departmentQueries
    })
})

const mutation = new GraphQLObjectType({
    name: 'mutations',
    description: '...',
    fields: () => ({
        ...customerMutations
    })
})

const schema = new GraphQLSchema({
    query,
    mutation
})

export default schema;