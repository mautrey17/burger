//establish connection with MySQL

//dependencies
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '1234',
  database: 'burgers_db',
});

// establish connection
connection.connect((err) => {
  if(err){
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

//export connection
module.exports = connection;