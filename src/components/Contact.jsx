import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { personal } from '../data/PortfolioData.jsx';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mb-20 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-white/60 dark:bg-gray-900/60 rounded-2xl p-8 shadow-lg border border-white/20 backdrop-blur-md w-full">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-3xl mb-8 text-gray-800 dark:text-yellow-300"
        >
          Get In Touch ✨
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch w-full">
          {/* Email */}
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 25px rgba(99,102,241,0.6)',
            }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="flex items-center gap-4 flex-1 bg-gradient-to-r from-indigo-500 via-sky-400 to-cyan-400 text-white rounded-2xl px-6 py-4 shadow-md hover:shadow-2xl"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Mail size={24} className="text-white drop-shadow" />
            </motion.div>
            <a
              href={`mailto:${personal.email}`}
              className="text-sm md:text-base font-medium underline hover:text-yellow-200 transition"
            >
              {personal.email}
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 25px rgba(168,85,247,0.6)',
            }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="flex items-center gap-4 flex-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-400 text-white rounded-2xl px-6 py-4 shadow-md hover:shadow-2xl"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            >
              <Phone size={24} className="text-white drop-shadow" />
            </motion.div>
            <span className="text-sm md:text-base font-medium">{personal.phone}</span>
          </motion.div>

          {/* Location */}
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 25px rgba(16,185,129,0.6)',
            }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="flex items-center gap-4 flex-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-400 text-white rounded-2xl px-6 py-4 shadow-md hover:shadow-2xl"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
            >
              <MapPin size={24} className="text-white drop-shadow" />
            </motion.div>
            <span className="text-sm md:text-base font-medium">{personal.location}</span>
          </motion.div>
        </div>

        <p className="mt-8 text-sm text-slate-600 dark:text-gray-400">
          I’d love to collaborate and create something amazing together 💫
        </p>
      </div>
    </motion.section>
  );
}
