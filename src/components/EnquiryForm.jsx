// EnquiryForm.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { useTheme } from '../context/ThemeContext';
import { Send } from 'lucide-react';
import emailjs from 'emailjs-com';

export default function EnquiryForm() {
    const { theme } = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            toast.error('⚠️ Please fill all fields.');
            return;
        }

        // Replace these values with your own EmailJS credentials
        const serviceID = 'service_jq1xfx8';
        const templateID = 'template_yqpb1h5';
        const publicKey = 'jHKPK6C3jq3s3QBMb';

        const templateParams = {
            from_name: formData.name,
            reply_to: formData.email,
            message: formData.message,
            subject: `New enquiry from ${formData.name}`
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then(() => {
                toast.success('📩 Enquiry sent successfully!', {
                    style: {
                        borderRadius: '12px',
                        background: theme === 'dark' ? '#1f2937' : '#f9fafb',
                        color: theme === 'dark' ? '#f9fafb' : '#111827',
                    },
                    iconTheme: {
                        primary: theme === 'dark' ? '#38bdf8' : '#4f46e5',
                        secondary: '#fff',
                    },
                });

                setFormData({ name: '', email: '', message: '' });
            })
            .catch(() => {
                toast.error('❌ Failed to send. Please try again later.');
            });
    };

    return (
        <motion.section
            id="enquiry"
            className="my-20 max-w-xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <Toaster position="bottom-center" />

            <h2 className="text-2xl font-bold mb-6 text-white dark:text-yellow-300">
                Get in Touch ✉️
            </h2>

            <form
                onSubmit={handleSubmit}
                className="bg-white/10 dark:bg-gray-900/50 p-8 rounded-2xl shadow-lg backdrop-blur-md border border-white/20"
            >
                <div className="mb-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                </div>

                <div className="mb-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                </div>

                <div className="mb-6">
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                </div>

                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                        boxShadow: [
                            '0 0 10px rgba(99,102,241,0.4)',
                            '0 0 20px rgba(56,189,248,0.6)',
                            '0 0 10px rgba(99,102,241,0.4)',
                        ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="inline-flex items-center gap-2 px-5 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-indigo-500 to-sky-400 hover:from-sky-500 hover:to-indigo-500 transition"
                >
                    <Send size={18} />
                    Send Enquiry
                </motion.button>
            </form>
        </motion.section>
    );
}
