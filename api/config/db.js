var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jdc_db'
});
conn.connect(function(err) {
    if (!err) {
        console.log('Connection established');
    } else {
        console.log('Connection is not established !')
    }
});
module.exports = conn;