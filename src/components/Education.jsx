import React from 'react';
import { academic } from '../data/PortfolioData.jsx';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <motion.section
      id="education"
      className="mb-20 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-white/60 dark:bg-gray-900/60 rounded-2xl p-8 shadow-lg border border-white/20 backdrop-blur-md w-full relative overflow-hidden">
        {/* Animated gradient glow behind */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-purple-600/10 blur-3xl animate-pulse" />

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative font-bold text-3xl mb-8 text-gray-800 dark:text-yellow-300"
        >
          Education 🎓
        </motion.h2>

        <div className="relative flex flex-col items-center before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:-translate-x-1/2 before:bg-gradient-to-b from-sky-400 via-indigo-500 to-purple-600 before:rounded-full">
          {academic.map((a, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className={`relative w-full md:w-3/4 lg:w-2/3 mb-10 p-6 rounded-2xl shadow-lg text-left backdrop-blur-sm bg-gradient-to-tr from-sky-500/80 via-indigo-500/80 to-purple-600/80 text-white border border-white/10 hover:shadow-2xl hover:shadow-sky-400/30`}
            >
              {/* Connector dot */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-5 h-5 rounded-full bg-gradient-to-tr from-indigo-400 to-sky-400 border-2 border-white shadow-lg" />

              {/* Icon and Degree */}
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap size={22} className="text-yellow-300 drop-shadow" />
                <h3 className="font-semibold text-lg md:text-xl">{a.degree}</h3>
              </div>

              {/* Institute and Year */}
              <p className="text-sm opacity-90">
                {a.institute} • <span className="font-medium">{a.year}</span>
              </p>

              {/* Description */}
              <p className="text-sm mt-3 leading-relaxed opacity-95">
                {a.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
