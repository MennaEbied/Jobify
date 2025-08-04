import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

import morgan from "morgan";
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import cloudinary from 'cloudinary';

//ROUTERS
import jobRouter from './routes/jobRouter.js'
import authRouter from './routes/authRouter.js'
import userRouter from "./routes/userRouter.js";

//PUBLIC
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

//MIDDLEWARE
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/authMiddleware.js";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});


const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, './public')));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(cookieParser())

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "data received", data: req.body });
});

app.use('/api/v1/jobs',authenticateUser, jobRouter)
app.use('/api/v1/users',authenticateUser, userRouter)
app.use('/api/v1/auth', authRouter)
app.get('/api/v1/test', (req, res) => {
  res.json({ msg: 'test route' });
});

//Not Found
app.use('*', (req, res) => {
  res.status(404).json({msg: "Not Found"})
})

app.use(errorHandlerMiddleware)
const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL)
  app.listen(5100, (req, res) => {
    console.log(`server running on port ${port}...`);
  });
} catch (error) {
  console.log(error)
  process.exit(1)
}

