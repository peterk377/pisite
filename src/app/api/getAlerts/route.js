export async function GET(req,res) {

    console.log("in api page")

    const {MongoClient} = require('mongodb');
    const url = process.env.DATABASE_URL;
    const client = new MongoClient(url);

    const dbName = 'pialert';//name of db

    await client.connect();
    console.log("connected succesfully");
    const db = client.db(dbName);
    const collection = db.collection('alerts');//add collection name here

    const findResult = await collection.find({}).toArray();
    console.log('found documents =>', findResult);

    return Response.json(findResult)
}