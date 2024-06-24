import React, { useState } from "react";
import cImg from "./Images/cont2.jpg";
import { toast } from "react-hot-toast";

const ContactUs = () => {
  // State variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic (e.g., sending data to a server)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
    toast.success("Your response is Submitted!");
  };

  return (
    <div>
      {/* Contact Section */}
      <div className="relative w-full min-h-screen">
        {/* Background Image */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${cImg})`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>

      {/* Get in Touch Section */}
      <div className="relative bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-24 shadow-xl rounded-lg mx-4 md:mx-8 lg:mx-16 -mt-12 z-10 mb-5">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
          Get in Touch
        </h2>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Have any questions or concerns?
            </h3>
            <p className="text-lg mb-4">
              If you have any questions or need assistance, we're here to help.
              Contact us and we'll respond as soon as possible.
            </p>
            <p className="text-lg">
              You can also reach out to us via phone or email. Our team is
              always ready to assist you with any inquiries or issues you may
              have.
            </p>
          </div>

          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-gray-300"
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-gray-300"
                  id="email"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-gray-300"
                  id="message"
                  placeholder="Your message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <div className="flex items-center justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
