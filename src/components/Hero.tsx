"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
    return (
        <section id="home" className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Subtle background gradient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-gray-300"
                >
                    Open to new opportunities
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                >
                    Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Riya Jagtap</span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-2xl md:text-3xl text-gray-300 font-medium mb-8"
                >
                    Software Engineer
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed mb-10"
                >
                    Software Engineer with 2+ years of experience in backend and cloud-native system development. Skilled in Python, C/C++, and Java, with hands-on experience across OCI Functions, containerized deployments, and automation pipelines. Currently exploring Generative AI, LLM-based applications, and prompt engineering to design intelligent, scalable solutions that merge reasoning and automation.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <Link
                        href="#work"
                        className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white transition-all duration-200 bg-[#0f0f14] border border-white/10 rounded-full hover:bg-white/5 overflow-hidden"
                    >
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                        <span className="relative z-10 hidden md:inline-block mr-2 group-hover:rotate-12 transition-transform">✨</span>
                        <span className="relative z-10">View Work</span>
                        <div className="absolute inset-0 h-full w-full rounded-full border border-purple-500/0 group-hover:border-purple-500/50 transition-all duration-300 shadow-[0_0_0_0_rgba(168,85,247,0)] group-hover:shadow-[0_0_20px_0_rgba(168,85,247,0.3)]"></div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
