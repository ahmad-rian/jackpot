import React from 'react';
import { motion } from 'framer-motion';

function Testimonials() {
  const services = [
    {
      title: 'Deep Clean',
      description: 'Professional deep clean service for your cherished footwear.',
      image: '/img/deep.jpeg',
    },
    {
      title: 'Express Clean',
      description: 'Professional express clean service for your cherished footwear.',
      image: '/img/express.jpeg',
    },
    {
      title: 'Repainting',
      description: 'Professional repainting service for your cherished footwear.',
      image: '/img/repaint.jpeg',
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 relative overflow-hidden">
      <motion.h2 
        className="text-6xl font-bold mb-12 text-center bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        TESTIMONI !!!
      </motion.h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text">{service.title}</h3>
            <p className="mb-4 text-gray-300 text-sm">{service.description}</p>
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;