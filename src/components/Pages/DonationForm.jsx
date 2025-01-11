import React, { useState } from "react";
import { FaArrowLeft, FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Upload } from "lucide-react";

const DonationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    amount: "",
    message: "",
    goodsName: "",
    goodsQuantity: "",
    goodsImage: null,
  });

  const [donationType, setDonationType] = useState("money");
  const [goodDetails, setGoodDetails] = useState({
    name: "",
    quantity: "",
    description: "",
    image: null,
  });
  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFormData((prev) => ({ ...prev, goodsImage: event.target.files[0] }));
    }
  };
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
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-lg">
          <div className="text-center">
            <FaCheckCircle className="mx-auto h-12 w-12 text-[#26B947]" />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Donation Submitted!
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Thank you for your generous donation. Your contribution makes a
              difference!
            </p>
          </div>
          <div className="mt-5">
            <Link
              to="/donate"
              className="group flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-[#26B947] bg-[#F8FFF9] hover:bg-[#26B947] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#26B947] transition-colors duration-200">
              <FaArrowLeft className="mr-2" />
              Back to Donation Page
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FFF9] to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/donate"
          className="inline-flex items-center text-[#26B947] hover:text-[#1f9939] transition-colors mb-8">
          <FaArrowLeft className="mr-2" />
          Back to Donation Page
        </Link>
        <div className="bg-white shadow-xl rounded-3xl overflow-hidden">
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
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#26B947] focus:border-[#26B947]"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div>
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
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#26B947] focus:border-[#26B947]"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#26B947] focus:border-[#26B947]"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Donation Type Toggle */}
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-[#26B947]"
                  name="donationType"
                  checked={donationType === "money"}
                  onChange={() => setDonationType("money")}
                />
                <span className="ml-2">Donate Money</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-[#26B947]"
                  name="donationType"
                  checked={donationType === "goods"}
                  onChange={() => setDonationType("goods")}
                />
                <span className="ml-2">Donate Goods</span>
              </label>
            </div>

            {/* Conditional Fields based on Donation Type */}
            {donationType === "money" ? (
              <div className="space-y-2">
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700">
                  Amount (₹)
                </label>
                <input
                  id="amount"
                  name="amount"
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#26B947] focus:border-transparent"
                  placeholder="Enter amount"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                />
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="goodName"
                    className="block text-sm font-medium text-gray-700">
                    Good Name
                  </label>
                  <input
                    id="goodName"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#26B947] focus:border-transparent"
                    placeholder="Enter good name"
                    value={formData.goodsName}
                    onChange={(event) =>
                      setFormData((prev) => ({
                        ...prev,
                        goodsName: event.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-gray-700">
                    Quantity
                  </label>
                  <input
                    id="quantity"
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#26B947] focus:border-transparent"
                    placeholder="Enter quantity"
                    value={formData.goodsQuantity}
                    onChange={(event) =>
                      setFormData((prev) => ({
                        ...prev,
                        goodsQuantity: event.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium text-gray-700">
                    Upload Image
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="image"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-[#26B947] hover:text-[#1f9939]">
                          <span>Upload a file</span>
                          <input
                            id="image"
                            type="file"
                            className="sr-only"
                            accept="image/*"
                            onChange={handleImageUpload}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                  {formData.goodsImage && (
                    <p className="text-sm text-gray-500 mt-2">
                      Selected file: {formData.goodsImage.name}
                    </p>
                  )}
                </div>
              </div>
            )}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700">
                Message (Optional)
              </label>
              <textarea
                name="message"
                id="message"
                rows="3"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#26B947] focus:border-[#26B947]"
                value={formData.message}
                onChange={handleChange}></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#26B947] hover:bg-[#1f9939] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#26B947]">
                Submit Donation
              </button>
            </div>
            <div className="text-sm text-gray-600 flex items-start bg-blue-50 p-4 rounded-md">
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
