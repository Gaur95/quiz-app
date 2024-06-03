import Quiz from "../models/quiz.model.js";

export const addQuiz = async (req, res) => {
  const { quizName, pin, questionArray } = req.body.data;
  console.log(quizName, questionArray);

  const quiz = await Quiz.create({
    quizName,
    pin,
    questionArray,
  });

  return res.status(200).json({ msg: "quiz added successfully", quiz });
};

export const getQuiz = async (req, res) => {
  try {
    const { pin } = req.params;
    console.log(pin);
    const findQuiz = await Quiz.findOne({ pin: pin });
    if (!findQuiz) {
      return res.status(400).json({ message: "quiz not found" });
    }

    console.log(findQuiz);
    return res
      .status(200)
      .json({ message: "quiz fetched successfully", data: findQuiz });
  } catch (error) {
    console.log(error);
  }
};
