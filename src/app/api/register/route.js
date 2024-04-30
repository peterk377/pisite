export async function GET(req, res) {

    // Make a note we are on
    // the api. This goes to the console.
    console.log("in the router api page")
  
  
    // get the values
    // that were sent across to us.
    const { searchParams } = new URL(req.url)
    let username = btoa(searchParams.get('username'))
    const email = btoa(searchParams.get('email'))
    const password = btoa(searchParams.get('password'))
    const tel = btoa(searchParams.get('tel'))
    
    console.log(username)
    console.log(email);
    console.log(password);
    console.log(tel);
  
  // =================================================
  const { MongoClient } = require('mongodb');
  const url = process.env.DATABASE_URL;
  const client = new MongoClient(url);
  const dbName = 'pialert'; // database name
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('user'); // collection name
  const currUsers = await collection.find({}).toArray();
  let x = 1;
  currUsers.forEach(user => {x+=1});
  let userID = "u" + x.toString().padStart(5, 0)
  const findResult = await collection.insertOne({"userID":userID, "username": username, "password":
  password, "email": email, "whatsapp": tel});
  let valid=true;
  
    return Response.json({ "data":"valid" })
  }
  
  