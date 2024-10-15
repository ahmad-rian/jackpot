import React from 'react';
import { motion } from 'framer-motion';

function Express() {
  const rates = [
    { duration: '3 Hours', low: '35k', high: '40k', icon: '⚡' },
    { duration: '6 Hours', low: '30k', high: '35k', icon: '⏱️' },
    { duration: '1 Day', low: '25k', high: '30k', icon: '📅' },
  ];

  return (
    <section id="express" className="py-20 px-4">
      <motion.h2 
        className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        EXPRESS SERVICES
      </motion.h2>
      <motion.div 
        className="glassmorphism p-8 rounded-lg shadow-2xl overflow-hidden relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rates.map((rate, index) => (
            <motion.div 
              key={index}
              className="text-center p-6 bg-gray-800 bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="text-5xl mb-4"
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 360 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "anticipate" }}
              >
                {rate.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text">{rate.duration}</h3>
              <p className="text-lg">Low Shoe: <span className="text-orange-400 font-semibold">{rate.low}</span></p>
              <p className="text-lg">High Shoe: <span className="text-pink-400 font-semibold">{rate.high}</span></p>
            </motion.div>
          ))}
        </div>
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </motion.div>
    </section>
  );
}

export default Express;