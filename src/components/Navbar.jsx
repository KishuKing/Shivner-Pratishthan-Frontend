const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-16 py-4 bg-transparent shadow-md">
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
        <ul className="flex space-x-10 text-gray-600">
          <li className="hover:text-green-600 cursor-pointer">Home</li>
          <li className="hover:text-green-600 cursor-pointer">About us</li>
          <li className="hover:text-green-600 cursor-pointer">Events</li>
          <li className="hover:text-green-600 cursor-pointer">Stories</li>
          <li className="hover:text-green-600 cursor-pointer">Contact</li>
        </ul>

        <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
          Donate
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
