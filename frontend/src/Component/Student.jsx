import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Student.css";
import { useParams } from "react-router-dom";
import useQuiz from "../hooks/useQuiz";

const Student = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [studentQuestions, setStudentQuestions] = useState([]);
  const numOfQuestions = 10;
  const [selectedOption, SetSelectedOption] = useState(null);
  const { questions, loadingQuestions } = useQuiz();

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:3000/quiz/getQuiz/${pin}`)
  //     .then((response) => {
  //       setStudentQuestions(response.data.data.questionArray);
  //       console.log(studentQuestions);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  const correctAnswers = studentQuestions.reduce((acc, question) => {
    acc[studentQuestions._id] = studentQuestions.correctAns;
    return acc;
  }, {});

  const chooseOption = (option, correctAns) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      // [studentQuestions._id]
      [questions[currentQuestionIndex].question]: option,
    }));
    if (option === correctAns) {
      console.log(
        `Correct answer for question ${questions[currentQuestionIndex]._id}!`
      );
    } else {
      console.log(
        `Incorrect answer for question ${questions[currentQuestionIndex]._id}.`
      );
    }
  };

  const showQuestion = (index) => {
    // if (!studentQuestions || studentQuestions.length === 0) return;

    return (
      <div key={questions[index]._id} className="question-container">
        <h2 className="question-text">{questions[index].question}</h2>
        <div className="grid grid-cols-2 gap-4">
          {questions[index].options.map((option, i) => (
            <button
              key={option}
              className={`option-button ${
                // answers[questions[index]._id]
                selectedOption === i ? "selected" : ""
              }`}
              onClick={() => {
                chooseOption(option, questions[index].correctAns);
                SetSelectedOption(i);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex(
      Math.min(currentQuestionIndex + 1, questions.length - 1)
    );
    SetSelectedOption(null);
  };

  const prevQuestion = () => {
    setCurrentQuestionIndex(Math.max(currentQuestionIndex - 1, 0));
  };

  const submitQuiz = () => {
    let newScore = 0;
    let totalScored = 10 * questions.length;
    // Object.keys(answers).forEach((questionId) => {
    //   if (answers[questionId] === correctAnswers[questionId]) {
    //     newScore += 10;
    //   }
    // });
    questions.forEach((question, i) => {
      if (question.correctAns === answers[question.question]) {
        newScore += 10;
      }
    });
    setScore(newScore);
    setShowResult(true);
    console.log(answers);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResult(false);
    setScore(0);
  };

  if (loadingQuestions) return null;

  console.log(questions);
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg my-12">
      {!showResult ? (
        <>
          {showQuestion(currentQuestionIndex)}
          <div className="navigation-buttons">
            <button
              className="button prev-button"
              onClick={prevQuestion}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            <button
              className="button next-button"
              onClick={nextQuestion}
              disabled={currentQuestionIndex === studentQuestions.length - 1}
            >
              Next
            </button>
            {currentQuestionIndex === studentQuestions.length - 1 && (
              <button className="button submit-button" onClick={submitQuiz}>
                Submit
              </button>
            )}
          </div>
        </>
      ) : (
        <div id="result" className="result-container">
          <h2 id="score" className="score-text">
            Score: {score}/100
          </h2>
          <p id="feedback" className="feedback-text">
            {score >= 70
              ? "Congratulations! You did great!"
              : "You can do better. Keep practicing."}
          </p>
          {/* <button className="button restart-button" onClick={restartQuiz}>
            Restart
          </button> */}
        </div>
      )}
    </div>
  );
};

export default Student;
