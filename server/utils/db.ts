// db.ts
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
export const client = new MongoClient(uri);

export async function connectDB() {
  if (!client.topology?.isConnected()) {
    await client.connect();
    console.log("✅ MongoDB connected");
  }
}
