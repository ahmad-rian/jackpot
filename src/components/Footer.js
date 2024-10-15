import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Footer() {
  const socialLinks = [
    { icon: 'fab fa-instagram', url: 'https://www.instagram.com/_jackpotts?igsh=MTJjMDFwNDQ4MW0wcQ==' },
    { icon: 'fab fa-whatsapp', url: 'https://wa.me/6281277124640' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Testimoni', path: '/testimonials' },
    { name: 'Repainting', path: '/repainting' },
    { name: 'Express', path: '/express' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <footer className="glassmorphism mt-16 py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text">About JACKPOTT'S</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              JACKPOTT'S is your premium destination for top-notch shoe care. We're passionate about keeping your footwear looking fresh and stylish, using cutting-edge techniques and premium services.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li key={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link to={link.path} className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r from-orange-400 to-pink-500 hover:bg-clip-text transition duration-300">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text">Connect With Us</h3>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-pink-500 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={`${link.icon} fa-2x`}></i>
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-gray-300">Contact us: <a href="tel:+6281277124640" className="hover:text-transparent hover:bg-gradient-to-r from-orange-400 to-pink-500 hover:bg-clip-text transition duration-300">+62 812-7712-4640</a></p>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-gray-700 text-center"
        >
          <p className="text-sm text-gray-400">&copy; 2024 JACKPOTT'S Premium Shoe Care. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">
            Crafted with <i className="fas fa-heart text-transparent bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text animate-pulse"></i> in Indonesia
          </p>
        </motion.div>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-400/10 to-pink-500/10 filter blur-3xl"></div>
    </footer>
  );
}

export default Footer;