import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#0f172a] text-gray-700 dark:text-gray-300 py-6 px-4 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/vishnuchappidi" // <-- replace with your actual GitHub
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/vishnuchappidi" // <-- replace with your actual LinkedIn
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="mailto:vishnuvardhan.chappidi27@gmail.com"
          className="hover:text-indigo-500 transition"
        >
          <FaEnvelope size={24} />
        </a>
      </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} Vishnuvardhan Chappidi. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
