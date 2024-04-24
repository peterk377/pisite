const fs = require("fs");

export async function GET(req, res) {
  console.log("fecthing alert by id");

  const { searchParams } = new URL(req.url);
  const newid = searchParams.get("id");
  console.log(newid);

  const { MongoClient } = require("mongodb");
  const url = process.env.DATABASE_URL;
  const client = new MongoClient(url);

  const dbName = "pialert"; //name of db

  await client.connect();
  console.log("connected succesfully");
  const db = client.db(dbName);
  const collection = db.collection("alerts"); //add collection name here

  const findResult = await collection.deleteOne({ _id: newid }).toArray();

  // console.log('found documents =>', findResult);

  return Response.json(findResult);
}
