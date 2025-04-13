// Navbar.jsx
import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <header className="sticky top-0 bg-white dark:bg-[#0f172a] shadow-md z-50 transition-colors duration-500">
      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
          Neuralfolio 🚀
        </h1>
        <div className="flex gap-6 items-center">
          {/* Add navigation links here if needed */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl text-gray-800 dark:text-white transition-colors duration-300"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
