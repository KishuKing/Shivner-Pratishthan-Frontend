import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowRight, FaArrowLeft, FaRegCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const DonatePage = () => {
  const [activeTab, setActiveTab] = useState('Overview')
  const [currentEventIndex, setCurrentEventIndex] = useState(0)
  
  const events = [
    {
      title: "Community Health Camp",
      date: "February 15, 2025",
      location: "City Community Center",
      description: "Join us in providing basic health checkups and awareness to underprivileged communities.",
      image: "/health-camp.jpg",
      category: "Healthcare"
    },
    {
      title: "Education Support Program",
      date: "March 1, 2025",
      location: "Rural School District",
      description: "Help children with their studies and organize educational activities.",
      image: "/education.jpg",
      category: "Education"
    },
    {
      title: "Elder Care Initiative",
      date: "March 15, 2025",
      location: "Senior Living Centers",
      description: "Spend time with elderly residents and assist in daily activities.",
      image: "/elder-care.jpg",
      category: "Elder Care"
    },
    {
      title: "Environmental Clean-up Drive",
      date: "March 20, 2025",
      location: "City Parks",
      description: "Help us maintain and clean our local parks for a better environment.",
      image: "/environment.jpg",
      category: "Environment"
    },
    {
      title: "Youth Mentorship Program",
      date: "April 1, 2025",
      location: "Community Youth Center",
      description: "Guide and mentor young individuals in their personal and professional development.",
      image: "/youth.jpg",
      category: "Youth Development"
    }
  ]

  // Auto-scroll events
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentEventIndex((prev) => (prev + 1) % events.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextEvent = () => {
    setCurrentEventIndex((prev) => (prev + 1) % events.length)
  }

  const prevEvent = () => {
    setCurrentEventIndex((prev) => (prev - 1 + events.length) % events.length)
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#efffef] via-[#f7fff7] to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-[1px] bg-black"></div>
                <span className="text-sm tracking-wider font-medium">DONATE</span>
              </div>
              <h1 className="text-[48px] font-bold leading-tight bg-gradient-to-r from-[#26B947] to-[#546FFF] bg-clip-text text-transparent">
              Making a donation for Development.
              </h1>
              <p className="text-gray-600 leading-relaxed text-lg max-w-[480px]">
              When you donate, you're supporting effective solutions to the development challenges—an investment in the future of our nation.
              </p>
              <Link 
                to="/donation/donationform" 
                className="inline-flex items-center gap-2 bg-[#26B947] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all hover:gap-4"
              >
                Donate now
                <FaArrowRight />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform">
                <img 
                  src="/donation-box.jpg"
                  alt="Donation Box"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="max-w-[800px]">
          <h2 className="text-[32px] font-bold mb-4">
          How you can contribute to develop villages
          </h2>
          <p className="text-gray-600 leading-relaxed">
          One of the key aspects of village development is fostering economic empowerment in rural areas. Encouraging the growth of rural industries and promoting entrepreneurship can create employment opportunities and improve the standard of living for villagers.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <div className="flex gap-8 border-b border-gray-200">
            {['Overview', 'Impact', 'What You get'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-medium relative ${
                  activeTab === tab 
                    ? "text-[#26B947] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-[#26B947] after:rounded-t-full" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-8 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
          {activeTab === 'Overview' && (
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#26B947]" />
                <p>Village development is key to building a sustainable and prosperous nation.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#26B947]" />
                <p>Promotes economic growth through self-sufficient and thriving rural communities.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#26B947]" />
                <p>Focuses on environmental conservation to ensure a balanced ecosystem.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#26B947]" />
                <p>Enhances social well-being through improved access to education, healthcare, and infrastructure.</p>
              </li>
            </ul>
          )}
          {activeTab === 'Impact' && (
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#26B947]" />
                <p>Directly benefited over 10,000 families across multiple villages.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#26B947]" />
                <p>Introduced sustainable farming techniques to increase agricultural productivity.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#26B947]" />
                <p>Provided access to clean drinking water and improved sanitation facilities.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#26B947]" />
                <p>Conducted skill development workshops for rural youth to enhance employability.</p>
              </li>
            </ul>
          )}
          {activeTab === 'What You get' && (
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#26B947]" />
                <p>Regular project updates to see how your contribution is making a difference.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#26B947]" />
                <p>Opportunity to visit the project sites and interact with the community.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#26B947]" />
                <p>Recognition for your contribution through certificates and social media mentions.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#26B947]" />
                <p>A personal sense of fulfillment in creating a lasting positive impact.</p>
              </li>
            </ul>
          )}
        </div>
      </section> 

      {/* Impact Section */}
      <section className="bg-[linear-gradient(to_right,_var(--tw-gradient-stops))] from-[#f0fff0] via-[#f8fff8] to-[#f0fff0] py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-bold mb-12">
          How we use your donation
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#26B947]">Community Impact</h3>
              <p className="text-gray-600 leading-relaxed">
              We spend 40% of donation on conducting workshops and events and 35% on training skills to the people and rest are used for the human aid related activites.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#26B947]">Skill Utilization</h3>
              <p className="text-gray-600 leading-relaxed">
              We also encourage donors to give unrestricted donations, which means we can spend them where the need is greatest.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DonatePage

