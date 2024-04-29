export async function GET(req, res) {

    // Make a note we are on
    // the api. This goes to the console.
    console.log("in the api page")
  
  
    // get the values
    // that were sent across to us.
    const { searchParams } = new URL(req.url)
    const username = searchParams.get('username')
    const pass = searchParams.get('password')
  
    console.log(username);
    console.log(pass);
  
  
   
  
    // database call goes here
  
    // at the end of the process we need to send something back.
    
  
    const { MongoClient } = require('mongodb');
    const url = process.env.DATABASE_URL;
    const client = new MongoClient(url);
    const dbName = 'pialert'; // database name
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('user'); // collection name
    const findResult = await collection.find({"username":username}).toArray();
    console.log('Found documents =>', findResult);
    let valid = false

    if(findResult.length >0 ){
      valid = true;
      console.log("login valid");
      return Response.json({ "data":"valid" });
    } else {
      valid = false;
      console.log("login invalid");
    return Response.json({ "data":"invalid" });
  
    }      
  
  }