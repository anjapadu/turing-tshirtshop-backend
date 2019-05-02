import { Sequelize } from 'sequelize';
require('dotenv').config();

const databaseConfig = {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": "mysql"
}
console.log(databaseConfig);

const db = databaseConfig;
const connection = new Sequelize({
    username: db.username,
    port: db.port,
    password: db.password,
    database: db.database,
    host: db.host,
    dialect: db.dialect,

});

console.info('SETUP -- CONNECTTION TO DATABASE...');
connection
    .authenticate()
    .then(() => {
        console.info("=====DATABASE CONNECTED======")
    })
    .catch((err) => {
        console.error("======UNABLE TO CONNECT TO DATABASE=======", err)
    });

export default connection; 