// import React, { useState } from "react";
// import img from "./Images/result.avif";
// import useScores from "../hooks/useScores";
// import toast from "react-hot-toast";

// const Result = () => {
//   const [pin, setPin] = useState(null);
//   const { getScores } = useScores();
//   const [scores, setScores] = useState(null);

//   function handleSubmit() {
//     if (!pin) return;
//     getScores(pin, {
//       onSuccess: (scores) => {
//         if (scores.length === 0) {
//           toast.error("Invalid Code");
//         } else setScores(scores);
//       },
//     });
//   }

//   return (
//     <div
//       className="p-6 background-image pt-20"
//       style={{
//         backgroundImage: `url(${img})`,
//         backgroundSize: "cover",
//         minHeight: "100vh",
//       }}
//     >
//       <div className="bg-gray-800 shadow-md rounded-lg p-4">
//         <h1 className="text-3xl font-bold mb-4 text-white">Results</h1>

//         <div className="bg-white p-4 rounded-lg shadow-lg">
//           <input
//             type="Number"
//             id="pincode"
//             maxLength="5"
//             value={pin}
//             onChange={(e) => setPin(e.target.value)}
//             className="block w-32 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             placeholder="Enter Pincode"
//           />
//           <button
//             type="submit"
//             className="w-35 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-md shadow-md"
//             onClick={handleSubmit}
//           >
//             Submit
//           </button>
//         </div>

//         {scores && (
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr>
//                 <th className="py-2 px-4 border-b">Serial No.</th>
//                 <th className="py-2 px-4 border-b">Name</th>
//                 <th className="py-2 px-4 border-b">Course Name</th>
//                 <th className="py-2 px-4 border-b">College Name</th>
//                 <th className="py-2 px-4 border-b">Score</th>
//               </tr>
//             </thead>
//             <tbody>
//               {scores.map((user, index) => (
//                 <tr key={index} className="border-b">
//                   <td className="py-2 px-4">
//                     <div className="text-center">{index + 1}</div>
//                   </td>
//                   <td className="py-2 px-4">
//                     <div className="text-center">{user.name}</div>
//                   </td>
//                   <td className="py-2 px-4">
//                     <div className="text-center">{user.course}</div>
//                   </td>
//                   <td className="py-2 px-4">
//                     <div className="text-center">{user.college}</div>
//                   </td>
//                   <td className="py-2 px-4 ">
//                     <div className="text-center">
//                       {user.score}/{user.totalScore}
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Result;

import React, { useState } from "react";
import img from "./Images/result.avif";
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
      className="flex justify-center items-center p-6 pt-20 bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="bg-gray-900 bg-opacity-75 shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-white text-center">
          Results
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <div className="flex justify-between items-center mb-4">
            <input
              type="number"
              id="pincode"
              maxLength="5"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Pincode"
            />
            <button
              type="submit"
              className="w-1/3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md ml-2"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>

        {scores && (
          <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-800">
                <tr>
                  <th className="py-3 px-6 text-xs font-medium tracking-wider text-center text-white uppercase">
                    Serial No.
                  </th>
                  <th className="py-3 px-6 text-xs font-medium tracking-wider text-center text-white uppercase">
                    Name
                  </th>
                  <th className="py-3 px-6 text-xs font-medium tracking-wider text-center text-white uppercase">
                    Course Name
                  </th>
                  <th className="py-3 px-6 text-xs font-medium tracking-wider text-center text-white uppercase">
                    College Name
                  </th>
                  <th className="py-3 px-6 text-xs font-medium tracking-wider text-center text-white uppercase">
                    Score
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {scores.map((user, index) => (
                  <tr key={index}>
                    <td className="py-4 px-6 text-sm text-gray-500">
                      <div className="text-center">{index + 1}</div>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">
                      <div className="text-center w-full">{user.name}</div>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">
                      <div className="text-center">{user.course}</div>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">
                      <div className="text-center">{user.college}</div>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">
                      <div className="text-center">
                        {user.score}/{user.totalScore}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
