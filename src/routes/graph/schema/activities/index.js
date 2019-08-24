import {
    GraphQLList,
    GraphQLInt,
    GraphQLString
} from 'graphql';
import ActivitiesType from './typeDef';
import { BasicResponse } from '../_customTypes';
import { list, remove, add, update } from './resolvers';

const queries = {};
const mutations = {};

queries.activities = {
    type: GraphQLList(ActivitiesType),
    args:{
        dayId:{
            type:GraphQLInt
        }
    },
    resolve: list
}

mutations.deleteActivity = {
    type:BasicResponse,
    args:{
        ids:{
            type:GraphQLString
        }
    },
    resolve:remove
}

mutations.addActivity = {
    type:BasicResponse,
    args:{
        dayId:{
            type:GraphQLInt
        },
        hour:{
            type:GraphQLString
        }
    },
    resolve:add
}

mutations.updateActivity = {
    type:BasicResponse,
    args:{
        id:{
            type:GraphQLInt
        },
        hour:{
            type:GraphQLString
        }
    },
    resolve:update
}

export {
    queries,
    mutations
}