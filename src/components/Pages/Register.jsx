import React, { useState } from "react";
import GoogleLogo from "../../assets/icons8-google-25.png";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    familyMemberFullName: "",
    phone: "",
    email: "",
    password: "",
    residentFullName: "",
    residentAge: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 lg:w-3/5 bg-white p-8 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4">
          Sign up and Create a New Account
        </h1>
        <p className="mb-6 text-gray-600">Sign up using social networks</p>
        <div className="flex space-x-4 mb-6">
          <button
            className="flex items-center w-64 gap-4 px-5 bg-transparent rounded-full border-2  py-3 text-lg"
            variant="outline">
            {" "}
            <img src={GoogleLogo} />
            Sign Up With Google
          </button>
        </div>
        <p className="text-gray-500 mb-4">OR</p>
        <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Family Member Full Name"
            value={formData.familyMemberFullName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <div className="relative">
            <input
              type="number"
              placeholder="Phone no."
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Resident Full Name"
              value={formData.residentFullName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="relative">
            <input
              type="number"
              placeholder="Resident Age"
              value={formData.residentAge}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-green-500 text-white py-2 rounded">
            Sign Up
          </button>
          <label className="block md:hidden lg:hidden text-gray-500 mt-4 text-sm">
            Already have an account?
          </label>
          <Link
            to="/login"
            type="submit"
            className="w-full mt-2 bg-green-500 text-white py-2 rounded block md:hidden lg:hidden">
            Sign in
          </Link>
        </form>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex w-full md:w-1/2 lg:w-2/5 bg-gradient-to-r from-teal-400 to-green-500 flex-col justify-center items-center">
        <h1 className="text-white text-3xl font-bold mb-4">
          {" "}
          Already have an account?
        </h1>
        <p className="text-white mb-6 text-center">
          Login in and have a great day
        </p>
        <Link
          to="/login"
          className="bg-white text-teal-500 px-6 py-2 rounded-full">
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default Register;
