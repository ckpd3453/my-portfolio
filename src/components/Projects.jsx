// Projects.jsx
import React from 'react';
import { projects } from '../data/PortfolioData.jsx';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="mb-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-white/60 dark:bg-gray-900/60 rounded-2xl p-8 shadow-lg border border-white/20 backdrop-blur-md">
        <h2 className="font-bold text-3xl mb-6 text-gray-800 dark:text-yellow-300 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-gradient-to-tr from-indigo-50 to-sky-50 dark:from-gray-800 dark:to-gray-900 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                {p.name}
              </h3>
              <p className="text-xs text-slate-600 dark:text-gray-400 italic">
                {p.tech}
              </p>
              <p className="text-sm mt-3 text-slate-700 dark:text-gray-300 leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
