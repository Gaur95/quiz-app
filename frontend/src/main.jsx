import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Login from "./Component/Login.jsx";
import Signup from "./Component/Signup.jsx";
import Quiz from "./Component/Quiz.jsx";
import ContactUs from "./Component/ContactUs.jsx";
import Home from "./Component/Home.jsx";
import Student from "./Component/Student.jsx";
import GForm from "./Component/Googleform.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/quiz" element={<GForm />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/student/:pin" element={<Student />} />
      <Route path="" element={<Home />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
