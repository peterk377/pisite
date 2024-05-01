import { cookies } from "next/headers";

const fs = require("fs");
const { MongoClient } = require("mongodb");
const url = process.env.DATABASE_URL;
const client = new MongoClient(url);

const dbName = "pialert"; //name of db

// cookie
const cookieUID = cookies().get("UID");
console.log("UserID for this user is:", cookieUID);

await client.connect();
console.log("connected succesfully");
const db = client.db(dbName);
const collection = db.collection("user_has_alerts"); //add collection name here

export async function GET(req, res) {
  console.log("in getAlert by UID page");

  const findResult = await collection.find({ userID: u00001 }).toArray();
  findResult.forEach((getAlertID) => {
    console.log("AlertID:", getAlertID.alertID);
  });

  return Response.json(findResult);
}
