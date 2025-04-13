import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-[#0f0c29] text-white px-6 py-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image or Avatar */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-48 h-48 rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl"
        >
          <img
            src="/ai-blob.png"
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center md:text-left space-y-4"
        >
          <h2 className="text-4xl font-bold text-indigo-400">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm <span className="font-semibold text-white">Vishnuvardhan Chappidi</span>, a passionate Full Stack & AI Engineer
            specializing in building intelligent, modern web apps powered by GenAI. I thrive at the intersection of
            clean code, creative UI, and machine learning.
          </p>
          <p className="text-gray-400">
            With hands-on expertise in React, Node.js, Python, and cloud platforms like AWS and GCP, I architect
            scalable systems and design beautiful interfaces. I’m currently exploring RAG, LLMs, and agentic AI frameworks to push the limits of automation and intelligence.
          </p>
          <p className="text-gray-500 text-sm italic">
            “Innovation is not about tools, it's about vision — and I'm building both.”
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
