// About.jsx
import React from 'react';
import { personal, skills } from '../data/PortfolioData.jsx';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="mb-20 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-white/60 dark:bg-gray-900/60 rounded-2xl p-8 shadow-lg border border-white/20 backdrop-blur-md">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-3xl mb-6 text-gray-800 dark:text-yellow-300"
        >
          About Me
        </motion.h2>

        {/* Bio Section */}
        <p className="text-base text-slate-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
          {personal.bio}
        </p>

        {/* Skills Section */}
        <div className="mt-8">
          <h3 className="font-semibold text-lg mb-3 text-gray-800 dark:text-gray-100">
            Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((s, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                className="text-sm px-4 py-1.5 rounded-full bg-gradient-to-tr from-indigo-500 to-sky-400 text-white font-medium shadow-md hover:shadow-lg transition"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
