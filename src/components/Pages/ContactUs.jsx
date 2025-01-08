import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Form Data:", formData);
  };
  return (
    <div>
      <section className="bg-green-50 h-96 py-12">
        <div className="container mx-auto px-4 gap-14 md:flex md:items-start md:justify-between">
          {/* Left Section */}
          <div className="mb-8 md:mb-0 md:w-1/2">
            <p className="text-sm font-medium text-gray-600 uppercase">
              Contact Us
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mt-4">
              We'd love to hear from you
            </h2>
            <p className="text-gray-600 mt-4">
              Have any question in mind or want to enquire? Please feel free to
              contact us through the form or the following details.
            </p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2">
            {/* Contact Details */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Let's talk!
              </h3>
              <p className="text-gray-600 mt-2">
                +91 91362 45102 <br />
                <a
                  href="mailto:manaspublic321@gmail.com"
                  className="text-blue-600 hover:underline">
                  manaspublic321@gmail.com
                </a>
              </p>
            </div>

            {/* Address */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Headoffice
              </h3>
              <p className="text-gray-600 mt-2">
                301, Sai Siddhi Apartment, Sector 9, Airoli
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-4xl bg-white px-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Manas"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Tamboli"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Email ID */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email ID
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="manastambo123@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mt-6">
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Type your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <button
                type="submit"
                className="bg-green-500 text-white font-medium px-6 py-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>

      <section>
        <iframe
          className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7537.914468059598!2d73.92972873069083!3d19.23786229462962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1676127919699!5m2!1sen!2sin"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </div>
  );
};

export default ContactUs;
