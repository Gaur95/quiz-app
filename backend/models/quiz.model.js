import mongoose, { Schema } from "mongoose";

const quizSchema = new Schema({
  quizName: { type: String },
  pin: { type: Number },
  questionArray: [
    {
      question: { type: String },
      correctAns: { type: String },
      options: [{ type: String }],
    },
  ],
});

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;
