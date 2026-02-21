"use client";

import { motion } from 'framer-motion';

const education = [
    {
        institution: "Vishwakarma Institute of Technology, Pune",
        university: "Savitribai Phule Pune University",
        degree: "B.Tech in Computer Engineering",
        date: "May 2023",
        score: "CGPA: 9.13"
    },
    {
        institution: "K.K. Wagh Polytechnic, Nashik",
        university: "",
        degree: "Diploma in Computer Technology",
        date: "Jul 2020",
        score: "Percentage: 95.26"
    }
];

export default function Education() {
    return (
        <section id="education" className="py-24 bg-[#0f0f14]/80 border-t border-white/[0.02]">
            <div className="max-w-5xl mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tight flex items-center gap-4">
                        <span className="w-8 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 hidden sm:block"></span>
                        Education
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.05] relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                            </div>

                            <div className="text-sm font-mono text-purple-400 mb-2">{edu.date}</div>
                            <h3 className="text-xl font-bold text-white/90 mb-1">{edu.degree}</h3>
                            <div className="text-base text-gray-300 font-medium mb-1">{edu.institution}</div>
                            {edu.university && <div className="text-sm text-gray-500 mb-4">{edu.university}</div>}

                            <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20">
                                {edu.score}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
