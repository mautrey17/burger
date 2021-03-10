//made from scratch ORM
//dependencies
const connection = require('./connection.js');

const orm = {
    selectAll(table, callback) {
        const queryString = `select * from ${table};`
        connection.query(queryString, (err, burgerInfo) => {
            if(err){throw err};
            return callback(burgerInfo);
        })
    },

    insertOne(sqlArray, cb) {
        const queryString = `insert into ?? (??, ??) values (?, ?)`;

        connection.query(queryString, sqlArray, (err, result) => {
            if(err)throw err;
            cb(result)
        })
    },

    updateOne(table, cols, condition, cb) {
        const queryString = `update ${table} set ${cols} where ${condition}`

        connection.query(queryString, (err, result) => {
            if(err)throw err;
            cb(result);
        })
    }
}

module.exports = orm;