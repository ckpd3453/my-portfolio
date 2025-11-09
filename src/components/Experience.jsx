// Experience.jsx
import React from 'react';
import { experience } from '../data/PortfolioData.jsx';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="mb-20 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-white/60 dark:bg-gray-900/60 rounded-2xl p-8 shadow-lg border border-white/20 backdrop-blur-md ">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-3xl mb-6 text-gray-800 dark:text-yellow-300"
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-4">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="p-5 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 text-white shadow-md text-left"
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="font-semibold text-lg">{exp.role}</h3>
                  <p className="text-sm opacity-90">{exp.company}</p>
                </div>
                <p className="text-xs opacity-80">{exp.period}</p>
              </div>

              <ul className="list-disc list-inside text-sm opacity-95 mt-2 space-y-1">
                {exp.bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    {b}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
