// mongodb.js

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGODB_URI;;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToMongoDB() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB Atlas successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  }
}

async function closeMongoDBConnection() {
  try {
    await client.close();
    console.log("MongoDB connection closed.");
  } catch (error) {
    console.error("Error closing MongoDB connection:", error);
  }
}

export default { connectToMongoDB, closeMongoDBConnection };
