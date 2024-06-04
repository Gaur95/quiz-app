import express from "express";
import connectDB from "./db/connectDB.js";
import dotenv from "dotenv";
import quizRouter from "./routes/quiz.routes.js";
import cors from "cors";
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import scoreRouter from "./routes/score.routes.js";

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/quiz", quizRouter);
app.use("/user", userRouter);
app.use("/score", scoreRouter);

connectDB();
app.listen(3000, () => {
  console.log("server listening on 3000");
});
