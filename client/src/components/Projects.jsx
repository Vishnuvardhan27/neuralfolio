import React from "react";
import { motion } from "framer-motion";

const placeholderProjects = [
  {
    title: "AI-Powered Portfolio Chatbot",
    description:
      "A GenAI-powered assistant that answers questions about my experience, skills, and projects using RAG and LLMs.",
    tech: ["FastAPI", "LangChain", "Pinecone", "Hugging Face", "React"],
  },
  {
    title: "Medical Claim Fraud Detection",
    description:
      "A serverless AI pipeline for real-time fraud detection in healthcare claims using Bedrock, Lambda, and Glue.",
    tech: ["AWS", "SageMaker", "Glue", "Redshift", "Lambda"],
  },
  {
    title: "Next Project Placeholder",
    description:
      "More awesome projects are coming soon! Stay tuned for detailed breakdowns of my work in cloud, AI, and engineering.",
    tech: ["Coming Soon"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-gray-50 dark:bg-[#0f172a] transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Projects</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">A glimpse into my recent work</p>
      </motion.div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {placeholderProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-indigo-100 dark:bg-indigo-700 dark:text-white text-indigo-800 px-2 py-1 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
