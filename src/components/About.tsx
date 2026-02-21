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
                    {/* Left Side: Bold Statement */}
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white/90">
                            “I turn <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">logic</span> into scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">AI systems.</span>”
                        </h2>
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-2xl -z-10 rounded-full w-full h-full opacity-50" />
                    </div>

                    {/* Right Side: Description */}
                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                        <p>
                            My focus lies at the intersection of robust software engineering and emerging artificial intelligence. I build high-performance backend systems, optimize data pipelines, and develop GenAI-driven applications that solve complex problems at scale.
                        </p>
                        <p>
                            With a solid foundation in Data Structures and Algorithms, I approach architecture with a mindset of efficiency and sustainability. Whether I am deploying microservices, configuring cloud infrastructures, or implementing intelligent reasoning models, my goal is always to deliver clean, maintainable, and highly effective solutions.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
