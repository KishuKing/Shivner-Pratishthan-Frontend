import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

const AboutUs = () => {
  const awards = [
    {
      year: "2021",
      title: "Best NGO Award",
      location: "NEW DELHI, INDIA",
    },
    {
      year: "2018",
      title: "Kashi Award",
      location: "VARANASI, INDIA",
    },
    {
      year: "2014",
      title: "Foresto Award",
      location: "NEW DELHI, INDIA",
    },
    {
      year: "2010",
      title: "Society Saver Award",
      location: "VIENNA, AUSTRIA",
    },
  ];

  const team = [
    {
      name: "Aditya Sawant",
      role: "UI/UX Designer",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Manas Tamboli",
      role: "Backend Developer",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Krish Naik",
      role: "Front-End Developer",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Shreeya Dave",
      role: "Database Manager",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Sangeeta Shirsat",
      role: "Project Manager",
      image: "/placeholder.svg?height=400&width=300",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.main
      className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#efffef] via-[#f7fff7] to-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <motion.section className="relative overflow-hidden" variants={itemVariants}>
        <div className="max-w-[1200px] mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="flex items-center gap-3" variants={itemVariants}>
                <div className="w-6 h-[1px] bg-black"></div>
                <span className="text-sm tracking-wider font-medium">
                  ABOUT US
                </span>
              </motion.div>
              <motion.h1
                className="text-[48px] font-bold leading-tight bg-gradient-to-r from-[#26B947] to-[#546FFF] bg-clip-text text-transparent"
                variants={itemVariants}
              >
                Empowering the elderly with care and compassion
              </motion.h1>
              <motion.p
                className="text-gray-600 leading-relaxed text-lg max-w-[480px]"
                variants={itemVariants}
              >
                We help senior citizens live with dignity and care by providing
                shelter, healthcare, and emotional support. Our mission focuses
                on supporting underprivileged elderly individuals.
              </motion.p>
              <motion.div variants={itemVariants}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#26B947] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all hover:gap-4"
                >
                  Get Involved
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Elderly care"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        className="py-16 bg-white"
        variants={itemVariants}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-4 text-sm uppercase tracking-wider text-gray-600">
                Our Mission
              </h3>
              <h4 className="mb-4 text-2xl font-bold">
                Empowering the elderly with care and compassion.
              </h4>
              <p className="text-gray-600">
                We help senior citizens live with dignity and care by providing
                shelter, healthcare, and emotional support. Our mission focuses
                on supporting underprivileged elderly individuals and ensuring
                they receive the attention and respect they deserve.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-4 text-sm uppercase tracking-wider text-gray-600">
                Our Vision
              </h3>
              <h4 className="mb-4 text-2xl font-bold">
                Creating a compassionate world where every senior thrives.
              </h4>
              <p className="text-gray-600">
                We seek a world of hope, tolerance and social justice, where
                poverty has been overcome and people live in dignity and
                security. The villages must be potential enough to develop at a
                faster pace, the underprivileged sections of society must rise.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Awards Section */}
      <motion.section
        className="py-16"
        variants={itemVariants}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Awards & Recognitions</h2>
            <p className="text-gray-600">
              Our commitment to excellence has been recognized globally
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="mx-auto mb-4 w-24 h-24 flex items-center justify-center rounded-full border-2 border-[#26B947] group-hover:bg-[#26B947] group-hover:text-white transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-xl font-bold">{award.year}</span>
                </motion.div>
                <h3 className="mb-2 font-semibold">{award.title}</h3>
                <p className="text-sm text-gray-600">{award.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="py-16 bg-[#f0fff0]"
        variants={itemVariants}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Meet our team</h2>
            <p className="text-gray-600">
              Dedicated professionals working towards a better future
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-4 aspect-square overflow-hidden rounded-lg">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="mb-1 font-semibold">{member.name}</h3>
                <p className="mb-4 text-sm text-gray-600">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <Link
                    to="#"
                    className="text-gray-600 hover:text-[#26B947] transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link
                    to="#"
                    className="text-gray-600 hover:text-[#26B947] transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link
                    to="#"
                    className="text-gray-600 hover:text-[#26B947] transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-16"
        variants={itemVariants}
      >
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Join Us in Making a Difference
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Your support can help us continue our mission of providing care and
            dignity to the elderly. Together, we can create a better world for
            our seniors.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/volunteer"
                className="inline-flex items-center justify-center gap-2 bg-[#26B947] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all hover:gap-4"
              >
                Become a Volunteer
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/donate"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#26B947] text-[#26B947] px-8 py-3 rounded-full hover:bg-[#26B947] hover:text-white transition-all hover:gap-4"
              >
                Make a Donation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.main>
  );
};

export default AboutUs;

