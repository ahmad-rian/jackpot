import React from 'react';
import { motion } from 'framer-motion';
import { FiShoppingBag, FiTool, FiRefreshCw, FiClock, FiAward, FiShield } from 'react-icons/fi';

const services = [
  { icon: FiShoppingBag, title: 'Low Shoes', description: 'upper, midsole, outsole, perfume', price: '20K' },
  { icon: FiTool, title: 'High Shoes', description: 'upper, midsole, outsole, insole, perfume', price: '25K' },
  { icon: FiRefreshCw, title: 'Low Leather Shoes', description: 'upper, midsole, outsole, insole, perfume, wax', price: '25K' },
  { icon: FiClock, title: 'High Leather Shoes', description: 'upper, midsole, outsole, insole, perfume, wax', price: '30K' },
  { icon: FiAward, title: 'Ransel', description: 'inside, outside, perfume', price: '25K' },
  { icon: FiShield, title: 'Cap', description: 'inside, outside, perfume', price: '10K' },
];

function Services() {
  return (
    <section id="services" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text">OUR SERVICES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glassmorphism p-6 rounded-lg"
          >
            <service.icon className="text-4xl mb-4 text-orange-400" />
            <h3 className="text-xl font-bold mb-2 text-orange-400">{service.title}</h3>
            <p className="text-sm mb-4 text-gray-300">{service.description}</p>
            <p className="text-2xl font-bold text-yellow-400">{service.price}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;