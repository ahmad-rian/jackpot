import React from 'react';
import { motion } from 'framer-motion';

function About() {
  const contactInfo = [
    { platform: 'Instagram', value: '@_jackpotts', link: 'https://instagram.com/_jackpotts', icon: '📸' },
    { platform: 'WhatsApp', value: '0812 7712 4640', link: 'https://wa.me/6281277124640', icon: '📱' },
    { platform: 'Email', value: 'contact@jackpotts.com', link: 'mailto:alriansr@gmail.com', icon: '✉️' },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <motion.h2 
        className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ABOUT US
      </motion.h2>
      <motion.div 
        className="glassmorphism p-8 rounded-lg shadow-2xl relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p 
          className="mb-8 text-center text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At <span className="font-bold bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text">JACKPOTT'S</span>, we believe that shoes are more than just footwear — they are
          an expression of your personality and style. As a premium shoe care service, our mission is to ensure that
          your shoes always look their best. Combining advanced techniques with premium materials, we are committed to
          preserving the quality and enhancing the aesthetics of every pair.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Our Mission', 'Our Vision', 'Contact Us'].map((title, index) => (
            <motion.div 
              key={index}
              className="text-center p-6 bg-gray-800 bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text">{title}</h3>
              {title === 'Our Mission' && (
                <p>To deliver top-tier shoe care services that not only extend the life of your favorite footwear but
                also rejuvenate their appearance, bringing back that fresh-out-of-the-box look.</p>
              )}
              {title === 'Our Vision' && (
                <p>We aim to redefine shoe care by combining craftsmanship and innovation, establishing JACKPOTT'S as
                the go-to brand for footwear enthusiasts who value quality and longevity.</p>
              )}
              {title === 'Contact Us' && (
                <div>
                  {contactInfo.map((info, idx) => (
                    <motion.a 
                      key={idx}
                      href={info.link}
                      className="block mb-2 hover:text-orange-400 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <span className="mr-2">{info.icon}</span>
                      {info.value}
                    </motion.a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </motion.div>
    </section>
  );
}

export default About;