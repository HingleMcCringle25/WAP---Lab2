require('dotenv').config();
const { MongoClient } = require('mongodb');

const url = process.env.MONGODB_URL;
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);
