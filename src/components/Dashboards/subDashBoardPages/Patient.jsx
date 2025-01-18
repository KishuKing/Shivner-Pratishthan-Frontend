import React, { useState, useEffect } from "react";
import axios from "axios";

const Patients = () => {
  const [addDialogVisible, setAddDialogVisible] = useState(false);
  const [patientsData, setPatientsData] = useState([]);
  const [formDialogVisible, setFormDialogVisible] = useState(false);
  const [selectedResident, setSelectedResident] = useState(null);
  const [formData, setFormData] = useState({});
  const [editFormData, setEditFormData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:3000/getResident", {
        withCredentials: true,
      });
      setPatientsData(response.data.result || []);
    } catch (error) {
      console.error("Error fetching patients data:", error);
    }
  }

  const handleAddDialogOpen = () => setAddDialogVisible(true);
  const handleAddDialogClose = () => setAddDialogVisible(false);

  const handleDialogClose = () => {
    setFormDialogVisible(false);
    setFormData({});
    setSelectedResident(null);
  };

  const handleProfileClick = (resident) => {
    setSelectedResident(resident);
    setEditFormData(resident);
    setFormDialogVisible(true);
  };

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
    try {
      const response = await axios.post(
        "http://localhost:3000/addResident",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      fetchData();
      setAddDialogVisible(false);
      setFormData({});
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleEditFileChange = (e) => {
    const { name, files } = e.target;
    setEditFormData({ ...editFormData, [name]: files[0] });
  };

  const handleEditFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:3000/updateResident/${selectedResident._id}`,
        editFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      fetchData();
      handleDialogClose();
    } catch (error) {
      console.error("Error updating resident:", error);
    }
  };

  const removeItem = async (id) => {
    try {
      await axios.post(`http://localhost:3000/deleteResident/${id}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting resident:", error);
    }
  };

  return (
    <div className="w-full px-6 py-8 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 bg-gray-800 text-white flex justify-between items-center">
          <h3 className="text-2xl font-semibold">Resident List</h3>
          <button
            onClick={handleAddDialogOpen}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out">
            Add Resident
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Full Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Age
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Gender
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Health Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Family Member
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Photo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {patientsData.length > 0 ? (
                patientsData.map((patient) => (
                  <tr key={patient._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {patient._id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {patient.fullName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {patient.age}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {patient.gender}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {patient.Health_status || "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {patient.Family_Member || "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {patient.profileImage ? (
                        <img
                          src={patient.profileImage || "/placeholder.svg"}
                          alt={patient.fullName}
                          className="h-10 w-10 rounded-full cursor-pointer"
                          onClick={() => handleProfileClick(patient)}
                        />
                      ) : (
                        <span className="text-sm text-gray-500">No Photo</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => removeItem(patient._id)}
                        className="text-red-600 hover:text-red-900 transition duration-300 ease-in-out">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={8}
                    className="px-6 py-4 text-center text-sm text-gray-500">
                    No residents available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {formDialogVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl">
            <h3 className="text-2xl font-semibold mb-6">
              Update Resident Details
            </h3>
            <div className="flex items-center space-x-6 mb-6">
              <img
                src={selectedResident.profileImage || "/placeholder.svg"}
                alt={selectedResident.fullName}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <p className="text-xl font-semibold">
                  {selectedResident.fullName}
                </p>
                <p className="text-gray-600">
                  Gender: {selectedResident.gender}
                </p>
                <p className="text-gray-600">
                  Family Member: {selectedResident.Family_Member}
                </p>
              </div>
            </div>
            <form onSubmit={handleEditFormSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={editFormData.age || ""}
                    onChange={handleEditInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="Health_status"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Health Status
                  </label>
                  <input
                    type="text"
                    id="Health_status"
                    name="Health_status"
                    value={editFormData.Health_status || ""}
                    onChange={handleEditInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="healthCondition"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Health Condition
                </label>
                <textarea
                  id="healthCondition"
                  name="healthCondition"
                  value={editFormData.healthCondition || ""}
                  onChange={handleEditInputChange}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="reportTitle"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Report Title
                  </label>
                  <input
                    type="text"
                    id="reportTitle"
                    name="reportTitle"
                    value={editFormData.reportTitle || ""}
                    onChange={handleEditInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="reportFile"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Report File
                  </label>
                  <input
                    type="file"
                    id="reportFile"
                    name="reportFile"
                    onChange={handleEditFileChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={handleDialogClose}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {addDialogVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl">
            <h3 className="text-2xl font-semibold mb-6">Add Resident</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="Health_status"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Health Status
                </label>
                <input
                  type="text"
                  id="Health_status"
                  name="Health_status"
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="Family_Member"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Family Member
                </label>
                <input
                  type="text"
                  id="Family_Member"
                  name="Family_Member"
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="profileImage"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Photo
                </label>
                <input
                  type="file"
                  id="profileImage"
                  name="profileImage"
                  onChange={handleFileChange}
                  accept="image/*"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={handleAddDialogClose}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                  Add Resident
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Patients;
