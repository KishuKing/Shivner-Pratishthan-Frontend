import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaArrowLeft,
  FaRegCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const VolunteerPage = () => {
  const [activeTab, setActiveTab] = useState("About");
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const events = [
    {
      title: "Community Health Camp",
      date: "February 15, 2025",
      location: "City Community Center",
      description:
        "Join us in providing basic health checkups and awareness to underprivileged communities.",
      image: "/health-camp.jpg",
      category: "Healthcare",
    },
    {
      title: "Education Support Program",
      date: "March 1, 2025",
      location: "Rural School District",
      description:
        "Help children with their studies and organize educational activities.",
      image: "/education.jpg",
      category: "Education",
    },
    {
      title: "Elder Care Initiative",
      date: "March 15, 2025",
      location: "Senior Living Centers",
      description:
        "Spend time with elderly residents and assist in daily activities.",
      image: "/elder-care.jpg",
      category: "Elder Care",
    },
    {
      title: "Environmental Clean-up Drive",
      date: "March 20, 2025",
      location: "City Parks",
      description:
        "Help us maintain and clean our local parks for a better environment.",
      image: "/environment.jpg",
      category: "Environment",
    },
    {
      title: "Youth Mentorship Program",
      date: "April 1, 2025",
      location: "Community Youth Center",
      description:
        "Guide and mentor young individuals in their personal and professional development.",
      image: "/youth.jpg",
      category: "Youth Development",
    },
  ];

  // Auto-scroll events
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentEventIndex((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextEvent = () => {
    setCurrentEventIndex((prev) => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentEventIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#efffef] via-[#f7fff7] to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-[1px] bg-black"></div>
                <span className="text-sm tracking-wider font-medium">
                  VOLUNTEER WITH US
                </span>
              </div>
              <h1 className="text-[48px] font-bold leading-tight bg-gradient-to-r from-[#26B947] to-[#546FFF] bg-clip-text text-transparent">
                Join Our Mission to Create Positive Change
              </h1>
              <p className="text-gray-600 leading-relaxed text-lg max-w-[480px]">
                Your time and skills can make a real difference in someone's
                life. Join our community of volunteers and help us create
                lasting impact.
              </p>
              <Link
                to="/volunteer/volunteerform"
                className="inline-flex items-center gap-2 bg-[#26B947] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all hover:gap-4">
                Start Volunteering
                <FaArrowRight />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform">
                <img
                  src="./Images/Volunteers.jpeg"
                  alt="Volunteers working together"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-2xl font-bold text-[#26B947]">500+</p>
                <p className="text-sm text-gray-600">Active Volunteers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="max-w-[800px]">
          <h2 className="text-[32px] font-bold mb-4">
            Available Volunteering Opportunities
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We have various opportunities where you can contribute your time and
            skills. Choose the one that matches your interests and availability.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <div className="flex gap-8 border-b border-gray-200">
            {["About", "Requirements", "Benefits"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-medium relative ${
                  activeTab === tab
                    ? "text-[#26B947] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-[#26B947] after:rounded-t-full"
                    : "text-gray-600 hover:text-gray-900"
                }`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-8 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
          {activeTab === "About" && (
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#26B947]" />
                <p>
                  Our volunteering program focuses on creating sustainable
                  impact in local communities.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#26B947]" />
                <p>
                  We work across multiple sectors including education,
                  healthcare, and environmental conservation.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#26B947]" />
                <p>
                  Flexible scheduling options available to accommodate different
                  availability.
                </p>
              </li>
            </ul>
          )}
          {activeTab === "Requirements" && (
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#26B947]" />
                <p>Minimum age of 18 years</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#26B947]" />
                <p>Commitment of at least 4 hours per week</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#26B947]" />
                <p>Willingness to undergo basic training</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#26B947]" />
                <p>Strong communication skills</p>
              </li>
            </ul>
          )}
          {activeTab === "Benefits" && (
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#26B947]" />
                <p>Gain valuable hands-on experience</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#26B947]" />
                <p>Receive professional development training</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#26B947]" />
                <p>Certificate of completion</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#26B947]" />
                <p>Letter of recommendation upon request</p>
              </li>
            </ul>
          )}
        </div>

        {/* Events Carousel */}
        <div className="mt-24">
          <h2 className="text-[32px] font-bold mb-12">Upcoming Events</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentEventIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <span className="inline-block px-4 py-1 bg-[#26B947] bg-opacity-10 text-[#26B947] rounded-full text-sm font-medium">
                      {events[currentEventIndex].category}
                    </span>
                    <h3 className="text-2xl font-bold">
                      {events[currentEventIndex].title}
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center gap-2">
                        <FaRegCalendarAlt className="text-[#26B947]" />
                        <span>{events[currentEventIndex].date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-[#26B947]" />
                        <span>{events[currentEventIndex].location}</span>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      {events[currentEventIndex].description}
                    </p>
                    <Link
                      to="/volunteer-form"
                      className="inline-flex items-center gap-2 bg-[#26B947] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all hover:gap-3">
                      Apply to Volunteer
                      <FaArrowRight />
                    </Link>
                  </div>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={events[currentEventIndex].image}
                      alt={events[currentEventIndex].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={prevEvent}
                className="p-2 rounded-full bg-white border border-gray-200 hover:border-[#26B947] transition-colors">
                <FaArrowLeft className="text-gray-600" />
              </button>
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentEventIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentEventIndex === index
                      ? "bg-[#26B947] w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
              <button
                onClick={nextEvent}
                className="p-2 rounded-full bg-white border border-gray-200 hover:border-[#26B947] transition-colors">
                <FaArrowRight className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-[linear-gradient(to_right,_var(--tw-gradient-stops))] from-[#f0fff0] via-[#f8fff8] to-[#f0fff0] py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-bold mb-12">
            How we use volunteer support
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#26B947]">
                Community Impact
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our volunteers contribute significantly to our community
                development initiatives. Through their dedicated efforts, we're
                able to reach more people and create lasting positive change.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#26B947]">
                Skill Utilization
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We ensure that every volunteer's time and skills are utilized
                effectively, matching them with projects where they can make the
                most impact while growing personally and professionally.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VolunteerPage;
