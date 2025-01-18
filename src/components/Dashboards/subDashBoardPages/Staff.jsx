import axios from "axios";
import React, { useState, useEffect } from "react";

const Staff = () => {
  const [addDialogVisible, setAddDialogVisible] = useState(false);
  const [formData, setFormData] = useState({});
  const [staffData, setStaffData] = useState([]);

  useEffect(() => {
    // Fetch patient data from the backend API
    fetchData();
  }, []);

  async function fetchData() {
    await axios
      .get("http://localhost:3000/getStaff", {
        withCredentials: true, // Ensures cookies are sent in cross-origin requests
      })
      .then((response) => {
        console.log("Response:", response);
        setStaffData(response.data || []);
      })
      .catch((error) => {
        console.error("Error fetching Staff data:", error);
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

    const formDataToSend = new FormData();
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("age", formData.age);
    formDataToSend.append("gender", formData.gender);
    formDataToSend.append("assignedwork", formData.assignedwork);
    formDataToSend.append("profileImage", formData.profileImage);

    try {
      // Send data to the server
      const response = await axios.post(
        "http://localhost:3000/addStaff",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response from server:", response.data);

      // Update local state to show the new event
      const newStaff = {
        id: response.data._id,
        fullName: formData.fullName,
        phone: formData.phone,
        age: formData.age,
        gender: formData.gender,
        assignedwork: formData.assignedwork,
        profileImage: URL.createObjectURL(formData.profileImage),
      };
      console.log("New Staff:", newStaff);
      setStaffData([...staffData, newStaff]);

      // Close the dialog and reset the form
      setAddDialogVisible(false);
      setFormData({});
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
    console.log("Staff Data Submitted:", formData);
    setAddDialogVisible(false);
  };

  const removeItem = async (id) => {
    console.log(`Deleting event with id ${id}`);
    try {
      await axios.post(`http://localhost:3000/deleteStaff/${id}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <div className="w-full px-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Staff List</h3>
        <button
          onClick={handleAddDialogOpen}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700">
          Add Staff
        </button>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 bg-gray-100">ID</th>
            <th className="border border-gray-300 p-2 bg-gray-100">
              Full Name
            </th>
            <th className="border border-gray-300 p-2 bg-gray-100">Age</th>
            <th className="border border-gray-300 p-2 bg-gray-100">Gender</th>
            <th className="border border-gray-300 p-2 bg-gray-100">Phone</th>
            <th className="border border-gray-300 p-2 bg-gray-100">
              Profile Image
            </th>
            <th className="border border-gray-300 p-2 bg-gray-100">
              Assigned Work
            </th>
            <th className="border border-gray-300 p-2 bg-gray-100">Actions</th>
          </tr>
        </thead>
        <tbody>
          {staffData.length > 0 ? (
            staffData.map(
              (staff) => (
                console.log("staff", staff),
                (
                  <tr key={staff._id} className="odd:bg-white even:bg-gray-50">
                    <td className="border border-gray-300 p-2">{staff._id}</td>
                    <td className="border border-gray-300 p-2">
                      {staff.fullName}
                    </td>
                    <td className="border border-gray-300 p-2">{staff.age}</td>
                    <td className="border border-gray-300 p-2">
                      {staff.gender}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {staff.phone}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {staff.profileImage ? (
                        <img
                          src={staff.profileImage}
                          alt={staff.fullName}
                          className="h-12 w-12 object-cover rounded"
                        />
                      ) : (
                        "No Profile Image"
                      )}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {staff.assignedwork}
                    </td>

                    <td className="border border-gray-300 p-2">
                      <button
                        onClick={() => removeItem(staff._id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              )
            )
          ) : (
            <tr>
              <td
                colSpan={7}
                className="border border-gray-300 p-2 text-center">
                No staff data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {addDialogVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-md w-1/2">
            <h3 className="text-lg font-semibold mb-4">Add Staff</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Phone No.</label>
                  <input
                    type="number"
                    name="phone"
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Age</label>
                  <input
                    type="number"
                    name="age"
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">
                    Assigned Work
                  </label>
                  <input
                    type="text"
                    name="assignedwork"
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Gender</label>
                  <select
                    name="gender"
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-2"
                    required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium mb-2">Thumbnail</label>
                  <input
                    type="file"
                    name="profileImage"
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
                  Add Staff
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Staff;
