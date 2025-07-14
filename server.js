import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

import morgan from "morgan";
import mongoose from 'mongoose';
import jobRouter from './routes/jobRouter.js'
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "data received", data: req.body });
});

app.use('/api/v1/jobs', jobRouter)

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

