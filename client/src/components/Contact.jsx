import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-white dark:bg-[#0f172a] transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Get in Touch</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Want to work together or just say hi? Feel free to drop a message.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4 text-gray-700 dark:text-white">
            <FaEnvelope className="text-xl" />
            <span>vishnuvardhan.chappidi27@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 text-gray-700 dark:text-white">
            <FaMapMarkerAlt className="text-xl" />
            <span>Fort Mill, South Carolina</span>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Send Message 🚀
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
