import React from "react";
import { useParams, useNavigate } from "react-router-dom";

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

const EventDetails = () => {
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate();

  // Find the event data based on the ID
  const event = events.find((e) => e.id === parseInt(id));

  if (!event) {
    return <p className="text-center text-red-500">Event not found!</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-green-600 hover:underline">
        &larr; Back
      </button>
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">{event.title}</h2>
        <p className="text-sm uppercase text-gray-500 mb-2">
          {event.date} {event.month}
        </p>
        <img
          src={event.thumbnail}
          alt={event.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <p className="text-gray-700">{event.description}</p>
      </div>
    </div>
  );
};

export default EventDetails;
