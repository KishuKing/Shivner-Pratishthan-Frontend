import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const events = [
  {
    id: 1,
    date: "29",
    month: "FEB",
    thumbnail: "https://image.png",
    title: "Amrit Bharat-2024",
    description: "A National Level Event",
  },
  {
    id: 2,
    date: "02",
    month: "MAR",
    thumbnail: "https://image.png",
    title: "Weekly Education Program",
    description: "A weekly program for students",
  },
];

const OurEvents = () => {
  const navigate = useNavigate();

  const handleEventClick = (id) => {
    navigate(`/events/${id}`);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Our Events</h2>
      <hr className="mb-6 border-gray-300" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            onClick={() => handleEventClick(event.id)}
            className="flex justify-between py-10 items-center bg-green-100 rounded-lg p-4 shadow-md cursor-pointer hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="text-center pr-4 mr-6">
                <p className="text-3xl font-bold text-gray-800">{event.date}</p>
                <p className="text-sm uppercase text-gray-500">{event.month}</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase text-gray-500">
                  Next Events
                </p>
                <p className="text-lg font-semibold text-gray-800">
                  {event.title}
                </p>
              </div>
            </div>
            <div className="text-green-600 text-xl">
              <FiArrowRight />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurEvents;
