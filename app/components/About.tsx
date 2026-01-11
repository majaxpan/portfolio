"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-24 bg-gray-50"
    >
      <h2 className="text-4xl font-bold mb-6 relative after:block after:w-24 after:h-1 after:bg-emerald-500 after:mx-auto after:mt-2">
        About Me
      </h2>

      <motion.p
        className="text-lg text-gray-600 max-w-2xl mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        I’m a software engineer who enjoys building technically solid,
        well-structured systems and learning continuously through both work and
        personal projects.
      </motion.p>

      <motion.p
        className="text-lg text-gray-600 max-w-2xl mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Over the past year, I contributed to national-scale production systems,
        including the SEPA payment infrastructure used by multiple banks,
        gaining hands-on experience in complex, real-world software development.
      </motion.p>

      <motion.p
        className="text-lg text-gray-600 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Outside of work, I explore creative technologies like game development
        to expand my problem-solving skills and enjoy building things that are
        both playful and meaningful.
      </motion.p>
    </section>
  );
}
