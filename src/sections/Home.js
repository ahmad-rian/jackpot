import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';

function Home() {
  return (
    <Parallax
      // // bgImage="/img/shoe-background.jpg"
      // strength={500}
      // className="min-h-screen flex items-center justify-center relative"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="text-center z-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 text-white"
        >
          JACKPOTT'S
        </motion.h1>
        <motion.span 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="block text-6xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text mb-4"
        >
          2024
        </motion.span>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg sm:text-xl mb-8 text-gray-200 max-w-2xl mx-auto"
        >
          Elevating shoe care with cutting-edge techniques and premium services.
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="services" smooth={true} duration={500}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Services
            </motion.button>
          </Link>
          <Link to="about" smooth={true} duration={500}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              About Us
            </motion.button>
          </Link>
          <motion.a
            href="https://www.instagram.com/_jackpotts"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Follow Us on Instagram
          </motion.a>
        </div>
      </div>
    </Parallax>
  );
}

export default Home;