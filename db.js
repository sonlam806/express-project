const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
var db = low(adapter);

db.defaults({
        users: [],
        products: []
    })
    .write()


module.exports = db;