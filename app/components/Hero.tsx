"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 text-white relative"
      style={{
        background:
          "linear-gradient(135deg, rgba(16,185,129,0.9) 20%, rgba(139,92,246,0.9) 100%)",
      }}
    >
      {/* Heading animation */}
      <motion.h1
        className="text-5xl font-extrabold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Maja
      </motion.h1>

      {/* Subtitle animation */}
      <motion.p
        className="text-lg mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Software Engineer
      </motion.p>

      {/* Description animation */}
      <motion.p
        className="text-xl max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        I enjoy building well-planned, technically solid software — and
        exploring creative ideas through side projects.
      </motion.p>

      {/* Experience animation */}
      <motion.p
        className="mt-6 text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Experience working on real-world production systems, including
        national-scale financial infrastructure.
      </motion.p>

      {/* Scroll down arrow with fade + bounce */}
      <motion.div
        className="absolute bottom-6"
        animate={{ y: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a href="#about" className="text-white text-3xl">
          ↓
        </a>
      </motion.div>
    </section>
  );
}
