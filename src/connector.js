
var mysql = require('mysql');


// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "a",
//     database: "test",
//     multipleStatements: true
// });

var con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true,
    port: process.env.DB_PORT
});


con.connect(function (err) {
    if (err) return console.log("failed to connect to mysql server/ database", err);
    else return console.log("connection establish with Database!!!!");
});

module.exports = con;