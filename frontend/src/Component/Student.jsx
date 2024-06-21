// import axios from "axios";
// import React, { useEffect, useReducer, useRef, useState } from "react";
// import "./Student.css";
// import { useParams } from "react-router-dom";
// import useQuiz from "../hooks/useQuiz";
// import useCurrentUser from "../hooks/useCurrentUser";
// import useSubmitScore from "../hooks/useSubmitScore";
// import toast from "react-hot-toast";
// import { useTimer } from "react-timer-hook";
// import Timer from "./Timer";

// const Student = () => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [showResult, setShowResult] = useState(false);
//   const [score, setScore] = useState(0);
//   const [studentQuestions, setStudentQuestions] = useState([]);
//   const [selectedOption, SetSelectedOption] = useState(null);
//   const { questions, loadingQuestions } = useQuiz();
//   const { user, isLoading } = useCurrentUser();
//   const { submitScore } = useSubmitScore();
//   const { pin } = useParams();
//   let timer = useRef(null);

//   const correctAnswers = studentQuestions.reduce((acc, question) => {
//     acc[studentQuestions._id] = studentQuestions.correctAns;
//     return acc;
//   }, {});

//   const chooseOption = (option, correctAns) => {
//     setAnswers((prevAnswers) => ({
//       ...prevAnswers,
//       [questions[currentQuestionIndex].question]: option,
//     }));
//     if (option === correctAns) {
//       console.log(
//         `Correct answer for question ${questions[currentQuestionIndex]._id}!`
//       );
//     } else {
//       console.log(
//         `Incorrect answer for question ${questions[currentQuestionIndex]._id}.`
//       );
//     }
//   };

//   const showQuestion = (index) => {
//     return (
//       <div key={questions[index]._id} className="question-container bg-gray-800 rounded-lg shadow-lg p-6 text-white">
//         <h2 className="question-text text-2xl font-semibold mb-6 text-center">
//           {questions[index].question}
//         </h2>
//         <div className="grid grid-cols-2 gap-4">
//           {questions[index].options.map((option, i) => (
//             <button
//               key={option}
//               className={`option-button flex items-center p-2 rounded-lg ${
//                 selectedOption === i ? "bg-blue-500" : "bg-gray-700"
//               }`}
//               onClick={() => {
//                 chooseOption(option, questions[index].correctAns);
//                 SetSelectedOption(i);
//               }}
//             >
//               <span className={`flex items-center justify-center w-10 h-10 mr-3 rounded-full ${
//                 selectedOption === i ? "bg-blue-700" : "bg-gray-900"
//               }`}>
//                 {String.fromCharCode(65 + i)}
//               </span>
//               <span className="text-left">{option}</span>
//             </button>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   const nextQuestion = () => {
//     setCurrentQuestionIndex(
//       Math.min(currentQuestionIndex + 1, questions.length - 1)
//     );
//     SetSelectedOption(null);
//   };

//   const prevQuestion = () => {
//     setCurrentQuestionIndex(Math.max(currentQuestionIndex - 1, 0));
//   };

//   const submitQuiz = () => {
//     let newScore = 0;
//     questions.forEach((question) => {
//       if (question.correctAns === answers[question.question]) {
//         newScore += 10;
//       }
//     });
//     setScore(newScore);
//     setShowResult(true);
//     const data = {
//       name: user.name,
//       college: user.college,
//       course: user.course,
//       score: newScore,
//       totalScore: questions.length * 10,
//       quizCode: pin,
//     };
//     console.log(data);
//     submitScore(data);
//     console.log(answers);
//   };

//   const restartQuiz = () => {
//     setCurrentQuestionIndex(0);
//     setAnswers({});
//     setShowResult(false);
//     setScore(0);
//   };

//   if (loadingQuestions || isLoading) return null;

//   return (
//     <div className="min-h-screen flex items-center justify-center relative">
//       {/* <video className="background-video" autoPlay loop muted> */}
//         <video src="/video/18069232-uhd_3840_2160_24fps.mp4"   type="video/mp4" muted autoPlay loop className="absolute" />
//         {/* Your browser does not support the video tag. */}
//       {/* </video>   */}
//       <div className="content max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg my-12">
//         {!showResult ? (
//           <>
//             {console.log(questions.length)}
//             {<Timer seconds={questions?.length * 30} submit={submitQuiz} />}
//             {showQuestion(currentQuestionIndex)}
//             <div className="navigation-buttons flex justify-between mt-6">
//               <button
//                 className="button prev-button bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none disabled:opacity-50"
//                 onClick={prevQuestion}
//                 disabled={currentQuestionIndex === 0}
//               >
//                 Previous
//               </button>
//               <button
//                 className="button next-button bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none disabled:opacity-50"
//                 onClick={nextQuestion}
//                 disabled={currentQuestionIndex === studentQuestions.length - 1}
//               >
//                 Next
//               </button>
//               {currentQuestionIndex === questions.length - 1 && (
//                 <button
//                   className="button submit-button bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none"
//                   onClick={submitQuiz}
//                 >
//                   Submit
//                 </button>
//               )}
//             </div>
//           </>
//         ) : (
//           <div id="result" className="result-container text-center mt-6">
//             <h2 id="score" className="score-text text-4xl font-bold">
//               Score: {score}/{questions.length * 10}
//             </h2>
//             <p id="feedback" className="feedback-text text-xl mt-4">
//               {score >= 70
//                 ? "Congratulations! You did great!"
//                 : "You can do better. Keep practicing."}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Student;
import axios from "axios";
import React, { useEffect, useReducer, useRef, useState } from "react";
import "./Student.css";
import { useParams } from "react-router-dom";
import useQuiz from "../hooks/useQuiz";
import useCurrentUser from "../hooks/useCurrentUser";
import useSubmitScore from "../hooks/useSubmitScore";
import toast from "react-hot-toast";
import { useTimer } from "react-timer-hook";
import Timer from "./Timer";

const Student = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [studentQuestions, setStudentQuestions] = useState([]);
  const [selectedOption, SetSelectedOption] = useState(null);
  const { questions, loadingQuestions } = useQuiz();
  const { user, isLoading } = useCurrentUser();
  const { submitScore } = useSubmitScore();
  const { pin } = useParams();
  let timer = useRef(null);

  const correctAnswers = studentQuestions.reduce((acc, question) => {
    acc[studentQuestions._id] = studentQuestions.correctAns;
    return acc;
  }, {});

  const chooseOption = (option, correctAns) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
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
    return (
      <div
        key={questions[index]._id}
        className="question-container bg-blue-100 rounded-lg shadow-lg p-6 text-gray-900 "
      >
        <h2 className="question-text text-2xl font-semibold mb-6 text-center text-blue-800">
          {questions[index].question}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {questions[index].options.map((option, i) => (
            <button
              key={option}
              className={`option-button flex items-center p-2 rounded-lg ${
                selectedOption === i ? "bg-blue-400" : "bg-blue-200"
              }`}
              onClick={() => {
                chooseOption(option, questions[index].correctAns);
                SetSelectedOption(i);
              }}
            >
              <span
                className={`flex items-center justify-center w-10 h-10 mr-3 rounded-full ${
                  selectedOption === i ? "bg-blue-600" : "bg-blue-300"
                }`}
              >
                {String.fromCharCode(65 + i)}
              </span>
              <span className="text-left">{option}</span>
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
    questions.forEach((question) => {
      if (question.correctAns === answers[question.question]) {
        newScore += 10;
      }
    });
    setScore(newScore);
    setShowResult(true);
    const data = {
      name: user.name,
      college: user.college,
      course: user.course,
      score: newScore,
      totalScore: questions.length * 10,
      quizCode: pin,
    };
    console.log(data);
    submitScore(data);
    console.log(answers);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResult(false);
    setScore(0);
  };

  if (loadingQuestions || isLoading) return null;

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <video
        src="/video/18069232-uhd_3840_2160_24fps.mp4"
        type="video/mp4"
        muted
        autoPlay
        loop
        className="absolute"
      />
      <div
        className="content max-w-2xl mx-auto p-6 bg-gray-50 text-blue-900 rounded-lg shadow-lg my-12"
        style={{ border: "4px solid gray" }}
      >
        {!showResult ? (
          <>
            {console.log(questions.length)}
            {<Timer seconds={questions?.length * 30} submit={submitQuiz} />}
            {showQuestion(currentQuestionIndex)}
            <div className="navigation-buttons flex justify-between mt-6">
              <button
                className="button prev-button bg-blue-400 text-blue-900 py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none disabled:opacity-50"
                onClick={prevQuestion}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </button>
              {currentQuestionIndex !== questions.length - 1 && <button
                className="button next-button bg-blue-500 text-blue-900 py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none disabled:opacity-50"
                onClick={nextQuestion}
                disabled={currentQuestionIndex === studentQuestions.length - 1}
              >
                Next
              </button>}
              {currentQuestionIndex === questions.length - 1 && (
                <button
                  className="button submit-button bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none"
                  onClick={submitQuiz}
                >
                  Submit
                </button>
              )}
            </div>
          </>
        ) : (
          <div id="result" className="result-container text-center mt-6">
            <h2
              id="score"
              className="score-text text-4xl font-bold text-gray-900"
            >
              Score: {score}/{questions.length * 10}
            </h2>
            <p
              id="feedback"
              className="feedback-text text-xl mt-4 text-blue-700 font-sans hover:font-serif"
            >
              {score >= 70
                ? "Congratulations! You did great!"
                : "You can do better. Keep practicing."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Student;
