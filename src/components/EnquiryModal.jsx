// EnquiryModal.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import EnquiryForm from './EnquiryForm';

export default function EnquiryModal({ showModal, setShowModal }) {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-br from-black/80 via-indigo-950/80 to-gray-900/90 backdrop-blur-md flex justify-center items-end md:items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: 200, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 200, opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, type: 'spring', damping: 20 }}
            className="relative bg-gradient-to-br from-indigo-950 via-gray-900 to-black text-white rounded-2xl p-8 w-[90%] max-w-lg shadow-2xl border border-indigo-400/50 mb-10 md:mb-0"
          >
            {/* Soft animated glow */}
            <motion.div
              className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-pink-500 blur-2xl opacity-25 -z-10"
              animate={{
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-300 hover:text-pink-400 transition"
              title="Close"
            >
              <X size={24} />
            </button>

            {/* Title */}
            <motion.h2
              className="text-3xl font-extrabold bg-gradient-to-r from-pink-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent text-center mb-3"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ✨ Let’s Connect
            </motion.h2>

            <motion.p
              className="text-base text-gray-200 text-center mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Have a question or want to collaborate? Fill the form below — I’ll reply soon 🚀
            </motion.p>

            {/* Slide-up form */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: 'spring', stiffness: 120 }}
            >
              <EnquiryForm />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
