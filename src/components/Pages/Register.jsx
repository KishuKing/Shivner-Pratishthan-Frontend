import React, { useState } from "react";
import RegisterImage from "../../assets/registerImage.jpg";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    adminCode: "",
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

    console.log("username:", formData.username);
    console.log("phone:", formData.phone);
    console.log("email:", formData.email);
    console.log("password:", formData.password);
    console.log("adminCode:", formData.adminCode);
  };

  return (
    <div className="min-h-screen gap-12 flex items-center justify-center bg-white">
      <div
        className="bg-white rounded-3xl shadow-xl p-8"
        style={{ width: "450px" }}>
        <h2 className="text-3xl font-bold mb-6 text-green-500 text-center">
          Sign up
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-bold mb-2">
              Phone No.
            </label>
            <input
              type="number"
              id="phone"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="admin-code"
              className="block text-gray-700 text-sm font-bold mb-2">
              Admin Code
            </label>
            <input
              type="password"
              id="admin-code"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.adminCode}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center justify-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-gray-600 text-sm">
                I accept the <a className="text-green-500">Terms of Use</a> &{" "}
                <a className="text-green-500">Privacy Policy</a>
              </label>
            </div>
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white w-full font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline">
              Sign up
            </button>
          </div>

          <div className="text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-green-500 hover:text-green-700">
              Login
            </Link>
          </div>
        </form>
      </div>
      <div className="justify-start hidden lg:block">
        {" "}
        <img
          src={RegisterImage}
          alt="Description of the image"
          style={{ width: "700px", height: "auto" }}
        />{" "}
      </div>
    </div>
  );
}

export default Register;
