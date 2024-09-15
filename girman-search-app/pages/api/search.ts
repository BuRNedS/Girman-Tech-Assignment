// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

interface User {
  _id: ObjectId;
  first_name: string;
  last_name: string;
  city: string;
  contact_number: string;
}

const fetchUsers = async(query: string | string[]): Promise<User[]> => {
  console.log("here is the query:", query);
  try {
    const client = await clientPromise;
    const db = client.db("Users");

    let users: User[] = [];

    if (query) {
      users = await db.collection<User>("User_info").find({
        $or: [
          { first_name: { $regex: new RegExp(query.toString(), 'i') } },
          { last_name: { $regex: new RegExp(query.toString(), 'i') } },
          { city: { $regex: new RegExp(query.toString(), 'i') } },
          { contact: { $regex: new RegExp(query.toString(), 'i') } }
        ]
      }).sort({ first_name: 1 }).limit(20).toArray();
    } else {
      users = await db.collection<User>("User_info").find().sort({ first_name: 1 }).limit(20).toArray();
    }
    console.log("Here are the users:", users);
    return users;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { q: query } = req.query;

      if (query) {
        const response = await fetchUsers(query);
        console.log("Json from server", response);
        res.status(200).json(response);
      } else {
        res.status(400).json({ error: "No search query provided" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
