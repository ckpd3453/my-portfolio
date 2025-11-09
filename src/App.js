import React from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import { Toaster } from "react-hot-toast";

export default function App() {
  const [text] = useTypewriter({
    words: [
      "Java Backend Developer 💻",
      "Spring Boot Enthusiast 🌿",
      "PostgreSQL Explorer 🧠",
      "Software Innovator 🚀",
    ],
    loop: {},
    delaySpeed: 1500,
  });

  return (
    <div className="bg-gradient-to-tr from-purple-600 via-blue-500 to-pink-400 dark:from-gray-900 dark:via-gray-800 dark:to-black min-h-screen text-white font-sans transition-colors duration-500">
      <Header />

      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto px-6 py-12"
      >
        <section className="relative text-center mb-20 py-20 overflow-hidden rounded-3xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 shadow-2xl">
          {/* Floating emojis / icons for motion background */}
          {["💻", "☕", "⚡", "🚀", "🎯", "🧠"].map((icon, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl opacity-40 select-none"
              style={{
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 90}%`,
              }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {icon}
            </motion.div>
          ))}

          {/* Subtle glowing overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-0"
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Hero Text */}
          <div className="relative z-10">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400 drop-shadow-lg"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              Hi, I’m Chandrakant Prasad 👋
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              I’m a{" "}
              <span className="font-semibold text-yellow-300">{text}</span>
              <Cursor />
            </motion.h2>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-8 px-8 py-3 bg-white text-purple-700 dark:bg-gray-800 dark:text-yellow-400 rounded-full font-semibold text-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all duration-300 shadow-lg"
            >
              Let’s Connect 🚀
            </motion.a>
          </div>
        </section>

        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </motion.main>
      <Toaster position="top-right" toastOptions={{ duration: 2500 }} />

      <footer className="text-center text-white/70 py-6 mt-16 border-t border-white/20">
        <Footer />
      </footer>
    </div>
  );
}
