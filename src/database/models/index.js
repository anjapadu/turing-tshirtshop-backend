import Sequelize from "sequelize";
import databaseConnection from "../connection"

import users from "./users";
import donation from "./donation"
import languages from "./languages";
import streaming from "./streaming";
import hotels from "./hotels";
import posts from "./posts";
import postDetail from "./post_detail";
import pages from "./pages";
import pages_detail from "./pages_detail";
import pages_section from "./pages_section";
import eventDays from './event_days';
import activities from './activities';
import activitiesDetail from './activities_datail';
const models = {
    users:databaseConnection.import("users", users),
    donation:databaseConnection.import("donation", donation),
    languages:databaseConnection.import("languages", languages),
    hotels:databaseConnection.import("hotels", hotels),
    posts:databaseConnection.import("posts", posts),
    postDetail:databaseConnection.import("postDetail", postDetail),
    pages:databaseConnection.import("pages", pages),
    pages_detail:databaseConnection.import("pages_detail", pages_detail),
    pages_section:databaseConnection.import("pages_section", pages_section),
    eventDays:databaseConnection.import("eventDays", eventDays),
    activities:databaseConnection.import("activities", activities),
    activitiesDetail:databaseConnection.import("activitiesDetail", activitiesDetail)
}

Object.keys(models).forEach((modelName) => {
    if ("associate" in models[modelName]) {
        models[modelName].associate(models);
    }
})

models.sequelize = databaseConnection;
models.Sequelize = Sequelize;

export default models;