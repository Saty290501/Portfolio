"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-[#0f0f14]/80 border-t border-white/[0.02]">
            <div className="max-w-3xl mx-auto px-6 lg:px-12 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Let&apos;s Connect</h2>
                    <p className="text-gray-400 mb-8">
                        I&apos;m open to Machine Learning Engineer and AI Engineer opportunities, technical discussions, and collaborative projects.
                    </p>
                    <Link
                        href="https://github.com/Saty290501"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center px-8 py-3.5 font-medium text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all"
                    >
                        Connect on GitHub
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
