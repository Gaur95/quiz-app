import React, { useState } from "react";
import useRegisterUser from "../hooks/useRegisterUser";
import { NavLink } from "react-router-dom";
import backgroundImage from "./Images/snn.jpg";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    college: "",
    contact: "",
    email: "",
    password: "",
  });
  const { registerUser } = useRegisterUser();

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    registerUser(formData);
    console.log("Form data submitted:", formData);
    // Clear form inputs
    setFormData({
      name: "",
      course: "",
      college: "",
      contact: "",
      email: "",
      password: "",
    });
    // Set success message
    setSuccessMessage("Form successfully submitted!");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg max-w-md w-full text-center mb-6 mt-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Register Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-left text-sm font-medium text-gray-700"
            >
              Enter your name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="course"
              className="block text-left text-sm font-medium text-gray-700"
            >
              Course name:
            </label>
            <input
              type="text"
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="college"
              className="block text-left text-sm font-medium text-gray-700"
            >
              College name:
            </label>
            <input
              type="text"
              id="college"
              name="college"
              value={formData.college}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="contact"
              className="block text-left text-sm font-medium text-gray-700"
            >
              Contact number:
            </label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-left text-sm font-medium text-gray-700"
            >
              Email ID:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-left text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
        {successMessage && (
          <div className="mt-4 text-green-600 text-lg">{successMessage}</div>
        )}
        <NavLink to="/Login" className="mt-4 text-blue-500 hover:text-blue-700">
          Already have an account? SignIn
        </NavLink>
      </div>
    </div>
  );
};

export default SignUp;
