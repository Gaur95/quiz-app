import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bgimg from "./Images/quiz2.jpg";
import quizImage from "./Images/imag.2.jpg";
import devopsImage from "./Images/devops.jpg";
import webDevImage from "./Images/web.jpg";
import dataScienceImage from "./Images/datasc.jpeg";
import embeddedSystemsImage from "./Images/iot.jpeg";
import axios from "axios";
import toast from "react-hot-toast";

function Home() {
  const [pinCode, setPinCode] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!pinCode) return;

    axios
      .get(`http://localhost:3000/quiz/check/${pinCode}`)
      .then(() => {
        navigate(`/student/${pinCode}`);
      })
      .catch(() => {
        toast.error("Code is Invalid");
      });
  }

  const handlePinCodeChange = (e) => {
    setPinCode(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 relative z-10">
        <div className="absolute top-0 right-0 p-4 z-20">
          <div className="bg-[#30251cd9] mt-72 p-4 rounded-lg shadow-lg">
            <label
              htmlFor="pincode"
              className="block text-lg font-medium text-yellow-500 mb-2"
            >
              Enter Pincode:
            </label>
            <input
              type="number"
              id="pincode"
              value={pinCode}
              onChange={handlePinCodeChange}
              maxLength="5"
              className="block w-32 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Pincode"
            />
            <button
              onClick={handleSubmit}
              className="mt-4 inline-block w-full text-center py-2 px-4 bg-yellow-500 text-white font-medium rounded-md shadow-sm hover:bg-white hover:text-yellow-500 transition-colors duration-300"
            >
              Start Quiz
            </button>
          </div>
        </div>
        {/* background image */}
        <div
          className="text-white w-full h-[480px] bg-cover bg-center relative flex items-center justify-center"
          style={{ backgroundImage: `url(${bgimg})` }}
        >
          <div className="absolute bg-[#000000a7] z-0 w-full h-full"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-6xl font-serif font-bold animate-bounce text-yellow-500">
              BrainZ
            </h1>
            <h2 className="text-4xl font-serif font-bold mt-4 text-white">
              Quiz Platform
            </h2>
            <p className="mt-4 text-lg font-semibold text-gray-300">
              Take a minute for yourself! Engage and learn with BrainZ.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 mt-10">
          <div className="flex flex-col md:flex-row items-center justify-center bg-gray-800 p-6 rounded-lg shadow-lg mb-8 text-yellow-500">
            <div className="md:w-1/2">
              <img
                src={quizImage}
                alt="Quiz Image"
                className="w-full rounded-lg shadow-lg mb-8 md:mb-0 transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="md:w-1/2 md:pl-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-500">
                Welcome to BrainZ: Our Quiz Platform!
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Engage in fun and challenging quizzes tailored to enhance your
                knowledge and skills. Quizzes are not only a great way to test
                your understanding but also an excellent method to learn
                interactively and enjoyably.
              </p>
              <p className="text-lg text-gray-300">
                Join our community of learners and test your understanding
                across various topics. Discover how learning can be fun with
                BrainZ!
              </p>
            </div>
          </div>

          <div className="mt-10 mb-6">
            <h2 className="text-3xl font-bold mb-10 text-center text-yellow-600">
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
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 w-full h-auto">
    <img
      src={image}
      alt={title}
      className="w-full h-40 object-cover rounded-md mb-4"
    />
    <h3 className="text-2xl font-bold mb-2 text-yellow-500">{title}</h3>
    <p className="text-gray-300 text-[15px]">{description}</p>
  </div>
);

export default Home;
