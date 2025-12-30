const connectMongoose = require("../config/dbconnection.js");

class DBLoader {
    async loadDatabase(link) {
        await connectMongoose(link);
    }
}

module.exports = new DBLoader();