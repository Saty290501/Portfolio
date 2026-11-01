"use client";

import { motion } from 'framer-motion';

const experience = [
    {
        company: "Oracle Financial Services",
        location: "Pune, India",
        role: "Technical Analyst — Oracle Banking Support",
        period: "Approximately 3 years",
        points: [
            "Supported Oracle FLEXCUBE Universal Banking and Oracle Banking Payments across implementation and production-support workflows.",
            "Investigated End-of-Day processing failures and batch aborts by analysing spools, application logs, debug traces, SQL results, and Unix/Linux scripts.",
            "Troubleshot banking issues involving transaction processing, accounting entries, account balances, and Interest & Charges scenarios.",
            "Worked with service integrations and coordinated with site teams and product engineering groups to isolate and resolve complex issues."
        ]
    }
];

const projects = [
    {
        title: "Hybrid Retrieval RAG Assistant",
        tech: "Python, LangChain, FAISS, BM25, Ollama, Streamlit",
        period: "Personal / applied learning project",
        points: [
            "Built a local retrieval-augmented question-answering workflow over historical support records and a playbook of error-code scenarios.",
            "Combined dense FAISS retrieval with BM25 keyword search and Reciprocal Rank Fusion to improve retrieval coverage.",
            "Explored Maximal Marginal Relevance (MMR) for result diversity and used an Ollama-hosted language model for local answer generation.",
            "Created a Streamlit chat interface for asking questions over the knowledge base."
        ]
    },
    {
        title: "NN2LLM — Neural Networks to Large Language Models",
        tech: "Python, NumPy, Computational Graphs, Autograd",
        period: "Ongoing learning project",
        points: [
            "Implementing core deep learning ideas from first principles, including value objects, computational graphs, and automatic differentiation.",
            "Adding unit tests for graph operations and gradient calculations while documenting the concepts step by step.",
            "Following a learning path from backpropagation and multilayer perceptrons toward tokenization, attention, transformers, and LLM inference."
        ]
    },
    {
        title: "Brain Tumor Detection & Classification",
        tech: "Python, Deep Learning, CNN, VGG16",
        period: "2023",
        points: [
            "Worked on an image-classification project using a VGG16-based convolutional neural network to identify brain-tumor categories from medical images.",
            "Focused on the deep-learning workflow, image data preparation, model training, and classification."
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
            <div className="absolute left-[-5px] top-2 w-[11px] h-[11px] rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)] md:hidden" />

            <div className="md:col-span-1 mb-4 md:mb-0 relative py-2">
                <div className="hidden md:block absolute right-[-21px] top-4 w-[11px] h-[11px] rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)] z-10" />
                <div className="hidden md:block absolute right-[-16px] top-0 bottom-[-3rem] w-[1px] bg-white/10" />
                <div className="text-sm text-gray-400 font-medium tracking-wide font-mono">{item.period}</div>
                <div className="mt-2 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 w-fit">
                    {item.company || item.tech}
                </div>
                {item.location && <div className="mt-2 text-xs text-gray-500">{item.location}</div>}
            </div>

            <div className="md:col-span-3 bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 hover:bg-white/[0.03] transition-colors duration-300">
                <h3 className="text-xl font-bold text-white mb-4">{item.role || item.title}</h3>
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
                        {experience.map((exp, index) => <CardItem key={index} item={exp} index={index} />)}
                    </div>

                    <div>
                        <h3 className="text-xl text-white/80 font-semibold mb-8 pl-4 border-l-2 border-blue-500">Selected Projects</h3>
                        {projects.map((project, index) => <CardItem key={index} item={project} index={index} />)}
                    </div>
                </div>
            </div>
        </section>
    );
}
