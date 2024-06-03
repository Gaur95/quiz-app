// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import bgimg from "./Images/quizimg1.jpg";
// import quizImage from "./Images/imag.2.jpg"; // Import your quiz image
// import devopsImage from "./Images/devops.jpg"; // Replace with the actual image path
// import webDevImage from "./Images/web.jpg"; // Replace with the actual image path
// import dataScienceImage from "./Images/datasc.jpeg"; // Replace with the actual image path
// import embeddedSystemsImage from "./Images/iot.jpeg"; // Replace with the actual image path

// function Home() {
//   const [pinCode, setPinCode] = useState("");

//   const handlePinCodeChange = (e) => {
//     // e.stopPropagation();
//     setPinCode(e.target.value);
//   };

//   return (
//     <>
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 relative z-10 ">
//         <div className="absolute top-0 right-0 p-4 z-20">
//           <div className="bg-white p-4 rounded-lg shadow-lg">
//             <label
//               htmlFor="pincode"
//               className="block text-lg font-medium text-gray-700 mb-2"
//             >
//               Enter Pincode:
//             </label>
//             <input
//               type="text"
//               id="pincode"
//               value={pinCode}
//               onChange={handlePinCodeChange}
//               maxLength="5"
//               className="block w-32 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               placeholder="Enter Pincode"
//             />
//             <Link
//               // to={`/student/${pinCode}`}
//               className="mt-4 inline-block w-full text-center py-2 px-4 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700"
//             >
//               Start Quiz
//             </Link>
//           </div>
//         </div>
//         {/* background image */}
//         <div
//           class="text-white w-full h-[400px] bg-cover bg-center relative"
//           style={{ backgroundImage: `url(${bgimg})` }}
//         >
//           <div class="absolute bg-[#0c090958] z-0 w-full h-full"></div>
//           <div className="absolute inset-0 bg- -opacity-80"></div>
//           <div class="content px-4 relative z-10">
//             <div class="flex justify-between items-center gap-7">
//               <div class="w-[60%] text-center">
//                 <h1 class="text-5xl w-[80%] font-serif animate-bounce mt-8">
//                   BrainZ <br />
//                   <span class="text-blue-700">Quiz</span>
//                   <br />
//                   Website
//                 </h1>
//                 <p class="par my-6 text-lg w-[80%]">
//                   Take a minute for yourself!:"BrainZ"
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="max-w-4xl mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center justify-center">
//             <div className="md:w-1/2">
//               <img
//                 src={quizImage}
//                 alt="Quiz Image"
//                 className="w-full rounded-lg shadow-lg mb-8 md:mb-0"
//               />
//             </div>
//             <div className="md:w-1/2 md:pl-8">
//               <h1 className="text-3xl md:text-4xl font-bold mb-4">
//                 Welcome to BrainZ: Our Quiz Platform!
//               </h1>
//               <p className="text-lg text-gray-700 mb-8">
//                 Engage in fun and challenging quizzes tailored to enhance your
//                 knowledge and skills. Quizzes are not only a great way to test
//                 your understanding but also an excellent method to learn
//                 interactively and enjoyably.
//               </p>
//               <p className="text-lg text-gray-700">
//                 Join our community of learners and test your understanding
//                 across various topics. Discover how learning can be fun with
//                 Brain!
//               </p>
//             </div>
//           </div>
//           <div className="mt-10">
//             <h2 className="text-2xl font-bold mb-4 text-center">
//               Explore Our Subjects
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               <SubjectCard
//                 image={devopsImage}
//                 title="DevOps"
//                 description="DevOps bridges the gap between development and operations, fostering a culture of collaboration and continuous improvement. It is crucial for rapid and reliable software delivery."
//               />
//               <SubjectCard
//                 image={webDevImage}
//                 title="Web Development"
//                 description="Web Development is the foundation of the internet, enabling the creation of websites and web applications. It's essential for building a dynamic and interactive online presence."
//               />
//               <SubjectCard
//                 image={dataScienceImage}
//                 title="Data Science"
//                 description="Data Science is the art of extracting insights from data. It combines statistics, computer science, and domain expertise to make informed decisions and drive innovation."
//               />
//               <SubjectCard
//                 image={embeddedSystemsImage}
//                 title="Embedded Systems with IoT"
//                 description="Embedded Systems with IoT integrate hardware and software to create smart, connected devices. They are pivotal in the development of modern technology solutions, from smart homes to industrial automation."
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// const SubjectCard = ({ image, title, description }) => (
//   <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
//     <img
//       src={image}
//       alt={title}
//       className="w-full h-32 object-cover rounded-md mb-4"
//     />
//     <h3 className="text-xl font-bold mb-2">{title}</h3>
//     <p className="text-gray-700">{description}</p>
//   </div>
// );

// export default Home;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgimg from "./Images/quizimg1.jpg";
import quizImage from "./Images/imag.2.jpg"; // Import your quiz image
import devopsImage from "./Images/devops.jpg"; // Replace with the actual image path
import webDevImage from "./Images/web.jpg"; // Replace with the actual image path
import dataScienceImage from "./Images/datasc.jpeg"; // Replace with the actual image path
import embeddedSystemsImage from "./Images/iot.jpeg"; // Replace with the actual image path

function Home() {
  const [pinCode, setPinCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlePinCodeChange = (e) => {
    setPinCode(e.target.value);
  };

  const handleStartQuizClick = () => {
    if (pinCode.trim() === "") {
      setError("Please enter a valid pincode.");
    } else {
      setError("");
      navigate(`/stuDetail`);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 relative z-10">
        <div className="absolute top-0 right-0 p-4 z-20">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <label
              htmlFor="pincode"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Enter Pincode:
            </label>
            <input
              type="text"
              id="pincode"
              value={pinCode}
              onChange={handlePinCodeChange}
              maxLength="5"
              className="block w-32 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Pincode"
            />
            <button
              onClick={handleStartQuizClick}
              className="mt-4 inline-block w-full text-center py-2 px-4 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700"
            >
              Start Quiz
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </div>
        {/* background image */}
        <div
          className="text-white w-full h-[400px] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${bgimg})` }}
        >
          <div className="absolute bg-[#0c090958] z-0 w-full h-full"></div>
          <div className="absolute inset-0 bg-opacity-80"></div>
          <div className="content px-4 relative z-10">
            <div className="flex justify-between items-center gap-7">
              <div className="w-[60%] text-center">
                <h1 className="text-5xl w-[80%] font-serif animate-bounce mt-8">
                  BrainZ <br />
                  <span className="text-blue-700">Quiz</span>
                  <br />
                  Website
                </h1>
                <p className="par my-6 text-lg w-[80%]">
                  Take a minute for yourself!:"BrainZ"
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2">
              <img
                src={quizImage}
                alt="Quiz Image"
                className="w-full rounded-lg shadow-lg mb-8 md:mb-0"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Welcome to BrainZ: Our Quiz Platform!
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Engage in fun and challenging quizzes tailored to enhance your
                knowledge and skills. Quizzes are not only a great way to test
                your understanding but also an excellent method to learn
                interactively and enjoyably.
              </p>
              <p className="text-lg text-gray-700">
                Join our community of learners and test your understanding
                across various topics. Discover how learning can be fun with
                Brain!
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Explore Our Subjects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <SubjectCard
                image={devopsImage}
                title="DevOps"
                description="DevOps bridges the gap between development and operations, fostering a culture of collaboration and continuous improvement. It is crucial for rapid and reliable software delivery."
              />
              <SubjectCard
                image={webDevImage}
                title="Web Development"
                description="Web Development is the foundation of the internet, enabling the creation of websites and web applications. It's essential for building a dynamic and interactive online presence."
              />
              <SubjectCard
                image={dataScienceImage}
                title="Data Science"
                description="Data Science is the art of extracting insights from data. It combines statistics, computer science, and domain expertise to make informed decisions and drive innovation."
              />
              <SubjectCard
                image={embeddedSystemsImage}
                title="Embedded Systems with IoT"
                description="Embedded Systems with IoT integrate hardware and software to create smart, connected devices. They are pivotal in the development of modern technology solutions, from smart homes to industrial automation."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const SubjectCard = ({ image, title, description }) => (
  <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
    <img
      src={image}
      alt={title}
      className="w-full h-32 object-cover rounded-md mb-4"
    />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default Home;
