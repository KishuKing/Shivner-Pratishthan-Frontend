import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-50 py-12">
      <div className="container mx-auto px-4 gap-20 lg:flex flex-col lg:justify-between lg:items-center">
        <div className="grid grid-cols-3 gap-28 text-center lg:text-left">
          <div>
            <h3 className="font-bold text-gray-800">Our team</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer">
                About us
              </li>
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Team
              </li>
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer">
                What we do
              </li>
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800">More</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Projects
              </li>
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Events
              </li>
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Donate
              </li>
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Blog
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800">Connect</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Facebook
              </li>
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Instagram
              </li>
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Twitter
              </li>
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Linkedin
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h3 className="font-bold text-gray-800 uppercase">Subscribe</h3>
          <p className="mt-4 text-gray-600">Get new updates daily! Join now!</p>
          <div className="mt-4">
            <input
              type="email"
              placeholder="hello@kashiutthan.com"
              className="w-full lg:w-auto px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none"
            />
            <button className="bg-gray-800 text-white px-4 py-2 rounded-r-full hover:bg-gray-900">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
