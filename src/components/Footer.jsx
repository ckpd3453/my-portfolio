// Footer.jsx
import React from 'react';
import { personal } from '../data/PortfolioData.jsx';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      id="footer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-8 text-center"
    >
      <div className="bg-white/60 dark:bg-gray-900/60 rounded-2xl p-6 shadow-lg border border-white/20 backdrop-blur-md max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-sm text-gray-700 dark:text-gray-300"
        >
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold bg-gradient-to-r from-indigo-500 to-sky-400 bg-clip-text text-transparent">
            {personal.name}
          </span>{" "}
          — Built with{" "}
          <span className="text-pink-500 dark:text-pink-400 font-semibold">
            React
          </span>
          ,{" "}
          <span className="text-sky-500 dark:text-sky-400 font-semibold">
            Tailwind
          </span>{" "}
          &{" "}
          <span className="text-yellow-500 dark:text-yellow-400 font-semibold">
            Framer Motion
          </span>
        </motion.p>

        <motion.div
          className="mt-4 text-xs text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Designed with ❤️ by Chandrakant Prasad
        </motion.div>
      </div>
    </motion.footer>
  );
}
