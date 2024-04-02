export async function GET(req, res) {

    // Make a note we are on
    // the api. This goes to the console.
    console.log("in the router api page")
  
  
    // get the values
    // that were sent across to us.
    const { searchParams } = new URL(req.url)
    let username = searchParams.get('username')
    const email = searchParams.get('email')
    const password = searchParams.get('password')
    const tel = searchParams.get('tel')
    
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
  const findResult = await collection.insertOne({"username": username, "password":
  password, "email": email, "whatsapp": tel});
  let valid=true;
  //==========================================================
   
  
    // database call goes here
  
    // at the end of the process we need to send something back.
    return Response.json({ "data":"valid" })
  }
  
  