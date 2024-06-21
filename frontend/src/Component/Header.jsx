import React from "react";
import { Link, NavLink } from "react-router-dom"; // Assuming you're using React Router for navigation
import useCurrentUser from "../hooks/useCurrentUser";
import useLogoutUser from "../hooks/useLogoutUser";
import { FiHome, FiLogOut } from "react-icons/fi"; // Importing icons from react-icons

const Header = () => {
  const { user, isLoading } = useCurrentUser();
  const { logoutUser } = useLogoutUser();

  if (isLoading) return null;

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-white text-lg font-semibold flex items-center">
              <FiHome className="mr-2" /> Home
            </Link>
          </div>
          <div className="flex items-center">
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
              to="/result"
              className="bg-green-700 hover:bg-green-900 text-white px-4 py-2 rounded-md ml-4 text-sm font-medium flex items-center"
            >
              Result
            </Link>

            <div className="bg-yellow-600 text-white px-4 py-2 rounded-md ml-4 text-sm font-medium"
              style={{background: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"}}>
             
              Welcome, {user.name}
            </div>
            <button
          
              onClick={logoutUser}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md ml-4 text-sm font-medium flex items-center"
            >
              <FiLogOut className="mr-2" /> LogOut
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
