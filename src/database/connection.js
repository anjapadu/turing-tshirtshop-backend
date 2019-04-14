import { Sequelize } from 'sequelize';

const databaseConfig = {
    "username": "anjapadu",
    "password": "12345678",
    "database": "turing",
    "host": "turing.cj4nuesfxys9.us-west-2.rds.amazonaws.com",
    "port": 3306,
    "dialect": "mysql"
}

const db = databaseConfig;
console.log({
    username: db.username,
    port: db.port,
    password: db.password,
    database: db.database,
    host: db.host,
    dialect: db.dialect,
})

const connection = new Sequelize({
    username: db.username,
    port: db.port,
    password: db.password,
    database: db.database,
    host: db.host,
    dialect: db.dialect,
})
// const connection = new Sequelize(db.database, db.username, db.password, {
//     host: db.host,
//     dialect: db.dialect,
//     operatorsAliases: Sequelize.Op,
//     port: db.port,

//     dialectOptions: {
//         multipleStatements: true,
//     }
// })

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