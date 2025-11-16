// Header.jsx
import React, { useState } from 'react';
import { Github, Linkedin, Sun, Moon, FileDown, Mail } from 'lucide-react';
import { personal } from '../data/PortfolioData.jsx';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import toast, { Toaster } from 'react-hot-toast';
import confetti from 'canvas-confetti';
import EnquiryModal from './EnquiryModal'; // 👈 Import Enquiry Modal

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const [showModal, setShowModal] = useState(false);

    const triggerConfetti = () => {
        const duration = 1.5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };
        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(() => {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);
            const particleCount = 50 * (timeLeft / duration);
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 },
                colors: ['#6366f1', '#38bdf8', '#facc15', '#ef4444', '#10b981'],
            });
        }, 250);
    };

    const handleDownload = () => {
        triggerConfetti();
        toast.success('📄 Resume downloaded successfully!', {
            style: {
                borderRadius: '12px',
                background: theme === 'dark' ? '#1f2937' : '#f9fafb',
                color: theme === 'dark' ? '#f9fafb' : '#111827',
                boxShadow:
                    theme === 'dark'
                        ? '0 0 20px rgba(56,189,248,0.5)'
                        : '0 0 20px rgba(99,102,241,0.3)',
            },
            iconTheme: {
                primary: theme === 'dark' ? '#38bdf8' : '#4f46e5',
                secondary: '#fff',
            },
            position: 'bottom-center',
            duration: 3000,
        });
    };

    return (
        <motion.section
            id="about"
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <Toaster position="bottom-center" />
            {/* 👇 Enquiry Modal Component */}
            <EnquiryModal showModal={showModal} setShowModal={setShowModal} />

            <header className="flex flex-wrap items-center gap-6 p-6 bg-white/10 dark:bg-gray-900/40 rounded-2xl shadow-lg backdrop-blur-md border border-white/20">
                {/* Logo / Initials */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500 to-sky-400 flex items-center justify-center shadow-lg">
                    <div className="text-xl font-extrabold text-white">CP</div>
                </div>

                {/* Name & Info */}
                <div className="text-left">
                    <h1 className="text-2xl font-bold text-white dark:text-yellow-300">
                        {personal.name}
                    </h1>
                    <p className="text-sm text-slate-200 dark:text-gray-400">
                        {personal.title} • {personal.location}
                    </p>
                </div>

                {/* Right Side Buttons */}
                <div className="ml-auto flex items-center gap-4 flex-wrap">
                    <a
                        href={personal.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform text-white/80 hover:text-white"
                    >
                        <Github size={22} />
                    </a>

                    <a
                        href={personal.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform text-white/80 hover:text-white"
                    >
                        <Linkedin size={22} />
                    </a>

                    {/* ✨ Download Resume */}
                    <motion.a
                        href="/crio_ckpd_resume.pdf.pdf"
                        download="Chandrakant_Prasad_Resume.pdf"
                        onClick={handleDownload}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                            boxShadow: [
                                '0 0 10px rgba(99,102,241,0.4)',
                                '0 0 20px rgba(56,189,248,0.6)',
                                '0 0 10px rgba(99,102,241,0.4)',
                            ],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="relative inline-flex items-center justify-center px-4 py-2 font-semibold text-white rounded-xl shadow-md bg-gradient-to-r from-indigo-500 to-sky-400 hover:from-sky-500 hover:to-indigo-500 transition-all duration-300"
                        title="Download Resume"
                    >
                        <FileDown size={18} className="mr-2" />
                        <span>Resume</span>
                    </motion.a>

                    {/* 💬 Contact Me (opens modal) */}
                    <motion.button
                        onClick={() => setShowModal(true)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                            boxShadow: [
                                '0 0 10px rgba(236,72,153,0.4)',
                                '0 0 20px rgba(244,114,182,0.6)',
                                '0 0 10px rgba(236,72,153,0.4)',
                            ],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="flex items-center gap-2 px-4 py-2 text-white font-semibold rounded-xl shadow-md bg-gradient-to-r from-pink-500 to-rose-400 hover:from-rose-500 hover:to-pink-500 transition-all duration-300"
                        title="Send an Enquiry"
                    >
                        <Mail size={18} />
                        Contact Me
                    </motion.button>

                    {/* 🌗 Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
                        title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    >
                        {theme === 'dark' ? (
                            <Sun size={20} className="text-yellow-300" />
                        ) : (
                            <Moon size={20} className="text-blue-500" />
                        )}
                    </button>
                </div>
            </header>
        </motion.section>
    );
}
