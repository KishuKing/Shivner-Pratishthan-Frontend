import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleLogo from "../../assets/icons8-google-25.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form reload

    try {
      const response = await axios.post("https://example.com/api/login", {
        email,
        password,
      });
      console.log("Login successful:", response.data);
      alert("Login successful!");
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Failed to log in. Please try again.");
    }
  };
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 lg:w-3/5 bg-white p-8 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4">Login to Your Account</h1>
        <p className="mb-6 text-gray-600">Login using social networks</p>
        <div className="flex space-x-4 mb-6">
          <button
            className="flex items-center w-64 gap-4 px-5 bg-transparent rounded-full border-2  py-3 text-lg"
            variant="outline">
            {" "}
            <img src={GoogleLogo} />
            Sign In With Google
          </button>
        </div>
        <p className="text-gray-500 mb-4">OR</p>
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
          />
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-green-500 text-white py-2 rounded">
            Sign In
          </button>
          <label className="block md:hidden lg:hidden text-gray-500 mt-4 text-sm">
            Dont have an account?
          </label>
          <Link
            to="/register"
            type="submit"
            className="w-full mt-2 bg-green-500 text-white py-2 rounded block md:hidden lg:hidden">
            Sign Up
          </Link>
        </form>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex w-full md:w-1/2 lg:w-2/5 bg-gradient-to-r from-teal-400 to-green-500 flex-col justify-center items-center">
        <h1 className="text-white text-3xl font-bold mb-4">New Here?</h1>
        <p className="text-white mb-6 text-center">
          Sign up and discover a great amount of new opportunities!
        </p>
        <Link
          to="/register"
          className="bg-white text-teal-500 px-6 py-2 rounded-full">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
