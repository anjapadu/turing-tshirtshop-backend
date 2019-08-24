import {
    GraphQLList,
    GraphQLInt,
    GraphQLString
} from 'graphql';
import ActivitiesDetailType from './typeDef';
import { BasicResponse } from '../_customTypes';
import { list, update } from './resolvers';

const queries = {};
const mutations = {};

queries.activityDetail = {
    type: GraphQLList(ActivitiesDetailType),
    args:{
        activityId:{
            type:GraphQLInt
        },
        language:{
            type:GraphQLString
        }
    },
    resolve: list
}

mutations.updateActivityDetail = {
    type:BasicResponse,
    args:{
        id:{
            type:GraphQLInt
        },
        language:{
            type:GraphQLString
        },
        titleSection:{
            type:GraphQLString
        },
        title:{
            type:GraphQLString
        },
        contentSection:{
            type:GraphQLString
        }
    },
    resolve:update
}

export {
    queries,
    mutations
}