//made from scratch ORM
//dependenncies
const connection = require('./connection.js');

const orm = {
    selectAll(table, callback) {
        const queryString = `select * from ${table};`
        console.log(table)
        console.log(callback)
        connection.query(queryString, (err, burgerInfo) => {
            if(err){throw err};
            return callback(burgerInfo);
        })
    },

    insertOne(sqlArray, cb) {
        const queryString = `insert into ?? (??, ??) values (?, ?)`;
        console.log(queryString);

        connection.query(queryString, sqlArray, (err, result) => {
            if(err)throw err;
            cb(result)
        })
    },

    updateOne(table, cols, condition, cb) {
        const queryString = `update ${table} set ${cols} where ${condition}`
        console.log(queryString);

        connection.query(queryString, (err, result) => {
            if(err)throw err;
            cb(result);
        })
    }
}

module.exports = orm;