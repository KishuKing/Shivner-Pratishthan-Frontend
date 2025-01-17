import React, { useState } from "react";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaInfoCircle,
  FaMoneyBillWave,
  FaBoxOpen,
} from "react-icons/fa";

const DonationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    amount: "",
    donationType: "money",
    itemType: "",
    itemDescription: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F8FFF9] to-white py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105">
          <div className="text-center">
            <FaCheckCircle className="mx-auto h-16 w-16 text-[#26B947] animate-bounce" />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Donation Submitted!
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Thank you for your generous donation. Your contribution makes a
              difference!
            </p>
          </div>
          <div className="mt-5">
            <a
              href="/donation"
              className="group flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-[#26B947] bg-[#F8FFF9] hover:bg-[#26B947] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#26B947] transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              <FaArrowLeft className="mr-2" />
              Back to Donation Page
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FFF9] to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <a
          href="/donation"
          className="inline-flex items-center text-[#26B947] hover:text-[#1f9939] transition-colors mb-8 group">
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Donation Page
        </a>
        <div className="bg-white shadow-xl rounded-3xl overflow-hidden transform transition-all duration-500 ease-in-out hover:shadow-2xl">
          <div className="bg-[#16a34a] text-white py-8 px-6 sm:px-10">
            <h2 className="text-3xl font-bold mb-2">Make a Donation</h2>
            <p className="text-lg">
              Support our cause and make a difference in the community.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="py-8 px-6 sm:px-10 space-y-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Donation Type
              </label>
              <div className="mt-1 flex space-x-4">
                <label className="flex-1 relative block cursor-pointer">
                  <input
                    type="radio"
                    name="donationType"
                    value="money"
                    checked={formData.donationType === "money"}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div
                    className={`px-4 py-3 border rounded-lg flex items-center justify-center transition-all duration-300 ${
                      formData.donationType === "money"
                        ? "bg-[#26B947] text-white border-[#26B947]"
                        : "bg-white text-gray-700 border-gray-300 hover:border-[#26B947]"
                    }`}>
                    <FaMoneyBillWave className="mr-2" />
                    <span>Money</span>
                  </div>
                </label>
                <label className="flex-1 relative block cursor-pointer">
                  <input
                    type="radio"
                    name="donationType"
                    value="items"
                    checked={formData.donationType === "items"}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div
                    className={`px-4 py-3 border rounded-lg flex items-center justify-center transition-all duration-300 ${
                      formData.donationType === "items"
                        ? "bg-[#26B947] text-white border-[#26B947]"
                        : "bg-white text-gray-700 border-gray-300 hover:border-[#26B947]"
                    }`}>
                    <FaBoxOpen className="mr-2" />
                    <span>Items</span>
                  </div>
                </label>
              </div>
            </div>

            {formData.donationType === "money" ? (
              <div className="space-y-2">
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700">
                  Donation Amount
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">₹</span>
                  </div>
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    required
                    className="block w-full pl-7 pr-12 border-gray-300 rounded-md focus:ring-[#26B947] focus:border-[#26B947] transition-all duration-300"
                    placeholder="0.00"
                    value={formData.amount}
                    onChange={handleChange}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <label htmlFor="currency" className="sr-only">
                      Currency
                    </label>
                    <select
                      id="currency"
                      name="currency"
                      className="focus:ring-[#26B947] focus:border-[#26B947] h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                      <option>INR</option>
                    </select>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <label
                    htmlFor="itemType"
                    className="block text-sm font-medium text-gray-700">
                    Item Type
                  </label>
                  <select
                    name="itemType"
                    id="itemType"
                    required
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#26B947] focus:border-[#26B947] sm:text-sm rounded-md transition-all duration-300"
                    value={formData.itemType}
                    onChange={handleChange}>
                    <option value="">Select item type</option>
                    <option value="furniture">Furniture</option>
                    <option value="clothing">Clothing</option>
                    <option value="medical">Medical Supplies</option>
                    <option value="food">Food</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="itemDescription"
                    className="block text-sm font-medium text-gray-700">
                    Item Description
                  </label>
                  <textarea
                    name="itemDescription"
                    id="itemDescription"
                    required
                    rows="3"
                    className="shadow-sm focus:ring-[#26B947] focus:border-[#26B947] mt-1 block w-full sm:text-sm border-gray-300 rounded-md transition-all duration-300"
                    placeholder="Please describe the item(s) you wish to donate"
                    value={formData.itemDescription}
                    onChange={handleChange}></textarea>
                </div>
              </>
            )}

            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                required
                className="shadow-sm focus:ring-[#26B947] focus:border-[#26B947] mt-1 block w-full sm:text-sm border-gray-300 rounded-md transition-all duration-300"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="shadow-sm focus:ring-[#26B947] focus:border-[#26B947] mt-1 block w-full sm:text-sm border-gray-300 rounded-md transition-all duration-300"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="shadow-sm focus:ring-[#26B947] focus:border-[#26B947] mt-1 block w-full sm:text-sm border-gray-300 rounded-md transition-all duration-300"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700">
                Message (Optional)
              </label>
              <textarea
                name="message"
                id="message"
                rows="3"
                className="shadow-sm focus:ring-[#26B947] focus:border-[#26B947] mt-1 block w-full sm:text-sm border-gray-300 rounded-md transition-all duration-300"
                value={formData.message}
                onChange={handleChange}></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#26B947] hover:bg-[#1f9939] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#26B947] transition-all duration-300 transform hover:-translate-y-1">
                Submit Donation
              </button>
            </div>
            <div className="text-sm text-gray-600 flex items-start bg-blue-50 p-4 rounded-md transition-all duration-300 hover:bg-blue-100">
              <FaInfoCircle className="mr-2 mt-1 flex-shrink-0 text-blue-500" />
              <p>
                Your donation will directly contribute to our initiatives. Thank
                you for your support!
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;
