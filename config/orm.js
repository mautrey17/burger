//made from scratch ORM
//dependenncies
const connection = require('./connection.js');

const orm = {
    selectAll(table, callback) {
        const queryString = `select * from ${table};`
        connection.query(queryString, (err, burgerInfo) => {
            if(err){throw err};
            callback(burgerInfo);
        })
    },

    insertOne(table, cols, values, cb) {
        const queryString = `insert into ${table} (${cols.toString()}) values (?, ?)`;
        console.log(queryString);

        connection.query(queryString, values, (err, result) => {
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