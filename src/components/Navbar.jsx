import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-transparent relative">
      {/* Left Section (Logo or Placeholder) */}
      <div className="flex items-center space-x-3">
        <div className="bg-gray-200 text-gray-700 w-12 h-12 flex items-center justify-center rounded-full">
          <span className="text-sm font-bold">LOGO</span>
        </div>
        <span className="text-lg font-semibold text-gray-800">
          Dummy Text Here
        </span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6">
        {/* Hamburger Icon (Visible on Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 text-2xl focus:outline-none">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Links (Desktop View) */}
        <div className="hidden md:flex items-center justify-between md:space-x-5 lg:space-x-16 space-x-10 text-gray-600">
          <Link to="/" className="hover:text-green-600 cursor-pointer">
            Home
          </Link>
          <Link to="/aboutus" className="hover:text-green-600 cursor-pointer">
            About us
          </Link>
          <Link to="/events" className="hover:text-green-600 cursor-pointer">
            Events
          </Link>
          <Link to="/stories" className="hover:text-green-600 cursor-pointer">
            Stories
          </Link>
          <Link to="/contact" className="hover:text-green-600 cursor-pointer">
            Contact
          </Link>
          <Link
            to="/donation"
            className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
            Donate
          </Link>
        </div>
      </div>

      {/* Sliding Menu (Visible on Mobile) */}
      <div
        className={`fixed top-0 right-0 h-full w-[65%] z-10 bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}>
        <div className="flex flex-col items-start py-6 px-6 space-y-6 text-gray-600">
          <button
            onClick={toggleMenu}
            className="text-gray-600 text-2xl focus:outline-none self-end">
            <FaTimes />
          </button>
          <Link to="/" onClick={toggleMenu} className="hover:text-green-600">
            Home
          </Link>
          <Link to="/" onClick={toggleMenu} className="hover:text-green-600">
            About us
          </Link>
          <Link
            to="/events"
            onClick={toggleMenu}
            className="hover:text-green-600">
            Events
          </Link>
          <Link to="/" onClick={toggleMenu} className="hover:text-green-600">
            Stories
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="hover:text-green-600">
            Contact
          </Link>
          <Link
            to="/donation"
            onClick={toggleMenu}
            className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
