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

queries.languages = {
    type: GraphQLList(LanguageType),
    resolve: list
}

mutations.addLanguage = {
    type:BasicResponse,
    resolve:add,
    args: {
        name:{
            type:GraphQLString,
        },
        iso2:{
            type:GraphQLString
        },
        status:{
            type:GraphQLBoolean
        }
    }
}

mutations.deleteLanguage = {
    type:BasicResponse,
    resolve:remove,
    args:{
        ids : {
            type:GraphQLList(GraphQLInt)
        }
    }
}

mutations.updatedLanguage = {
    type:BasicResponse,
    resolve:update,
    args:{
        id:{
            type:GraphQLInt
        },
        name:{
            type:GraphQLString
        },
        iso2:{
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