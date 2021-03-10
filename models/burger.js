//dependencies
const orm = require('../config/orm.js');

const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res))
    },

    insertOne(burgName, devouredValue, cb) {
        orm.insertOne(['burgers', 'burger_name', 'devoured', burgName, devouredValue], (res) => cb(res))
    },
    updateOne(burgName, devouredValue, condition, cb) {
        orm.updateOne('burgers', `burger_name = ${burgName}, devoured = ${devouredValue}`, condition, (res) => cb(res))
    }
};

module.exports = burger;