"use client";

import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "Programming & Frameworks",
        skills: "Python, Java, C/C++, FastAPI, LangChain, REST APIs, Microservices",
        icon: (
            <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        )
    },
    {
        category: "AI & Machine Learning",
        skills: "Generative AI, Large Language Models (OpenAI, Gemini, Cohere), Prompt Engineering, Model Context Protocol (MCP) Concepts, Neural Networks, NLP, TensorFlow",
        icon: (
            <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    },
    {
        category: "Cloud & MLOps",
        skills: "Familiar with OCI Functions, Docker, Kubernetes, Jenkins, Git, CI/CD pipelines, and serverless deployment concepts.",
        icon: (
            <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
        )
    },
    {
        category: "Data & Databases",
        skills: "MySQL, MongoDB, Data Extraction & Processing",
        icon: (
            <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
        )
    },
    {
        category: "OS",
        skills: "Linux, Unix",
        icon: (
            <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-[#0f0f14]/50 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-4 flex items-center gap-4">
                        <span className="w-8 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 hidden sm:block"></span>
                        Skills & Technologies
                    </h2>
                    <p className="text-gray-400 max-w-2xl">A comprehensive overview of my technical expertise, spanning software development, artificial intelligence, and scalable infrastructure.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillsData.map((item, index) => (
                        <motion.div
                            key={item.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-all duration-300 flex flex-col h-full z-10 overflow-hidden"
                        >
                            {/* Subtle hover glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                            <div className="mb-6 p-3 bg-white/5 rounded-xl inline-block w-fit group-hover:-translate-y-1 transition-transform duration-300">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-semibold text-white/90 mb-4">{item.category}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                                {item.skills}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
