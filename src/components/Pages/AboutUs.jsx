import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react";
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
      name: "Shri Vivek Suresh Tamboli",
      role: "Chairman",
      image: "./chairman.jpg",
    },
    {
      name: "Shri Bhanudas kokane",
      role: "Commitee member",
      image: "./commiteeMember.jpg",
    },
    {
      name: "Shri Uttam vinayak choudhary",
      role: "Treasurer",
      image: "./treasurer.jpg",
    },
    {
      name: "Shri Mangesh gadhve",
      role: "Secretary",
      image: "./secretary.jpg",
    },
    {
      name: "Shrimati Rekha Tamboli",
      role: "Commitee member",
      image: "./commiteeMember2.jpg",
    },
    {
      name: "Shrimati Ad.Jyoti Rajendra Pande",
      role: "Commitee member",
      image: "./commiteeMember3.jpg",
    },
  ];

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
                  ABOUT US
                </span>
              </div>
              <h1 className="text-[48px] font-bold leading-tight bg-gradient-to-r from-[#26B947] to-[#546FFF] bg-clip-text text-transparent">
                Empowering the elderly with care and compassion
              </h1>
              <p className="text-gray-600 leading-relaxed text-lg max-w-[480px]">
                We help senior citizens live with dignity and care by providing
                shelter, healthcare, and emotional support. Our mission focuses
                on supporting underprivileged elderly individuals.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#26B947] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all hover:gap-4">
                Get Involved
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform">
                <img
                  src="./aboutUsPageImage.jpg"
                  alt="Elderly care"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}>
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
              viewport={{ once: true }}>
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
      </section>

      {/* Awards Section */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Awards & Recognitions</h2>
            <p className="text-gray-600">
              Our commitment to excellence has been recognized globally
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group">
                <div className="mx-auto mb-4 w-24 h-24 flex items-center justify-center rounded-full border-2 border-[#26B947] group-hover:bg-[#26B947] group-hover:text-white transition-all duration-300">
                  <span className="text-xl font-bold">{award.year}</span>
                </div>
                <h3 className="mb-2 font-semibold">{award.title}</h3>
                <p className="text-sm text-gray-600">{award.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-[#f0fff0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet our team</h2>
            <p className="text-gray-600">
              Dedicated professionals working towards a better future
            </p>
          </div>
          {/* Grid for 3x2 layout */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.slice(0, 6).map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group border bg-white rounded-2xl">
                {/* Card */}
                <div className="mb-4 aspect-square overflow-hidden rounded-lg flex justify-center items-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-72 w-72 object-fill transition-transform duration-300"
                  />
                </div>
                <h3 className="mb-1 font-semibold">{member.name}</h3>
                <p className="mb-4 text-sm text-gray-600">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-[#26B947] transition-colors">
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-[#26B947] transition-colors">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-[#26B947] transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-gray-600 mb-8">
            Your support can help us continue our mission of providing care and
            dignity to the elderly. Together, we can create a better world for
            our seniors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/volunteer"
              className="inline-flex items-center justify-center gap-2 bg-[#26B947] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all hover:gap-4">
              Become a Volunteer
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#26B947] text-[#26B947] px-8 py-3 rounded-full hover:bg-[#26B947] hover:text-white transition-all hover:gap-4">
              Make a Donation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
