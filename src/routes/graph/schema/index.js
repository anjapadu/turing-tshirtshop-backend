import {
    GraphQLSchema,
    GraphQLObjectType
} from 'graphql';

import { queries as userQueries } from './users';
import { queries as productQueries } from './products';
import { queries as departmentQueries } from './departments';


// console.log(userQueries)
const query = new GraphQLObjectType({
    name: 'query',
    description: '...',
    fields: () => ({
        ...userQueries,
        ...productQueries,
        ...departmentQueries
    })
})

// const mutation = new GraphQLObjectType({
//     name: 'mutations',
//     description: '...',
//     fields: () => ({
//     })
// })

const schema = new GraphQLSchema({
    query,
    // mutation
})

export default schema;