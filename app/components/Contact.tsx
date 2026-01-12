"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-24 bg-white"
    >
      <motion.h2
        className="text-4xl font-bold mb-6 relative after:block after:w-24 after:h-1 after:bg-violet-500 after:mx-auto after:mt-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Contact
      </motion.h2>

      <motion.p
        className="text-lg text-gray-600 mb-10 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        I’m open to software engineering opportunities and meaningful
        collaborations.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <a
          href="mailto:panoskamaja@outlook.com"
          className="px-6 py-3 rounded-xl border border-violet-500 text-violet-600 hover:bg-violet-50 transition-all"
        >
          Email
        </a>

        <a
          href="https://www.linkedin.com/in/maja-panoska/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl border border-emerald-500 text-emerald-600 hover:bg-emerald-50 transition-all"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/majaxpan"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl border border-gray-400 text-gray-700 hover:bg-gray-100 transition-all"
        >
          GitHub
        </a>
      </motion.div>

      <p className="mt-8 text-sm text-gray-400">
        All links open in a new tab.
      </p>
    </section>
  );
}
