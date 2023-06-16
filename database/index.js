const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.HOST || 'localhost',
    user: process.env.SQL_USER || 'root',
    password: process.env.SQL_PASSWORD || '',
    database: process.env.SQL_DATABASE || 'company',
});

module.exports = pool.promise();
