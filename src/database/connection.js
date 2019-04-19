import { Sequelize } from 'sequelize';

const databaseConfig = {
    "username": "root",
    "password": "12345678",
    "database": "tshirtshop",
    "host": "tshirtshop.cj4nuesfxys9.us-west-2.rds.amazonaws.com",
    "port": 3306,
    "dialect": "mysql"
}

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