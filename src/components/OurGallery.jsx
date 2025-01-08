import React from "react";
import { FiArrowRight } from "react-icons/fi";

const OurGallery = () => {
  // Array of objects for the image sources
  const galleryImages = [
    { imgSrc: "https://picsum.photos/200/300?1" },
    { imgSrc: "https://picsum.photos/200/300?2" },
    { imgSrc: "https://picsum.photos/200/300?3" },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Our Gallery</h2>
      <hr className="mb-6 border-gray-300" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center">
        {/* Loop through the galleryImages array */}
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-full h-52 rounded-md border border-black">
            <img
              src={image.imgSrc}
              alt={`image${index + 1}`}
              className="object-cover h-full w-full rounded-md"
            />
          </div>
        ))}
        {/* Add the View All div after the loop */}
        <div className="flex justify-center items-center w-full h-52 rounded-md border border-black">
          <span className="mr-2">View All</span>
          <FiArrowRight />
        </div>
      </div>
    </div>
  );
};

export default OurGallery;
