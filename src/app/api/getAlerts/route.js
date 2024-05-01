import { cookies } from "next/headers";

const fs = require("fs");
const { MongoClient } = require("mongodb");
const url = process.env.DATABASE_URL;
const client = new MongoClient(url);
const dbName = "pialert"; //name of db

await client.connect();
console.log("connected successfully");
const db = client.db(dbName);
const collection = db.collection("alerts"); //add collection name here

export async function GET(req, res) {
  
  console.log("in getAlerts api page");

  const userID = cookies(req, res).get("userID").value;
  console.log(userID.value);
  const findResult = await collection.find({"userID":userID}).toArray();
  // console.log('found documents =>', findResult);

  return Response.json(findResult);
}