import React from "react";

const Donation = () => {
  const donationData = [
    {
      id: 1,
      name: "Krish Naik",
      email: "krishnaik@gmail.com",
      phone: 1234567890,
      amount: 50000,
      message: "Donation given",
    },
  ];

  return (
    <div className="w-full px-6 py-8 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <h3 className="text-2xl font-semibold">Donation List</h3>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            {Object.keys(donationData[0]).map((key) => (
              <th
                key={key}
                className="border border-gray-300 p-2 text-left bg-gray-100">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {donationData.map((event) => (
            <tr key={event.id} className="odd:bg-white even:bg-gray-50">
              {Object.values(event).map((value, index) => (
                <td key={index} className="border border-gray-300 p-2">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Donation;
