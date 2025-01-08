import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-16 py-4 bg-transparent">
      {/* Left Section (Logo or Placeholder) */}
      <div className="flex items-center space-x-3">
        <div className="bg-gray-200 text-gray-700 w-12 h-12 flex items-center justify-center rounded-full">
          <span className="text-sm font-bold">LOGO</span>
        </div>
        <span className="text-lg font-semibold text-gray-800">
          Dummy Text Here
        </span>
      </div>

      {/* Right Section (Donate Button) */}

      <div className="flex items-center space-x-16">
        <div className="flex space-x-10 text-gray-600">
          <Link to="/" className="hover:text-green-600 cursor-pointer">
            Home
          </Link>
          <Link to="/" className="hover:text-green-600 cursor-pointer">
            About us
          </Link>
          <Link to="/events" className="hover:text-green-600 cursor-pointer">
            Events
          </Link>
          <Link to="/" className="hover:text-green-600 cursor-pointer">
            Stories
          </Link>
          <Link to="/contact" className="hover:text-green-600 cursor-pointer">
            Contact
          </Link>
        </div>

        <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
          Donate
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
