import { motion, AnimatePresence, useViewportScroll, useTransform } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
<motion.section 
  className="relative overflow-hidden"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  <div className="max-w-[1200px] mx-auto px-6 py-24">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <motion.div 
        className="space-y-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div 
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="w-6 h-[1px] bg-black"></div>
          <span className="text-sm tracking-wider font-medium">DONATE</span>
        </motion.div>
        <motion.h1 
          className="text-[48px] font-bold leading-tight bg-gradient-to-r from-[#26B947] to-[#546FFF] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Making a donation for Development.
        </motion.h1>
        <motion.p 
          className="text-gray-600 leading-relaxed text-lg max-w-[480px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          When you donate, you're supporting effective solutions to the development challenges—an investment in the future of our nation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Link 
            to="/donation/donationform" 
            className="inline-flex items-center gap-2 bg-[#26B947] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all hover:gap-4"
          >
            Donate now
            <FaArrowRight />
          </Link>
        </motion.div>
      </motion.div>
      <motion.div 
        className="relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.div 
          className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src="/donation-box.jpg"
            alt="Donation Box"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  </div>
</motion.section>

      {/* Main Content Section */}
<motion.section 
  className="max-w-[1200px] mx-auto px-6 py-16"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8 }}
>
  <motion.div 
    className="max-w-[800px]"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <h2 className="text-[32px] font-bold mb-4">
      How you can contribute to develop villages
    </h2>
    <p className="text-gray-600 leading-relaxed">
      One of the key aspects of village development is fostering economic empowerment in rural areas. Encouraging the growth of rural industries and promoting entrepreneurship can create employment opportunities and improve the standard of living for villagers.
    </p>
  </motion.div>

  {/* Tabs */}
  <motion.div 
    className="mt-12"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    <div className="flex gap-8 border-b border-gray-200">
      {['Overview', 'Impact', 'What You get'].map((tab) => (
        <motion.button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-4 text-sm font-medium relative ${
            activeTab === tab 
              ? "text-[#26B947] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-[#26B947] after:rounded-t-full" 
              : "text-gray-600 hover:text-gray-900"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {tab}
        </motion.button>
      ))}
    </div>
  </motion.div>

  {/* Tab Content */}
  <motion.div 
    className="mt-8 p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.6 }}
  >
    <AnimatePresence mode="wait">
      {activeTab === 'Overview' && (
        <motion.ul 
          key="overview"
          className="space-y-4 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <li> Village development is key to building a sustainable and
          prosperous nation.</li>
          <li>Promotes economic growth through self-sufficient and thriving
          rural communities.</li>
          <li>Focuses on environmental conservation to ensure a balanced
          ecosystem.</li>
          <li>Enhances social well-being through improved access to
          education, healthcare, and infrastructure.</li>
        </motion.ul>
      )}
      {activeTab === 'Impact' && (
        <motion.ul 
          key="impact"
          className="space-y-4 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <li>Directly benefited over 10,000 families across multiple
          villages.</li>
          <li>Introduced sustainable farming techniques to increase
          agricultural productivity.</li>
          <li>Provided access to clean drinking water and improved
          sanitation facilities.</li>
          <li>Conducted skill development workshops for rural youth to
          enhance employability.</li>
        </motion.ul>
      )}
      {activeTab === 'What You get' && (
        <motion.ul 
          key="what-you-get"
          className="space-y-4 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <li>Regular project updates to see how your contribution is making
          a difference.</li>
          <li>Opportunity to visit the project sites and interact with the
          community.</li>
          <li>Recognition for your contribution through certificates and
          social media mentions.</li>
          <li>A personal sense of fulfillment in creating a lasting positive
          impact.</li>
        </motion.ul>
      )}
    </AnimatePresence>
  </motion.div>
</motion.section>

      {/* Impact Section */}
<motion.section 
  className="bg-[linear-gradient(to_right,_var(--tw-gradient-stops))] from-[#f0fff0] via-[#f8fff8] to-[#f0fff0] py-16"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8 }}
>
  <div className="max-w-[1200px] mx-auto px-6">
    <motion.h2 
      className="text-[32px] font-bold mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      How we use your donation
    </motion.h2>
    <motion.div 
      className="grid md:grid-cols-2 gap-16"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div 
        className="space-y-4"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
        }}
      >
        <h3 className="text-xl font-semibold text-[#26B947]">Community Impact</h3>
        <p className="text-gray-600 leading-relaxed">
          We spend 40% of donation on conducting workshops and events and 35% on training skills to the people and rest are used for the human aid related activites.
        </p>
      </motion.div>
      <motion.div 
        className="space-y-4"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
        }}
      >
        <h3 className="text-xl font-semibold text-[#26B947]">Skill Utilization</h3>
        <p className="text-gray-600 leading-relaxed">
          We also encourage donors to give unrestricted donations, which means we can spend them where the need is greatest.
        </p>
      </motion.div>
    </motion.div>
  </div>
</motion.section>
    </div>
  );
}

export default App;

