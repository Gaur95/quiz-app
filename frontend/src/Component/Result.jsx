import React, { useState } from "react";
import img from "./Images/quizimg2.jpg";
import useScores from "../hooks/useScores";
import toast from "react-hot-toast";

const Result = () => {
  const [pin, setPin] = useState(null);
  const { getScores } = useScores();
  const [scores, setScores] = useState(null);

  function handleSubmit() {
    if (!pin) return;
    getScores(pin, {
      onSuccess: (scores) => {
        if (scores.length === 0) {
          toast.error("Invalid Code");
        } else setScores(scores);
      },
    });
  }

  return (
    <div
      className="p-6 background-image pt-20"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <div className="bg-gray-800 shadow-md rounded-lg p-4">
        <h1 className="text-3xl font-bold mb-4 text-white">Results</h1>

        <div className="bg-white p-4 rounded-lg shadow-lg">
          <input
            type="Number"
            id="pincode"
            maxLength="5"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="block w-32 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter Pincode"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-md shadow-md"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>

        {scores && (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Course Name</th>
                <th className="py-2 px-4 border-b">College Name</th>
                <th className="py-2 px-4 border-b">Score</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((user, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.course} </td>
                  <td className="py-2 px-4">{user.college}</td>
                  <td className="py-2 px-4 ">
                    {user.score}/{user.totalScore}
                  </td>
                  <td className="py-2 px-4"></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Result;
