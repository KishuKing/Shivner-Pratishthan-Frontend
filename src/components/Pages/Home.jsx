import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Heart, Users, Calendar, Award, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  const stats = [
    { number: '1000+', label: 'Elderly Supported' },
    { number: '50+', label: 'Events Organized' },
    { number: '100+', label: 'Volunteers' },
    { number: '15+', label: 'Years of Service' }
  ]

  const features = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Elderly Care',
      description: 'Providing comprehensive care and support to senior citizens in our facilities.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community Support',
      description: 'Building a strong community network to ensure no elderly person feels alone.'
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: 'Regular Activities',
      description: 'Organizing engaging activities and events to keep our residents active and happy.'
    }
  ]

  const latestEvents = [
    {
      title: 'Health & Wellness Camp',
      date: 'Feb 15, 2024',
      image: '/placeholder.svg?height=400&width=600',
      category: 'Healthcare'
    },
    {
      title: 'Cultural Celebration',
      date: 'Feb 20, 2024',
      image: '/placeholder.svg?height=400&width=600',
      category: 'Culture'
    },
    {
      title: 'Yoga Workshop',
      date: 'Feb 25, 2024',
      image: '/placeholder.svg?height=400&width=600',
      category: 'Wellness'
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#efffef] via-[#f7fff7] to-white">
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
                <span className="text-sm tracking-wider font-medium">WELCOME TO SHIVNER PRATISHTHAN</span>
              </div>
              <h1 className="text-[48px] font-bold leading-tight bg-gradient-to-r from-[#26B947] to-[#546FFF] bg-clip-text text-transparent">
                Empowering the Elderly for a Brighter Future
              </h1>
              <p className="text-lg text-gray-600">
                We are dedicated to supporting senior citizens in Old Age Homes in Pune, Maharashtra. Our mission is to enhance the quality of life for the elderly through comprehensive care and support.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="/about"
                  className="inline-flex items-center gap-2 bg-[#26B947] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all hover:gap-4"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link 
                  href="/donate"
                  className="inline-flex items-center gap-2 border-2 border-[#26B947] text-[#26B947] px-8 py-3 rounded-full hover:bg-[#26B947] hover:text-white transition-all hover:gap-4"
                >
                  Donate Now
                  <Heart className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform">
                <img 
                  src="/placeholder.svg?height=600&width=800"
                  alt="Elderly care at Shivner Pratishthan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-[240px]">
                <div className="flex items-center gap-4 mb-4">
                  <Award className="h-8 w-8 text-[#26B947]" />
                  <p className="font-semibold">15+ Years of Excellence</p>
                </div>
                <p className="text-sm text-gray-600">Dedicated to serving our elderly community since 2009</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold text-[#26B947] mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#f0fff0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Do</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive support and care for the elderly through various programs and initiatives
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#efffef] rounded-xl flex items-center justify-center text-[#26B947] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Latest Events</h2>
              <p className="text-gray-600">Join us in our upcoming events and activities</p>
            </div>
            <Link 
              href="/events"
              className="inline-flex items-center gap-2 text-[#26B947] hover:text-[#1f9939] transition-colors"
            >
              View All Events
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {latestEvents.map((event, index) => (
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
                    src={event.image}
                    alt={event.title}
                    className="w-full aspect-[4/3] object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    {event.category}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">{event.date}</p>
                <h3 className="text-xl font-semibold group-hover:text-[#26B947] transition-colors">
                  {event.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#f0fff0]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-gray-600 mb-8">
            Join us in our mission to provide care and support to the elderly. Your contribution can help create a better life for our seniors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/volunteer"
              className="inline-flex items-center justify-center gap-2 bg-[#26B947] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all hover:gap-4"
            >
              Become a Volunteer
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              href="/donate"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#26B947] text-[#26B947] px-8 py-3 rounded-full hover:bg-[#26B947] hover:text-white transition-all hover:gap-4"
            >
              Make a Donation
              <Heart className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home

