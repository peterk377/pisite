import { cookies } from "next/headers";

export async function GET(req, res) {
  // Make a note we are on
  // the api. This goes to the console.
  return Response.json({ status: "logged out" });
}
