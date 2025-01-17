import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, User, LogOut, Heart, Briefcase, LayoutDashboard } from 'lucide-react'



const Navbar = ({ isAdmin = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/aboutus' },
    { name: 'Events', path: '/events' },
    { name: 'Stories', path: '/stories' },
    { name: 'Contact', path: '/contact' },
  ]

  const profileItems = [
    { name: 'Your Patient', icon: <Heart className="w-4 h-4" />, path: '/caregiverportal' },
    { name: 'View Volunteership', icon: <Briefcase className="w-4 h-4" />, path: '/volunteership' },
    ...(isAdmin ? [{ name: 'Admin Dashboard', icon: <LayoutDashboard className="w-4 h-4" />, path: '/admin' }] : []),
    { name: 'Sign Out', icon: <LogOut className="w-4 h-4" />, action: () => console.log('Sign out') },
  ]

  return (
    <nav className="fixed w-full z-50 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
  <img 
    src="\src\components\Images\Shivner.jpg" 
    alt="Shivner Pratishthan" 
    className="h-10 w-10"
  />
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                className="relative"
                initial={false}
              >
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-[#26B947]'
                      : 'text-gray-700 hover:text-[#26B947] hover:scale-105'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-green-50 rounded-lg shadow-[0_4px_8px_-2px_rgba(38,185,71,0.2)] z-[-1]"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <Link
              to="/donation"
              className="px-4 py-2 text-sm font-medium text-white bg-[#26B947] rounded-lg 
                         hover:bg-[#1f9939] transition-all duration-300 hover:shadow-lg 
                         hover:shadow-[#26B947]/20"
            >
              Donate
            </Link>
            <div className="relative">
              <motion.button
                onClick={toggleProfile}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-9 h-9 rounded-lg 
                           hover:bg-gray-100 transition-colors duration-300"
              >
                <User className="w-5 h-5 text-gray-600" />
              </motion.button>
              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg 
                             border border-gray-100 py-1 z-50"
                  >
                    {profileItems.map((item) => (
                      <motion.div
                        key={item.name}
                        whileHover={{ backgroundColor: '#f8f9fa' }}
                      >
                        <Link
                          to={item.path}
                          onClick={item.action}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 
                                   hover:text-[#26B947] transition-colors duration-200"
                        >
                          {item.icon}
                          <span className="ml-3">{item.name}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={toggleMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden inline-flex items-center justify-center p-2 
                     rounded-lg text-gray-500 hover:text-gray-600 
                     hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="block h-6 w-6" />
            ) : (
              <Menu className="block h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  className="relative"
                  initial={false}
                >
                  <Link
                    to={item.path}
                    className={`block px-3 py-2 text-base font-medium rounded-lg 
                              transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'text-[#26B947] bg-white shadow-[0_4px_8px_-2px_rgba(38,185,71,0.2)]'
                        : 'text-gray-700 hover:text-[#26B947] hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/donation"
                className="block px-3 py-2 text-base font-medium text-white 
                         bg-[#26B947] rounded-lg hover:bg-[#1f9939] 
                         transition-all duration-300 hover:shadow-lg 
                         hover:shadow-[#26B947]/20"
              >
                Donate
              </Link>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="px-2 space-y-1">
                {profileItems.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ backgroundColor: '#f8f9fa' }}
                  >
                    <Link
                      to={item.path}
                      onClick={item.action}
                      className="flex items-center px-3 py-2 text-base font-medium 
                               text-gray-700 hover:text-[#26B947] rounded-lg 
                               transition-colors duration-200"
                    >
                      {item.icon}
                      <span className="ml-3">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar

