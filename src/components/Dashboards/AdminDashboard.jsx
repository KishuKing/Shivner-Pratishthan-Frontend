import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Staff");
  const [showDialog, setShowDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  const [data, setData] = useState({});
  const [addDialogVisible, setAddDialogVisible] = useState(false);

  const tabs = ["Staff", "Goods", "Patients", "Events", "Donation"];

  useEffect(() => {
    // Simulating data fetching
    const fetchData = async () => {
      const response = await axios.get("/api/dashboard-data");
      setData(response.data);
    };

    fetchData();
  }, []);

  const handleDialogOpen = (content) => {
    setDialogContent(content);
    setShowDialog(true);
  };

  const handleDialogClose = () => {
    setShowDialog(false);
    setDialogContent("");
  };

  const handleAddDialogOpen = () => {
    setAddDialogVisible(true);
  };

  const handleAddDialogClose = () => {
    setAddDialogVisible(false);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/5 border-r border-gray-300 p-4">
        <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
        <ul className="space-y-2">
          {tabs.map((tab) => (
            <li
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`cursor-pointer p-2 rounded-md ${
                selectedTab === tab ? "bg-gray-200" : ""
              }`}>
              {tab}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-4/5 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">{selectedTab} List</h3>
          <button
            onClick={handleAddDialogOpen}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Add {selectedTab}
          </button>
        </div>
        {data[selectedTab] ? (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                {Object.keys(data[selectedTab][0]).map((key) => (
                  <th
                    key={key}
                    className="border border-gray-300 p-2 text-left bg-gray-100">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data[selectedTab].map((item) => (
                <tr key={item.id} className="odd:bg-white even:bg-gray-50">
                  {Object.entries(item).map(([key, value]) => (
                    <td key={key} className="border border-gray-300 p-2">
                      {selectedTab === "Patients" &&
                      (key === "family" || key === "Medical_Status") ? (
                        <span
                          onClick={() =>
                            handleDialogOpen(
                              key === "family"
                                ? `Family Details: Name - Suresh, Phone - 1234567890, Notify - Yes`
                                : `Medical Status: All reports are fine`
                            )
                          }
                          className="text-blue-500 cursor-pointer hover:underline">
                          {value}
                        </span>
                      ) : (
                        value
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {/* Detail Dialog */}
      {showDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-md w-1/3">
            <h3 className="text-lg font-semibold mb-4">Details</h3>
            <p className="mb-4">{dialogContent}</p>
            <button
              onClick={handleDialogClose}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Close
            </button>
          </div>
        </div>
      )}

      {/* Add Dialog */}
      {addDialogVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-md w-1/2">
            <h3 className="text-lg font-semibold mb-4">Add {selectedTab}</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-2">First Name</label>
                  <input type="text" className="w-full border rounded-md p-2" />
                </div>
                <div>
                  <label className="block font-medium mb-2">Last Name</label>
                  <input type="text" className="w-full border rounded-md p-2" />
                </div>
                <div>
                  <label className="block font-medium mb-2">Age</label>
                  <input
                    type="number"
                    className="w-full border rounded-md p-2"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full border rounded-md p-2"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Phone No.</label>
                  <input type="tel" className="w-full border rounded-md p-2" />
                </div>
                {selectedTab === "Staff" && (
                  <div>
                    <label className="block font-medium mb-2">
                      Assigned Work
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded-md p-2"
                    />
                  </div>
                )}
                {selectedTab === "Patients" && (
                  <>
                    <div>
                      <label className="block font-medium mb-2">Family</label>
                      <input
                        type="text"
                        className="w-full border rounded-md p-2"
                      />
                    </div>
                    <div>
                      <label className="block font-medium mb-2">
                        Medical Status
                      </label>
                      <input
                        type="text"
                        className="w-full border rounded-md p-2"
                      />
                    </div>
                  </>
                )}
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
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Add {selectedTab}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
