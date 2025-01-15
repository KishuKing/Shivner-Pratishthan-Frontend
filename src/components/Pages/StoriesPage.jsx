import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowRight, FaArrowLeft, FaQuoteLeft, FaHeart, FaChevronDown } from 'react-icons/fa'

const StoriesPage = () => {
  const [activeStory, setActiveStory] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [expandedSections, setExpandedSections] = useState({})

  const stories = [
    {
      id: 1,
      name: "Aisha Patel",
      age: 72,
      image: "/placeholder.svg?height=400&width=300",
      quote: "Finding a new family here has given me a reason to smile every day.",
      story: "After losing my husband, I felt so alone. But the warmth and care I've received here has filled my heart with joy again. From morning yoga to evening singalongs, every day is a new adventure.",
    },
    {
      id: 2,
      name: "Raj Sharma",
      age: 68,
      image: "/placeholder.svg?height=400&width=300",
      quote: "I've discovered talents I never knew I had!",
      story: "I spent my life as a banker, but here I've found my true passion - painting. The art therapy sessions have opened up a whole new world for me. Now, my grandchildren fight over who gets to keep my latest masterpiece!",
    },
    {
      id: 3,
      name: "Meera Gupta",
      age: 75,
      image: "/placeholder.svg?height=400&width=300",
      quote: "The friendships I've made here are priceless.",
      story: "I was worried about making friends at my age, but I've met the most wonderful people here. We laugh, we share stories, and we support each other. It's like being back in school, but with much better stories to tell!",
    },
  ]

  const sections = [
    {
      title: "Daily Life at Shivner Pratishthan",
      description: "Experience the vibrant daily life of our residents through these snapshots.",
      images: [
        { src: "/placeholder.svg?height=300&width=400", alt: "Morning yoga session" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Residents enjoying a meal together" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Art therapy class in progress" },
      ],
      extraImages: [
        { src: "/placeholder.svg?height=300&width=400", alt: "Evening music program" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Residents in the garden" },
      ]
    },
    {
      title: "Special Events and Celebrations",
      description: "We make sure to celebrate every occasion with enthusiasm and joy.",
      images: [
        { src: "/placeholder.svg?height=300&width=400", alt: "Diwali celebration" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Annual sports day" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Birthday party" },
      ],
      extraImages: [
        { src: "/placeholder.svg?height=300&width=400", alt: "New Year's Eve party" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Holi festival of colors" },
      ]
    },
    {
      title: "Family Visits",
      description: "The joy of family reunions captured in these heartwarming moments.",
      images: [
        { src: "/placeholder.svg?height=300&width=400", alt: "Grandchildren visiting" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Family picnic in the park" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Multi-generational family photo" },
      ],
      extraImages: [
        { src: "/placeholder.svg?height=300&width=400", alt: "Family game night" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Outdoor family gathering" },
      ]
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % stories.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  const nextStory = () => {
    setActiveStory((prev) => (prev + 1) % stories.length)
  }

  const prevStory = () => {
    setActiveStory((prev) => (prev - 1 + stories.length) % stories.length)
  }

  const toggleSectionExpansion = (index) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#efffef] via-[#f7fff7] to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 py-24">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center gap-3">
              <div className="w-6 h-[1px] bg-black"></div>
              <span className="text-sm tracking-wider font-medium">OUR STORIES</span>
              <div className="w-6 h-[1px] bg-black"></div>
            </div>
            <h1 className="text-[48px] font-bold leading-tight bg-gradient-to-r from-[#26B947] to-[#546FFF] bg-clip-text text-transparent">
              Lives Transformed, Stories Shared
            </h1>
            <p className="text-gray-600 leading-relaxed text-lg max-w-[720px] mx-auto">
              Every resident at Shivner Pratishthan has a unique story to tell. These stories of resilience, joy, and new beginnings inspire us every day. Dive into our collection of heartwarming narratives and vibrant moments.
            </p>
          </div>
        </div>
      </section>

      {/* Stories Carousel */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 p-8"
            >
              <div className="space-y-6">
                <img 
                  src={stories[activeStory].image} 
                  alt={stories[activeStory].name} 
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold">{stories[activeStory].name}</h3>
                    <p className="text-gray-600">{stories[activeStory].age} years young</p>
                  </div>
                  <button 
                    onClick={() => setIsLiked(!isLiked)}
                    className={`p-2 rounded-full transition-colors duration-300 ${isLiked ? 'bg-red-100' : 'bg-gray-100'}`}
                  >
                    <FaHeart className={`text-2xl ${isLiked ? 'text-red-500' : 'text-gray-400'}`} />
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="space-y-6">
                  <FaQuoteLeft className="text-4xl text-[#26B947]" />
                  <h2 className="text-3xl font-bold italic">"{stories[activeStory].quote}"</h2>
                  <p className="text-gray-600 leading-relaxed">{stories[activeStory].story}</p>
                </div>
                <div className="flex justify-between items-center mt-8">
                  <button 
                    onClick={prevStory}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                  >
                    <FaArrowLeft className="text-xl text-gray-600" />
                  </button>
                  <div className="flex gap-2">
                    {stories.map((_, index) => (
                      <div 
                        key={index} 
                        className={`w-3 h-3 rounded-full ${index === activeStory ? 'bg-[#26B947]' : 'bg-gray-300'}`}
                      ></div>
                    ))}
                  </div>
                  <button 
                    onClick={nextStory}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                  >
                    <FaArrowRight className="text-xl text-gray-600" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Photo Sections */}
      {sections.map((section, index) => (
        <section key={index} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-[#f0fff0]'}`}>
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
            <p className="text-gray-600 mb-8">{section.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {section.images.map((image, imgIndex) => (
                <motion.div
                  key={imgIndex}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-lg overflow-hidden shadow-md"
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-48 object-cover"
                  />
                  <p className="p-4 text-sm text-gray-600">{image.alt}</p>
                </motion.div>
              ))}
            </div>
            {section.extraImages && (
              <div className="mt-8">
                <button
                  onClick={() => toggleSectionExpansion(index)}
                  className="flex items-center text-[#26B947] hover:text-[#1f9939] transition-colors"
                >
                  {expandedSections[index] ? 'See Less' : 'See More'}
                  <FaChevronDown className={`ml-2 transform transition-transform ${expandedSections[index] ? 'rotate-180' : ''}`} />
                </button>
                {expandedSections[index] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
                  >
                    {section.extraImages.map((image, imgIndex) => (
                      <motion.div
                        key={imgIndex}
                        whileHover={{ scale: 1.05 }}
                        className="rounded-lg overflow-hidden shadow-md"
                      >
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-48 object-cover"
                        />
                        <p className="p-4 text-sm text-gray-600">{image.alt}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="max-w-[800px] mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-6">Be Part of Our Story</h2>
        <p className="text-gray-600 mb-8">
          Your support can help create more heartwarming stories and joyful moments for our residents. Join us in making a difference in their lives.
        </p>
        <a 
          href="/donate" 
          className="inline-flex items-center gap-2 bg-[#26B947] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all hover:gap-4"
        >
          Donate Now
          <FaArrowRight />
        </a>
      </section>
    </main>
  )
}

export default StoriesPage

