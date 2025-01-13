import React, { useState } from "react";
import axios from "axios";
import LoginImage from "../../assets/loginImage.jpg";
import GoogleLogo from "../../assets/icons8-google-25.png";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/login",
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      if (res.data.success) {
        setStatus("Login successful!");
        navigate("/");
      }
    } catch (error) {
      setStatus("Login failed");
    }
  };

  return (
    <div className="min-h-screen gap-12 flex items-center justify-center bg-white">
      <div className="justify-start hidden lg:block">
        {" "}
        <img
          src={LoginImage}
          alt="Description of the image"
          style={{ width: "700px", height: "auto" }}
        />{" "}
      </div>
      <div
        className="bg-white rounded-3xl shadow-xl p-8 w-96"
        style={{ width: "450px" }}>
        <h2 className="text-3xl font-bold mb-6 text-green-500 text-center">
          Log in
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2">
              Username or Email
            </label>
            <input
              type="text"
              id="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={username}
              onChange={handleUsernameChange}
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
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center justify-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-gray-600 text-sm">
                Remember me
              </label>
            </div>
            <a href="#" className="text-green-500 hover:text-green-700 text-sm">
              Forgot password?
            </a>
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white w-full font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline">
              Login
            </button>
          </div>

          <div className="text-center text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-green-500 hover:text-green-700">
              Sign up
            </Link>
          </div>

          <div className="text-center mt-4">
            <span className="text-gray-600">or connect with</span>
            <div className="flex justify-center mt-2">
              <button
                className="flex items-center w-64 gap-4 px-5 mb-4 bg-transparent rounded-full border-2  py-3 text-lg"
                variant="outline">
                {" "}
                <img src={GoogleLogo} />
                Sign In With Google
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
