"use client";

import { motion } from 'framer-motion';

const credentials = [
    "Data Analysis with Python — IBM",
    "Python (Basic) — HackerRank"
];

export default function Certifications() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Selected Credentials</h2>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4">
                    {credentials.map((credential, index) => (
                        <motion.div
                            key={credential}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -3 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-purple-500/30 hover:bg-white/[0.05] transition-all shadow-sm"
                        >
                            <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm md:text-base text-gray-300">{credential}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
