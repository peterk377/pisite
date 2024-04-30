import { cookies } from "next/headers";

export async function GET(req, res) {
  //This will print on the console
  console.log("checking auth");

  //get the auth record
  let record = cookies().get("auth");

  console.log(record.value);

  return Response.json({ status: "" + record.value + "" });
}
