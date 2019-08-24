import {
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLInt,
} from 'graphql';
import { BasicResponse } from '../_customTypes';
import LanguageType from './typeDef';
import { list, add, remove, update } from './resolvers';

const queries = {};
const mutations = {};

queries.hotels = {
    type: GraphQLList(LanguageType),
    resolve: list
}

mutations.addHotel = {
    type:BasicResponse,
    resolve:add,
    args: {
        name:{
            type:GraphQLString,
        },
        address:{
            type:GraphQLString
        },
        status:{
            type:GraphQLBoolean
        }
    }
}

mutations.deleteHotel = {
    type:BasicResponse,
    resolve:remove,
    args:{
        ids : {
            type:GraphQLList(GraphQLInt)
        }
    }
}

mutations.updatedHotel = {
    type:BasicResponse,
    resolve:update,
    args:{
        id:{
            type:GraphQLInt
        },
        name:{
            type:GraphQLString
        },
        address:{
            type:GraphQLString
        },
        status:{
            type:GraphQLBoolean
        }
    }
}

export {
    queries,
    mutations
}