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
        const queryString = `insert into ${table}`
    },

    updateOne() {

    }
}

module.exports = orm;