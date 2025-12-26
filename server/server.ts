import express, { Request, Response } from 'express';
import 'dotenv/config'
import cors from 'cors';
import {connectDB} from './utils/db.ts';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './utils/auth.js';


const app = express();

const port = 3000;

await connectDB();

const corsOptions = {
  origin: process.env.TRUSTED_ORIGINS?.split(',') || [],
  credentials: true,
 }

 
 app.use(cors(corsOptions))
 
 app.all(/^\/api\/auth\/.*$/, toNodeHandler(auth));


 app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.send('Server is Live!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});