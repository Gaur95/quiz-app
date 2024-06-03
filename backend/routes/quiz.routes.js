import express from "express";
import { addQuiz, getQuiz } from "../controllers/quiz.controller.js";

const router = express.Router();

router.post("/addQuiz", addQuiz);
router.get("/getQuiz/:pin", getQuiz);

export default router;
