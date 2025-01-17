import React, { useState } from "react";
import VolunteerPage from "./Pages/VolunteerPage";

const EventDetails = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-green-400 to-green-600 transform -skew-y-6"></div>
          <div className="relative pt-16 pb-12 px-6 sm:px-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Community Health Workshop
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Join us for an informative session on community health and
              wellness.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Event"
                  className="rounded-lg shadow-md w-full h-64 object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span className="text-gray-700">Date: August 15, 2023</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-gray-700">
                    Time: 10:00 AM - 2:00 PM
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span className="text-gray-700">
                    Location: Community Center, Varanasi
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Event Description
              </h2>
              <p className="text-gray-600">
                Our Community Health Workshop aims to educate and empower
                residents of Varanasi about various health issues and government
                schemes. Experts will discuss topics such as nutrition,
                sanitation, and preventive healthcare. Don't miss this
                opportunity to learn and contribute to the well-being of our
                community!
              </p>
            </div>

            <div className="mt-8">
              <button
                onClick={toggleForm}
                className="bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transform hover:-translate-y-1 transition-all duration-200">
                Apply as a Volunteer
              </button>
            </div>
          </div>
        </div>
      </div>
      {showForm && <VolunteerPage onClose={toggleForm} />}
    </div>
  );
};

export default EventDetails;
