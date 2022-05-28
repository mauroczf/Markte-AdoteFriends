const pg = require('pg-promise')();

const db = pg({
    host: "localhost",
    port: 5432,
    user: "postgres",
    database: "db_adote_friends",
    password: "123"

})

module.exports = db;