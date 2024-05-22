import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//connection
const PORT = process.env.PORT || 5000;
connectToDatabase()

app.listen(PORT, ()=>{
  console.log("Server is running on port 5000");
})