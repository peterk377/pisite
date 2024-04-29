export async function GET(req, res){
    console.log("in the api page")

    const { MongoClient } = require("mongodb");
    const url = process.env.DATABASE_URL;
    const client = new MongoClient(url);

    const dbName = 'pialert';

    await client.connect();
    console.log("connected succesfully");
    const db = client.db(dbName);
    const collection = db.collection("user");

    const user = await collection.find({"username":"pete1801"}).toArray();


    return Response.json(user);
}