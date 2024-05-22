import express from "express";
import { config } from "dotenv";
import { connectToDatabase } from "./db/connection.js";

config();
const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
  res.send("Hello World");
})

//connections and listeneres
const PORT = process.env.PORT || 5000;
connectToDatabase()

app.listen(PORT, ()=>{
  console.log("Server is running on port 5000");
})