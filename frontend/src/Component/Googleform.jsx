import React, { useState } from "react";
import useSubmitQuiz from "../hooks/useSubmitQuiz";
import crimage from "./Images/quiqu.jpg";

const GForm = () => {
  const [quizName, setQuizName] = useState("");
  const [questions, setQuestions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [pinCode, setPinCode] = useState(null);
  const { submitQuiz } = useSubmitQuiz();
  const [count, setcount] = useState(1);

  const addQuestion = () => {
    const newId = questions.length ? questions[questions.length - 1].id + 1 : 1;
    setQuestions([
      ...questions,
      {
        id: newId,
        title: "Question " + newId,
        type: "option",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        selectedOption: null,
        correctOption: "",
      },
    ]);
    setIsDropdownOpen(false);
  };

  const deleteQuestion = (id) => {
    setQuestions(questions.filter((question) => question.id !== id));
    setcount((count) => count - 1);
  };

  const setTitle = (title, id) => {
    const updatedQuestions = questions.map((question) =>
      question.id === id ? { ...question, title } : question
    );
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (e, id) => {
    const updatedQuestions = questions.map((question) => {
      if (question.id === id) {
        return { ...question, selectedOption: e.target.value };
      }
      return question;
    });
    setQuestions(updatedQuestions);
  };

  const handleCorrectAnswerChange = (option, id) => {
    const updatedQuestions = questions.map((question) => {
      if (question.id === id) {
        return { ...question, correctOption: option };
      }
      return question;
    });
    setQuestions(updatedQuestions);
  };

  const handleOptionTextChange = (e, questionId, optionIndex) => {
    const updatedQuestions = questions.map((question) => {
      if (question.id === questionId) {
        const updatedOptions = question.options.map((option, index) =>
          index === optionIndex ? e.target.value : option
        );
        return { ...question, options: updatedOptions };
      }
      return question;
    });
    setQuestions(updatedQuestions);
  };

  const handlesubmit = () => {
    const pin = generatePinCode();
    setPinCode(pin);

    const questionArray = questions.map((question) => {
      return {
        question: question.title,
        correctAns: question.correctOption,
        options: question.options,
      };
    });

    const data = { quizName, pin, questionArray };
    submitQuiz(data);
    console.log("data sent");
  };

  return (
    <div
      className="w-full min-h-screen flex justify-center items-center bg-cover bg-center pb-8 bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${crimage})` }}
    >
      <div className="w-full max-w-3xl mx-auto mt-7 bg-gray-900 bg-opacity-60 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-5 text-purple-400">
          Quiz Form 
        </h1>
        <input
          onChange={(e) => setQuizName(e.target.value)}
          value={quizName}
          type="text"
          placeholder="Enter Quiz Name"
          className="block mb-5 w-full border border-gray-600 bg-gray-800 rounded-lg p-2 text-white-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <div className="space-y-6">
          {questions.map((question) => (
            <Card
              key={question.id}
              question={question}
              deleteQuestion={deleteQuestion}
              setTitle={setTitle}
              handleOptionChange={handleOptionChange}
              handleCorrectAnswerChange={handleCorrectAnswerChange}
              handleOptionTextChange={handleOptionTextChange}
            />
          ))}
          <div className="relative text-right">
            <div className="mt-2 w-48 bg-gray-800 border border-gray-600 rounded-lg shadow-lg z-10">
              <button
                className=" w-full text-left py-2 px-4 hover:bg-gray-700 text-white-600 hover:text-white flex items-center justify-between"
                onClick={() => {
                  addQuestion();
                  setcount((count) => count + 1);
                }}
              >
                Add Question < span>{count}</span>
              </button>
            </div>
          </div>
        </div>
        <button
          className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 focus:outline-none mt-5 w-full"
          style={{
            background:
              "linear-gradient(90deg, rgba(115,0,255,1) 0%, rgba(204,163,228,1) 26%, rgba(166,124,176,1) 49%, rgba(157,114,162,1) 56%)",
          }}
          onClick={handlesubmit}
        >
          Submit
        </button>

        {pinCode && (
          <div className="mt-4 text-center">
            <h2 className="text-2xl text-purple-400">
              Generated Pin Code: {pinCode}
            </h2>
            <p>Share this pin code with students to start the quiz.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Card = ({
  question,
  deleteQuestion,
  setTitle,
  handleOptionChange,
  handleCorrectAnswerChange,
  handleOptionTextChange,
}) => {
  return (
    <div className="border border-gray-600 bg-gray-800 rounded-lg p-4 mb-4">
      <input
        type="text"
        placeholder="Enter Your Question"
        className="block w-full border border-gray-600 bg-gray-800 rounded-lg p-2 mb-2 text-white-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
        onChange={(e) => setTitle(e.target.value, question.id)}
      />
      <div>
        {question.options.map((option, index) => (
          <div key={index} className="mb-2 flex items-center">
            <input
              type="text"
              placeholder="Option"
              onChange={(e) => handleOptionTextChange(e, question.id, index)}
              className="border border-gray-600 bg-gray-800 rounded-lg p-1 flex-grow text-white-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        ))}
      </div>
      <div className="flex items-center mb-2">
        <span className="mr-2 text-white-800">Correct answer:</span>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleCorrectAnswerChange(option, question.id)}
            className={`py-1 px-2 mx-1 rounded-lg ${
              question.correctOption === option
                ? "bg-green-500"
                : "bg-gray-600 hover:bg-gray-500 text-white-400 hover:text-white"
            }`}
          >
            {index === 0
              ? "Option 1"
              : index === 1
              ? "Option 2"
              : index === 2
              ? "Option 3"
              : "Option 4"}
          </button>
        ))}
      </div>
      <button
        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none"
        onClick={() => deleteQuestion(question.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default GForm;

function generatePinCode() {
  return Math.floor(10000 + Math.random() * 90000).toString(); // 5-digit pin
}
