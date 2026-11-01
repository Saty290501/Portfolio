"use client";

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
                >
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white/90">
                            From <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">data</span> to intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">systems.</span>
                        </h2>
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-2xl -z-10 rounded-full w-full h-full opacity-50" />
                    </div>

                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                        <p>
                            I&apos;m Satyen, a software engineer focused on machine learning, deep learning, and Generative AI. My professional background includes supporting enterprise banking systems at Oracle, where I worked with production workflows, SQL, logs, scripts, and service integrations.
                        </p>
                        <p>
                            I bring that engineering mindset into AI: understand the fundamentals, build reproducible experiments, evaluate results, and make systems useful beyond a demo. My current work includes a local hybrid-retrieval RAG assistant and NN2LLM, a first-principles learning project covering neural networks and language models.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
