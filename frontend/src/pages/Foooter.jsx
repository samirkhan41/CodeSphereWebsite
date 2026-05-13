import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="relative pt-16 border-t border-slate-800 overflow-hidden bg-[#020617]">

            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                <div className="flex flex-col lg:flex-row justify-between gap-14 mb-14">

                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-sm"
                    >

                        <motion.h2
                            whileHover={{ scale: 1.05 }}
                            className="text-3xl font-black text-cyan-400 mb-5 cursor-pointer"
                        >
                            CODESPHERE
                        </motion.h2>

                        <p className="text-slate-400 leading-relaxed mb-8">
                            A futuristic coding community where developers learn,
                            build and grow together through projects, events and
                            innovation.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4">

                            {["📸", "🐙", "🎥", "💼"].map((icon, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{
                                        scale: 1.2,
                                        y: -5,
                                    }}
                                    className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xl cursor-pointer hover:bg-cyan-500 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                                >
                                    {icon}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-14">

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >

                            <h3 className="text-white font-bold text-lg mb-6">
                                Quick Links
                            </h3>

                            <ul className="flex flex-col gap-4 text-slate-400">

                                {["Home", "Projects", "Events", "About"].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        whileHover={{ x: 10 }}
                                        className="cursor-pointer hover:text-cyan-400 transition-all duration-300"
                                    >
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Resources */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >

                            <h3 className="text-white font-bold text-lg mb-6">
                                Resources
                            </h3>

                            <ul className="flex flex-col gap-4 text-slate-400">

                                {["Docs", "Blog", "Community", "Support"].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        whileHover={{ x: 10 }}
                                        className="cursor-pointer hover:text-cyan-400 transition-all duration-300"
                                    >
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className="w-full lg:max-w-sm"
                    >

                        <h3 className="text-white font-bold text-lg mb-6">
                            Stay Connected
                        </h3>

                        <p className="text-slate-400 mb-6">
                            Subscribe to get updates about events, projects and
                            coding resources.
                        </p>

                        <div className="flex bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.1)]">

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent px-5 py-4 flex-1 outline-none text-sm text-white"
                            />

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 font-bold transition-all duration-300"
                            >
                                ➜
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="border-t border-slate-800 py-6 flex flex-col md:flex-row items-center justify-between gap-4"
                >

                    <p className="text-slate-500 text-sm text-center">
                        © 2026 CodeSphere • Crafted & Built with ❤️ by {" "}
                        <span className="text-cyan-400 font-semibold text-2xl">
                            Samir Khan
                        </span>
                    </p>

                    <div className="flex gap-6 text-sm text-slate-500">

                        {["Privacy", "Terms", "Security"].map((item, i) => (
                            <motion.span
                                key={i}
                                whileHover={{ y: -3 }}
                                className="cursor-pointer hover:text-cyan-400 transition-all duration-300"
                            >
                                {item}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer