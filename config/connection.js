//establish connection with MySQL

//dependencies
const mysql = require('mysql');
let connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else{
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '1234',
        database: 'burgers_db',
      });
}


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