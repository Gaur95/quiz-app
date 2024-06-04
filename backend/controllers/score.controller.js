import { Score } from "../models/score.model.js";

export const submitScore = async (req, res) => {
  try {
    const user = req.user;
    const { score, totalScore, quizCode } = req.body;

    await Score.create({
      name: user.name,
      course: user.course,
      college: user.college,
      score,
      quizCode,
      totalScore,
      userId: user._id,
    });

    return res.status(200).json({ message: "Score submitted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getScores = async (req, res) => {
  try {
    const { pin } = req.params;
    const scores = await Score.find({ quizCode: pin });

    return res.status(200).json({ scores });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
