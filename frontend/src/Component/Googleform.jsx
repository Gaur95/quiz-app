import React, { useState } from "react";
import axios from "axios";
import useSubmitQuiz from "../hooks/useSubmitQuiz";
// import "./App.css"; // Ensure you have your styles here

const GForm = () => {
  const [quizName, setQuizName] = useState("");
  const [questions, setQuestions] = useState([
    {
      id: 1,
      title: "Question 1",
      type: "option",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      selectedOption: null,
      correctOption: "",
    },
  ]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [pinCode, setPinCode] = useState(null);
  const { submitQuiz } = useSubmitQuiz();

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
    <div className="w-full max-w-3xl mx-auto bg-gray-900 text-white p-6 rounded-md shadow-lg">
      <h1 className="text-4xl font-bold text-white text-center mb-5">
        Quiz Form
      </h1>
      <input
        onChange={(e) => setQuizName(e.target.value)}
        value={quizName}
        type="text"
        placeholder="Enter Quiz Name"
        className="block mb-5 w-full border border-gray-700 bg-gray-800 rounded-md p-2"
      />

      <div className="space-y-6">
        <div className="relative text-right">
          <button
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none mr-4"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            +
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-10">
              <button
                className="block w-full text-left py-2 px-4 hover:bg-gray-700"
                onClick={addQuestion}
              >
                Options
              </button>
            </div>
          )}
        </div>

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
      </div>
      <button
        className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none mt-5 w-full"
        onClick={handlesubmit}
      >
        Submit
      </button>

      {pinCode && (
        <div className="mt-4 text-center">
          <h2 className="text-2xl">Generated Pin Code: {pinCode}</h2>
          <p>Share this pin code with students to start the quiz.</p>
        </div>
      )}
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
    <div className="border border-gray-700 bg-gray-800 rounded-md p-4 mb-4">
      <input
        type="text"
        defaultValue={question.title}
        className="block w-full border border-gray-700 bg-gray-800 rounded-md p-2 mb-2"
        onChange={(e) => setTitle(e.target.value, question.id)}
      />
      <div>
        {question.options.map((option, index) => (
          <div key={index} className="mb-2 flex items-center">
            <input
              type="radio"
              name={`option_${question.id}`}
              value={option}
              checked={question.selectedOption === option}
              onChange={(e) => handleOptionChange(option, question.id)}
              className="mr-2"
            />
            <input
              type="text"
              value={option}
              onChange={(e) => handleOptionTextChange(e, question.id, index)}
              className="border border-gray-700 bg-gray-800 rounded-md p-1 flex-grow"
            />
          </div>
        ))}
      </div>
      <div className="flex items-center mb-2">
        <span className="mr-2">Correct answer:</span>
        {/* <input
          type="text"
          value={question.correctOption}
          onChange={(e) => handleCorrectAnswerChange(e, question.id)}
          className="border border-gray-700 bg-gray-800 rounded-md p-1 w-full"
           />  */}
{/* for correct answer option */}
        {question.options.map((option, index) => {
          return (
            <>
              <label htmlFor={`ans${index}`}>
                {" "}
                <button
                  // type="radio"
                  name="answer"
                  id={`ans${index}`}
                  onClick={(e) =>
                    handleCorrectAnswerChange(option, question.id)
                  }
                >
                  {index == 0 && "A "}
                  {index == 1 && "B "}
                  {index == 2 && "C "}
                  {index == 3 && "D "}
                </button>
              </label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </>
          );
        })}
      </div>
      <button
        className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none"
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
