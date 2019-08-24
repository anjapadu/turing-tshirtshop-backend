import {
    GraphQLSchema,
    GraphQLObjectType
} from "graphql";

import { queries as donationQueries, mutations as donationMutations } from "./donation";
import { queries as userQueries, mutations as userMutations } from "./users"
import { queries as languagesQueries, mutations as languagesMutations } from "./languages"
import { queries as hotelsQueries, mutations as hotelsMutations } from "./hotels"
import { queries as postsQueries, mutations as postsMutations } from "./posts"
import { queries as postsDetailQueries, mutations as postsDetailMutations } from "./post_detail"
import { queries as pagesQueries } from "./pages"
import { queries as pagesSectionQueries } from "./pages_section"
import { queries as pagesDetailQueries, mutations as pagesDetailMutations } from "./pages_detail"
import { queries as eventDaysQueries, mutations as eventDaysMutations } from "./event_days";
import { queries as activitiesQueries, mutations as activitiesMutations } from "./activities";
import { queries as activitiesDetailQueries, mutations as activitiesDetailMutations } from "./activities_detail";
const query = new GraphQLObjectType({
    name: "query",
    description: "...",
    fields: () => ({
        ...donationQueries,
        ...userQueries,
        ...languagesQueries,
        ...hotelsQueries,
        ...postsQueries,
        ...postsDetailQueries,
        ...pagesQueries,
        ...pagesSectionQueries,
        ...pagesDetailQueries,
        ...eventDaysQueries,
        ...activitiesQueries,
        ...activitiesDetailQueries
    })
})

const mutation = new GraphQLObjectType({
    name: "mutations",
    description: "...",
    fields: () => ({
        ...donationMutations,
        ...userMutations,
        ...languagesMutations,
        ...hotelsMutations,
        ...postsMutations,
        ...postsDetailMutations,
        ...pagesDetailMutations,
        ...eventDaysMutations,
        ...activitiesMutations,
        ...activitiesDetailMutations
    })
})

const schema = new GraphQLSchema({
    query,
    mutation
})

export default schema;