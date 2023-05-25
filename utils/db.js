const mongoClient = require("mongodb").MongoClient;
require("dotenv").config();

class Connection{
    static async getDB(){
        let client = await mongoClient.connect(
            process.env.MONGO_URL, 
            { 
                useNewUrlParser: true, 
                useUnifiedTopology: true 
            }
        );

        let db = client.db(process.env.MONGO_DB);

        return{
            client: client,
            db: db
        }
    }
}

module.exports = Connection;