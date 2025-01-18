import React, { useEffect, useState } from "react";
import axios from "axios";
const Events = () => {
  const [addDialogVisible, setAddDialogVisible] = useState(false);
  //const [eventData,setEventData]=useState([]);
  const [formData, setFormData] = useState({});
  const [eventsData, setEventsData] = useState([
    {
      id: 1,
      title: "Charity Walk",
      description: "A walk to raise funds for the elderly.",
      date: "2025-01-15",
      thumbnail: "charity-walk.jpg",
    },
  ]);

  useEffect(() => {
    // Fetch project data from the backend API using axios
    fetchData();
  }, []);

  async function fetchData() {
    await axios
      .get("http://localhost:3000/getevents", {
        withCredentials: true, // Ensure cookies are sent in cross-origin requests
      })
      .then((response) => {
        // Update state with the fetched data
        console.log("its a response:", response.data);
        setEventsData(response.data); // Axios automatically parses JSON
      })
      .catch((error) => {
        console.error("Error fetching Events data:", error);
      });
  }

  const handleAddDialogOpen = () => setAddDialogVisible(true);
  const handleAddDialogClose = () => setAddDialogVisible(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send data
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("date", formData.date);
    formDataToSend.append("thumbnail", formData.thumbnail);

    try {
      // Send data to the server
      const response = await axios.post(
        "http://localhost:3000/event",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response from server:", response.data);

      // Update local state to show the new event
      const newEvent = {
        id: eventsData.length + 1,
        title: formData.title,
        description: formData.description,
        date: formData.date,
        thumbnail: URL.createObjectURL(formData.thumbnail),
      };
      setEventsData([...eventsData, newEvent]);

      // Close the dialog and reset the form
      setAddDialogVisible(false);
      setFormData({});
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  const removeItem = async (id) => {
    console.log(`Deleting event with id ${id}`);
    try {
      await axios.post(`http://localhost:3000/deleteevent/${id}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };
  return (
    <div className="w-full px-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Events List</h3>
        <button
          onClick={handleAddDialogOpen}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700">
          Add Event
        </button>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 bg-gray-100">ID</th>
            <th className="border border-gray-300 p-2 bg-gray-100">Title</th>
            <th className="border border-gray-300 p-2 bg-gray-100">
              Description
            </th>
            <th className="border border-gray-300 p-2 bg-gray-100">Date</th>
            <th className="border border-gray-300 p-2 bg-gray-100">
              Thumbnail
            </th>
            <th className="border border-gray-300 p-2 bg-gray-100">Actions</th>
          </tr>
        </thead>
        <tbody>
          {eventsData.length > 0 ? (
            eventsData.map((event) => (
              <tr key={event._id} className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-300 p-2">{event._id}</td>
                <td className="border border-gray-300 p-2">{event.title}</td>
                <td className="border border-gray-300 p-2">
                  {event.description}
                </td>
                <td className="border border-gray-300 p-2">
                  {new Date(event.date).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 p-2">
                  {event.thumbnail ? (
                    <img
                      src={event.thumbnail}
                      alt={event.title}
                      className="h-12 w-12 object-cover rounded"
                    />
                  ) : (
                    "No Thumbnail"
                  )}
                </td>
                <td className="border border-gray-300 p-2">
                  <button
                    onClick={() => removeItem(event._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={6}
                className="border border-gray-300 p-2 text-center">
                No events available.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {addDialogVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-md w-1/2">
            <h3 className="text-lg font-semibold mb-4">Add Event</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-2">Title</label>
                  <input
                    type="text"
                    name="title"
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Description</label>
                  <textarea
                    name="description"
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-2"
                    required></textarea>
                </div>
                <div>
                  <label className="block font-medium mb-2">Date</label>
                  <input
                    type="date"
                    name="date"
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Thumbnail</label>
                  <input
                    type="file"
                    name="thumbnail"
                    onChange={handleFileChange}
                    className="w-full border rounded-md p-2"
                    accept="image/*"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleAddDialogClose}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mr-2">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700">
                  Add Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
