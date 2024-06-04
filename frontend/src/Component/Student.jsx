import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Student.css";
import { useParams } from "react-router-dom";

const Student = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [studentQuestions, setStudentQuestions] = useState([]);
  const numOfQuestions = 10;
  const [selectedOption, SetSelectedOption] = useState(null);

  const { pin } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/quiz/getQuiz/${pin}`)
      .then((response) => {
        setStudentQuestions(response.data.data.questionArray);
        // console.log(response.data.data.questionArray);
        console.log(studentQuestions);
      })
      .catch((error) => console.log(error));
  }, []);

  // const questions = [
  //   {
  //     id: "q1",
  //     question: "Question 1?",
  //     options: ["a", "b", "c", "d"],
  //     correctAns: "a",
  //   },
  //   {
  //     id: "q2",
  //     question: "Question 2?",
  //     options: ["a", "b", "c", "d"],
  //     correctAnswer: "a",
  //   },
  //   {
  //     id: "q3",
  //     question: "Question 3?",
  //     options: ["a", "b", "c", "d"],
  //     correctAnswer: "d",
  //   },
  //   {
  //     id: "q4",
  //     question: "Question 4?",
  //     options: ["a", "b", "c", "d"],
  //     correctAnswer: "a",
  //   },
  //   {
  //     id: "q5",
  //     question: "Question 5?",
  //     options: ["a", "b", "c", "d"],
  //     correctAnswer: "c",
  //   },
  //   {
  //     id: "q6",
  //     question: "Question 6?",
  //     options: ["a", "b", "c", "d"],
  //     correctAnswer: "b",
  //   },
  //   {
  //     id: "q7",
  //     question: "Question 7?",
  //     options: ["a", "b", "c", "d"],
  //     correctAnswer: "a",
  //   },
  //   {
  //     id: "q8",
  //     question: "Question 8?",
  //     options: ["a", "b", "c", "d"],
  //     correctAnswer: "c",
  //   },
  //   {
  //     id: "q9",
  //     question: "Question 9?",
  //     options: ["a", "b", "c", "d"],
  //     correctAnswer: "d",
  //   },
  //   {
  //     id: "q10",
  //     question: "Question 10?",
  //     options: ["a", "b", "c", "d"],
  //     correctAnswer: "c",
  //   },
  // ];

  const correctAnswers = studentQuestions.reduce((acc, question) => {
    acc[studentQuestions._id] = studentQuestions.correctAns;
    return acc;
  }, {});

  const chooseOption = (option, correctAns) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      // [studentQuestions._id]
      [studentQuestions[currentQuestionIndex].question]: option,
    }));
    if (option === correctAns) {
      console.log(
        `Correct answer for question ${studentQuestions[currentQuestionIndex]._id}!`
      );
    } else {
      console.log(
        `Incorrect answer for question ${studentQuestions[currentQuestionIndex]._id}.`
      );
    }
  };

  const showQuestion = (index) => {
    if (!studentQuestions || studentQuestions.length === 0) return;

    return (
      <div key={studentQuestions[index]._id} className="question-container">
        <h2 className="question-text">{studentQuestions[index].question}</h2>
        <div className="grid grid-cols-2 gap-4">
          {studentQuestions[index].options.map((option, i) => (
            <button
              key={option}
              className={`option-button ${
                // answers[studentQuestions[index]._id]
                selectedOption === i ? "selected" : ""
              }`}
              onClick={() => {
                chooseOption(option, studentQuestions[index].correctAns);
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
      Math.min(currentQuestionIndex + 1, studentQuestions.length - 1)
    );
    SetSelectedOption(null);
  };

  const prevQuestion = () => {
    setCurrentQuestionIndex(Math.max(currentQuestionIndex - 1, 0));
  };

  const submitQuiz = () => {
    let newScore = 0;
    let totalScored = 10 * studentQuestions.length;
    // Object.keys(answers).forEach((questionId) => {
    //   if (answers[questionId] === correctAnswers[questionId]) {
    //     newScore += 10;
    //   }
    // });
    studentQuestions.forEach((question, i) => {
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
            Score: {score}/totalScored
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
