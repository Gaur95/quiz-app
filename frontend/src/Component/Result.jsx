import React from "react";
import img from "./Images/quizimg2.jpg";

const Result = () => {
  const users = [
    {
      name: " Sam",
      course: " B.Tech",
      college: "Banasthali Vidyapith",
      score: "50",
    },
    {
      name: "tan",
      course: "B.Tech",
      college: "Banasthali Vidyapith",
      score: "60",
    },
    {
      name: "div",
      course: "B.Tech",
      college: "Banasthali Vidyapith",
      score: "80",
    },
    { name: "ayu", course: "B.Tech", college: "Graphic Era", score: "80" },
  ];

  function stuResult(queryId) {}

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
            type="text"
            id="pincode"
            maxLength="5"
            className="block w-32 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter Pincode"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-md shadow-md"
          >
            Submit
          </button>
        </div>

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
            {users.map((user, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.course} </td>
                <td className="py-2 px-4">{user.college}</td>
                <td className="py-2 px-4 ">{user.score}</td>
                <td className="py-2 px-4"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Result;
