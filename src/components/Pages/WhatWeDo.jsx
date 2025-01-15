import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, ArrowRight, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

const WhatWeDo = () => {
  const activities = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: 'Health Check-ups',
      description: 'Regular medical check-ups and health awareness programs for our residents.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Social Activities',
      description: 'Group activities and cultural programs to promote social interaction.'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Outreach Programs',
      description: 'Community outreach initiatives to support elderly in surrounding areas.'
    }
  ]

  const upcomingEvents = [
    {
      title: "Health & Wellness Camp",
      date: "February 15, 2024",
      location: "Main Center",
      image: "/placeholder.svg?height=400&width=600",
      description: "Free health check-ups and wellness sessions for our residents."
    },
    {
      title: "Cultural Evening",
      date: "February 20, 2024",
      location: "Community Hall",
      image: "/placeholder.svg?height=400&width=600",
      description: "An evening of music, dance, and cultural performances."
    },
    {
      title: "Yoga Workshop",
      date: "February 25, 2024",
      location: "Garden Area",
      image: "/placeholder.svg?height=400&width=600",
      description: "Learn yoga techniques specially designed for seniors."
    }
  ]

  const projects = [
    {
      title: "Healthcare Initiative",
      description: "Providing accessible healthcare services to elderly residents.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Healthcare"
    },
    {
      title: "Social Integration Program",
      description: "Bringing together seniors through various social activities.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Community"
    },
    {
      title: "Skill Development",
      description: "Teaching new skills to keep our residents engaged and productive.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Education"
    }
  ]

  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#efffef] via-[#f7fff7] to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 py-24">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-[1px] bg-black"></div>
                <span className="text-sm tracking-wider font-medium">WHAT WE DO</span>
              </div>
              <h1 className="text-[48px] font-bold leading-tight bg-gradient-to-r from-[#26B947] to-[#546FFF] bg-clip-text text-transparent">
                Creating Meaningful Experiences for Our Seniors
              </h1>
              <p className="text-lg text-gray-600">
                Through our various programs and activities, we strive to create an engaging and supportive environment for our elderly residents.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/placeholder.svg?height=600&width=800"
                  alt="Seniors participating in activities"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Activities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We organize various activities to ensure the physical and mental well-being of our residents
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#f0fff0] p-6 rounded-2xl hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#26B947] mb-4">
                  {activity.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-[#f0fff0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join us in our upcoming events and make a difference in the lives of our seniors
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white font-medium">{event.date}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the various initiatives we've undertaken to enhance the lives of our elderly residents
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Search className="text-white h-8 w-8" />
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#26B947] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#f0fff0]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Get Involved?</h2>
          <p className="text-gray-600 mb-8">
            There are many ways you can contribute to our cause and help make a difference in the lives of our elderly residents.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#26B947] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all hover:gap-4"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default WhatWeDo

