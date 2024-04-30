import { cookies } from "next/headers";

export async function GET(req, res) {
  const cookieUsername = cookies().get("username");
  console.log("in the getAccountDetails route");
  console.log("username:", cookieUsername);

  const { MongoClient } = require("mongodb");
  const url = process.env.DATABASE_URL;
  const client = new MongoClient(url);

  const dbName = "pialert";

  await client.connect();
  console.log("connected succesfully");
  const db = client.db(dbName);
  const collection = db.collection("user");

  const user = await collection
    .find({ username: cookieUsername.value })
    .toArray();

  console.log(user);

  user.forEach((getUser) => {
    console.log("username:", getUser.username);
    console.log("email:", getUser.email);
    console.log("password", getUser.password);
  });

  return Response.json(user);
}
