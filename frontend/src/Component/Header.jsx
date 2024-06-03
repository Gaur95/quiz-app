import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Header = () => {
  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <NavLink to="" className="text-white text-lg font-semibold">Home</NavLink>
          </div>
          <div className="flex">
            <NavLink
              to="/quiz"
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Create Quiz
            </NavLink>
            <Link
              to="/contactus"
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact Us
              </Link>
            <Link
              to="/student"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ml-4 text-sm font-medium"
            >
              EnterCode
            
            </Link>
          </div>
          <div className="flex">
            <Link
              to="/login"
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ml-4 text-sm font-medium"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
