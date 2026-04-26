import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import middleware from './route/middleware.js'
import connectDB from "./config/db.js";


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/handleroute",middleware)
connectDB()

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//http://localhost:5000/api/handleroute