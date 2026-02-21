"use client";

import { motion } from 'framer-motion';

const experience = [
    {
        company: "Oracle",
        location: "Pune",
        role: "Associate Consultant",
        period: "July 2023 – Present",
        type: "Professional Experience",
        points: [
            "Developed Java-based data extraction utilities for BRM and legacy systems, converting database records into XML payloads for downstream processing and migration, improving data reliability and migration accuracy by 30%.",
            "Extended Oracle BRM functionalities by developing C-based custom opcodes, automating client-specific business logic and reducing manual operational effort by 20%.",
            "Configured and automated event rerating pipelines using Shell and Groovy scripts integrated with OCOMC, improving rerate accuracy and reducing processing time by ~40%.",
            "Built reusable debugging and monitoring components for operational automation, improving traceability and reducing issue resolution time by 20%.",
            "Collaborated on OCI-based deployments and distributed mediation systems (OCOMC) to streamline data and event workflows, enhancing system stability and increasing batch throughput."
        ]
    }
];

const projects = [
    {
        title: "RAG-based GenAI Assistant",
        tech: "Python, LangChain, Vector Database, LLM, Cline, MCP",
        period: "Sept 2025 – Oct 2025",
        type: "Project Experience",
        points: [
            "Built a Retrieval-Augmented Generation (RAG) system for contextual document intelligence for BRM OCOMC component.",
            "Implemented prompt-engineered LLM workflows for context-aware reasoning aligned with GenAI agent architectures."
        ]
    },
    {
        title: "Suspicious Activity Detection",
        tech: "Deep Learning, Python, CNN + LRCN",
        period: "Oct 2022 – Jul 2023",
        type: "Project Experience",
        points: [
            "Designed a real-time video surveillance system for anomaly detection using deep learning.",
            "Achieved ~20% higher detection accuracy and reduced false alarms - improved security response time."
        ]
    }
];

const CardItem = ({ item, index }: { item: any; index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative pl-8 md:pl-0"
    >
        <div className="md:grid md:grid-cols-4 md:gap-8 border-l border-white/10 md:border-none ml-2 md:ml-0 pb-12">
            {/* Timeline dot for mobile */}
            <div className="absolute left-[-5px] top-2 w-[11px] h-[11px] rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)] md:hidden" />

            <div className="md:col-span-1 mb-4 md:mb-0 relative py-2">
                {/* Timeline dot for desktop */}
                <div className="hidden md:block absolute right-[-21px] top-4 w-[11px] h-[11px] rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)] z-10" />
                <div className="hidden md:block absolute right-[-16px] top-0 bottom-[-3rem] w-[1px] bg-white/10" />

                <div className="text-sm text-gray-400 font-medium tracking-wide font-mono">
                    {item.period}
                </div>
                <div className="mt-2 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 w-fit">
                    {item.company || item.tech}
                </div>
                {item.location && <div className="mt-2 text-xs text-gray-500">{item.location}</div>}
            </div>

            <div className="md:col-span-3 bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 hover:bg-white/[0.03] transition-colors duration-300">
                <h3 className="text-xl font-bold text-white mb-4">
                    {item.role || item.title}
                </h3>
                <ul className="space-y-3">
                    {item.points.map((point: string, i: number) => (
                        <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                            <span className="text-purple-500 mt-1 flex-shrink-0">▹</span>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </motion.div>
);

export default function WorkExperience() {
    return (
        <section id="work" className="py-24 relative">
            <div className="max-w-5xl mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-4 flex items-center gap-4">
                        <span className="w-8 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 hidden sm:block"></span>
                        Experience & Projects
                    </h2>
                </motion.div>

                <div className="space-y-20">
                    <div>
                        <h3 className="text-xl text-white/80 font-semibold mb-8 pl-4 border-l-2 border-purple-500">Professional Experience</h3>
                        <div className="md:relative">
                            {experience.map((exp, index) => (
                                <CardItem key={index} item={exp} index={index} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl text-white/80 font-semibold mb-8 pl-4 border-l-2 border-blue-500">Project Highlights</h3>
                        <div className="md:relative">
                            {projects.map((proj, index) => (
                                <CardItem key={index} item={proj} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
