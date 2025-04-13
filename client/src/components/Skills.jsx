import React from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaHtml5, FaCss3Alt, FaJsSquare,
  FaNodeJs, FaPython, FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiPostgresql,
  SiAmazonwebservices, SiApacheairflow, SiApachespark,
  SiTensorflow, SiPytorch, SiOpenai,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Python", icon: <FaPython /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    category: "Data Engineering",
    items: [
      { name: "AWS", icon: <SiAmazonwebservices /> },
      { name: "Airflow", icon: <SiApacheairflow /> },
      { name: "Spark", icon: <SiApachespark /> },
      { name: "SQL", icon: <FaDatabase /> },
    ],
  },
  {
    category: "AI / ML / GenAI",
    items: [
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "OpenAI", icon: <SiOpenai /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-6 bg-white dark:bg-[#0f172a] transition-colors duration-500"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Tech Stack
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Tools and technologies I work with
        </p>
      </motion.div>

      <div className="flex overflow-x-auto gap-6 px-4 py-2 snap-x snap-mandatory scrollbar-hide">
        {skills.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="min-w-[280px] sm:min-w-[320px] bg-gray-100 dark:bg-slate-800 shadow-md rounded-xl p-6 snap-center flex-shrink-0"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              {group.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {group.items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center text-gray-700 dark:text-white hover:scale-110 transition-transform"
                >
                  <div className="text-3xl mb-1">{skill.icon}</div>
                  <span className="text-sm text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
