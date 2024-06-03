import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Quiz = () => {
  // State variables to store admin and student information
  const [adminInfo, setAdminInfo] = useState({
    name: 'Admin Name',
    photo: 'admin-photo-url.jpg', // Update this path to point to the admin photo
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.'
  });

  const [studentInfo, setStudentInfo] = useState({
    name: 'Student Name',
    photo: 'student-photo-url.jpg', // Update this path to point to the student photo
    course: 'Course Name'
  });

  const handleAdminChange = (e) => {
    setAdminInfo({ ...adminInfo, [e.target.name]: e.target.value });
  };

  const handleStudentChange = (e) => {
    setStudentInfo({ ...studentInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-opacity-50 bg-cover bg-center" style={{ backgroundImage: 'url("background-image.jpg")' }}></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative z-10">
        {/* Admin Information */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Admin Information</h2>
          <img src={adminInfo.photo} alt={adminInfo.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
          <input
            type="text"
            name="name"
            value={adminInfo.name}
            onChange={handleAdminChange}
            className="mt-2 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
          <input
            type="text"
            name="bio"
            value={adminInfo.bio}
            onChange={handleAdminChange}
            className="mt-2 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        
        {/* Student Information */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Student Information</h2>
          <img src={studentInfo.photo} alt={studentInfo.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
          <input
            type="text"
            name="name"
            value={studentInfo.name}
            onChange={handleStudentChange}
            className="mt-2 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
          <input
            type="text"
            name="course"
            value={studentInfo.course}
            onChange={handleStudentChange}
            className="mt-2 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between relative z-10">
        <Link to="/create-quiz" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Create Quiz
        </Link>
        <Link to="/previous-quizzes" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          View Previous Quizzes
        </Link>
      </div>

      {/* Dashboard Navigation */}
      <div className="flex justify-between relative z-10">
        <Link to="/dashboard" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
          Dashboard
        </Link>
        <Link to="/profile" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
          My Profile
        </Link>
      </div>
    </div>
  );
};

export default Quiz;
