const sql = require("mysql2")

const pool = sql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'manger',
    database: 'sunbeam1'
})

module.exports = pool