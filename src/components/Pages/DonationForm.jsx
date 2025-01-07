import { useState } from "react";
import { Upload } from "lucide-react";

export default function DonationForm() {
  const [donationType, setDonationType] = useState("money");
  const [amount, setAmount] = useState("");
  const [goodDetails, setGoodDetails] = useState({
    name: "",
    quantity: "",
    description: "",
    image: null,
  });

  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      setGoodDetails((prev) => ({ ...prev, image: event.target.files[0] }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(donationType === "money" ? { amount } : goodDetails);
  };

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <div className="mx-auto">
        <div className="bg-green-50 flex flex-col justify-center lg:h-64">
          <h1 className="text-3xl font-semibold text-center mb-2">
            Apne Paise Hume Dijiye
          </h1>
          <p className="text-center text-gray-500">March 02, 2024 8:30 AM</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8 py-16">
          <h2 className="text-2xl font-semibold text-[#026D1C]">
            Donation Details
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#26B947] focus:border-transparent"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#26B947] focus:border-transparent"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700">
                Email Id
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#26B947] focus:border-transparent"
                placeholder="example123@gmail.com"
                required
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700">
                Phone No.
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#26B947] focus:border-transparent"
                placeholder="00000 00000"
                required
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
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#26B947] focus:border-transparent"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(event) => setAmount(event.target.value)}
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
                    value={goodDetails.name}
                    onChange={(event) =>
                      setGoodDetails((prev) => ({
                        ...prev,
                        name: event.target.value,
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
                    value={goodDetails.quantity}
                    onChange={(event) =>
                      setGoodDetails((prev) => ({
                        ...prev,
                        quantity: event.target.value,
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
                  {goodDetails.image && (
                    <p className="text-sm text-gray-500 mt-2">
                      Selected file: {goodDetails.image.name}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Message */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#26B947] focus:border-transparent min-h-[100px]"
                placeholder="Write your message here..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#26B947] text-white px-8 py-2 rounded-md hover:bg-[#1f9939] transition-colors">
                Donate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
