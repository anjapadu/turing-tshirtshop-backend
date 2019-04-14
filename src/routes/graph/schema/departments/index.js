import {
    GraphQLList
} from 'graphql'
import DepartmentType from './typeDef';
import { fetchDepartments } from './resolvers';

const queries = {},
    mutations = {};

queries.departments = {
    type: GraphQLList(DepartmentType),
    resolve: fetchDepartments
}

export {
    queries,
}