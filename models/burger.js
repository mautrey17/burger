//dependencies
const orm = require('../config/orm.js');

const burger = {
    selectAll(cb) {
        orm.selectAll(['burgers', ])
    }
}