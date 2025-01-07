import React from "react";
import { items, projects } from "../frontendConstants";

const WhatWeDo = () => {
  return (
    <div>
      {" "}
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <p className="text-sm font-medium tracking-wider text-gray-600 uppercase">
                Events
              </p>
              <div className="h-1 w-12 bg-primary mt-2"></div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              We are working for the society
            </h1>

            <p className="text-lg text-gray-600">
              We work for the development of the Bastis in the Varanasi region
              of UP, helping in education, health and finance. We continuously
              organizes events and awareness sessions in those areas, making
              them aware of government schemes, scholarships and health. We aims
              to uplift those underprivileged sections of society.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Happy elderly person celebrating"
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-gray-900/10"></div>
          </div>
        </div>
      </section>
      <section className="container bg-green-50">
        <div className="mx-auto px-4 py-12 md:py-24">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            What we do for the society
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-green-600 text-3xl">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          {/* Section Heading */}
          <div className="mb-8">
            <p className="text-sm font-medium text-gray-600 uppercase">
              Projects We Have Done
            </p>
            <h2 className="text-4xl text-gray-900 font-normal mt-4">
              We are Creating sustainable developed society, for everyone and
              forever.
            </h2>
          </div>

          {/* Project Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg group">
                <div className="h-60">
                  <img
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6 text-left">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300">{project.description}</p>
                  <button className="mt-4 px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded shadow hover:bg-gray-100">
                    See more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
