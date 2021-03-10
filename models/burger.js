//dependencies
const orm = require('../config/orm.js');

const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res))
    },

    insertOne(burgName, devouredValue, cb) {
        orm.insertOne(['burgers', 'burger_name', 'devoured', burgName, devouredValue], (res) => cb(res))
    },
    updateOne(condition, cb) {
        orm.updateOne('burgers',  'devoured = true', condition, (res) => cb(res))
    }
};

module.exports = burger;