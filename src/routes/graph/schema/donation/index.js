import {
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean
} from 'graphql';
import { BasicResponse } from '../_customTypes';
import DonationType from './typeDef';
import { fetchDonation, updateDonation } from './resolvers';

const queries = {};
const mutations = {};

queries.donation = {
    type: DonationType,
    resolve: fetchDonation
}

mutations.editDonation = {
    type: BasicResponse,
    resolve: updateDonation,
    args : {
        id:{ type:GraphQLInt },
        url:{ type:GraphQLString },
        status:{ type:GraphQLBoolean }
    }
}

export {
    queries,
    mutations
}