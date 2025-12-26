// auth.ts
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { client } from "./db.ts"; // MongoClient
import 'dotenv/config';

const trustedOrigins = process.env.TRUSTED_ORIGINS?.split(',') || [];

export const auth = betterAuth({
  database: mongodbAdapter(client.db("your_database_name")), // ✅ pass DB object
  emailAndPassword: { enabled: true },
  user: { deleteUser: {enabled: true}},
  trustedOrigins,
  baseURL: process.env.BETTER_AUTH_URL!,
  secret: process.env.BETTER_AUTH_SECRET!,
  advanced: {
    cookies: {
      session_token: {
        name: 'auth_session',
        attributes: {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: process.env.NODE_ENV === 'production' ?'none' : 'lax',
          path: '/'
        }
      }
    }
  }
});