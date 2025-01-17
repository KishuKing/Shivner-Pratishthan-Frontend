import React, { useState } from "react";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaInfoCircle,
  FaUpload,
  FaTimesCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    occupation: "",
    availability: [],
    experience: "",
    motivation: "",
    identityDocument: null,
  });

  const [preview, setPreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]:
          type === "checkbox"
            ? checked
              ? [...prevState[name], value]
              : prevState[name].filter((item) => item !== value)
            : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  const availabilityOptions = [
    "Weekday Mornings",
    "Weekday Afternoons",
    "Weekday Evenings",
    "Weekends",
  ];

  const removeFile = () => {
    setFormData((prevState) => ({
      ...prevState,
      identityDocument: null,
    }));
    setPreview(null);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F8FFF9] to-white py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-lg">
          <div className="text-center">
            <FaCheckCircle className="mx-auto h-12 w-12 text-[#26B947]" />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Application Submitted!
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Thank you for your interest in volunteering. We'll review your
              application and get back to you soon.
            </p>
          </div>
          <div className="mt-5">
            <Link
              to="/volunteer"
              className="group flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-[#26B947] bg-[#F8FFF9] hover:bg-[#26B947] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#26B947] transition-colors duration-200">
              <FaArrowLeft className="mr-2" />
              Back to Volunteer Page
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
          to="/volunteer"
          className="inline-flex items-center text-[#26B947] hover:text-[#1f9939] transition-colors mb-8">
          <FaArrowLeft className="mr-2" />
          Back to Volunteer Page
        </Link>
        <div className="bg-white shadow-xl rounded-3xl overflow-hidden">
          <div className="bg-[#16a34a] text-white py-8 px-6 sm:px-10">
            <h2 className="text-3xl font-bold mb-2">Volunteer Application</h2>
            <p className="text-lg">
              Join our mission to create positive change in the community.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="py-8 px-6 sm:px-10 space-y-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#26B947] focus:border-[#26B947]"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#26B947] focus:border-[#26B947]"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="dateOfBirth"
                  className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  id="dateOfBirth"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#26B947] focus:border-[#26B947]"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="occupation"
                  className="block text-sm font-medium text-gray-700">
                  Occupation
                </label>
                <input
                  type="text"
                  name="occupation"
                  id="occupation"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#26B947] focus:border-[#26B947]"
                  value={formData.occupation}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* <div>
              <span className="block text-sm font-medium text-gray-700 mb-2">Availability</span>
              <div className="grid grid-cols-2 gap-4">
                {availabilityOptions.map(option => (
                  <label key={option} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="availability"
                      value={option}
                      checked={formData.availability.includes(option)}
                      onChange={handleChange}
                      className="rounded border-gray-300 text-[#26B947] focus:ring-[#26B947]"
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                ))}
              </div>
    
            </div> */}
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <textarea
                name="address"
                id="address"
                rows="3"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#26B947] focus:border-[#26B947]"
                value={formData.address}
                onChange={handleChange}></textarea>
            </div>

            <div>
              <label
                htmlFor="experience"
                className="block text-sm font-medium text-gray-700">
                Relevant Experience
              </label>
              <textarea
                name="experience"
                id="experience"
                rows="3"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#26B947] focus:border-[#26B947]"
                value={formData.experience}
                onChange={handleChange}></textarea>
            </div>

            <div>
              <label
                htmlFor="motivation"
                className="block text-sm font-medium text-gray-700">
                Why do you want to volunteer with us?
              </label>
              <textarea
                name="motivation"
                id="motivation"
                rows="3"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#26B947] focus:border-[#26B947]"
                value={formData.motivation}
                onChange={handleChange}></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Identity Verification Document
                <span className="ml-1 text-xs text-gray-500">
                  (Aadhar Card, Driving License, etc.)
                </span>
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md relative">
                {preview ? (
                  <div className="relative">
                    <img
                      src={preview}
                      alt="Document preview"
                      className="max-h-48 rounded"
                    />
                    <button
                      type="button"
                      onClick={removeFile}
                      className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full p-1">
                      <FaTimesCircle />
                    </button>
                  </div>
                ) : (
                  <div className="space-y-1 text-center">
                    <FaUpload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="identityDocument"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-[#26B947] hover:text-[#1f9939] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#26B947]">
                        <span>Upload a file</span>
                        <input
                          id="identityDocument"
                          name="identityDocument"
                          type="file"
                          className="sr-only"
                          onChange={handleChange}
                          required
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, PDF up to 10MB
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="text-sm text-gray-600 flex items-start bg-blue-50 p-4 rounded-md">
              <FaInfoCircle className="mr-2 mt-1 flex-shrink-0 text-blue-500" />
              <p>
                We require identity verification for security purposes.
                <Link
                  to="/terms-and-conditions"
                  className="text-[#26B947] hover:text-[#1f9939] ml-1">
                  Learn more about our terms and conditions.
                </Link>
              </p>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-[#26B947] hover:bg-[#1f9939] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#26B947] transition-colors duration-200">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VolunteerForm;
