import express from "express";
import connectDB from "./db/connectDB.js";
import dotenv from "dotenv";
import quizRouter from "./routes/quiz.routes.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/quiz", quizRouter);

connectDB();
app.listen(5000, () => {
  console.log("server listening on 5000");
});
