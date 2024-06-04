import mongoose, { Schema } from "mongoose";

const scoreSchema = new Schema({
  name: {
    type: String,
  },
  course: {
    type: String,
  },
  college: {
    type: String,
  },
  score: {
    type: Number,
  },
  totalScore: {
    type: Number,
  },
  quizCode: {
    type: String,
  },
});

export const Score = mongoose.model("Score", scoreSchema);
