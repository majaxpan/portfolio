"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen px-6 py-24 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12 relative after:block after:w-24 after:h-1 after:bg-emerald-500 after:mx-auto after:mt-2">
        Experience
      </h2>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line in the middle */}
        <div className="absolute left-5 top-0 w-1 h-full bg-gray-200"></div>

        {/* SEPA Experience */}
        <motion.div
          className="relative flex mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Dot */}
          <div className="absolute left-0 top-3 w-6 h-6 bg-violet-500 rounded-full border-2 border-white"></div>

          {/* Card */}
          <div className="ml-12 bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl border-l-4 border-violet-500 transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-2">
              Product Specialist (Technical)
            </h3>

            <p className="text-sm text-gray-500 mb-3">
              National SEPA Payment System · 2025
            </p>

            <p className="text-gray-700 mb-4">
              Worked on the implementation and maintenance of a national-scale
              SEPA payment system integrated into an existing foreign currency
              payments platform, used by the national bank and multiple commercial
              banks.
            </p>

            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>💻 Participated in system analysis, integration, and implementation of SEPA payment flows</li>
              <li>Performed manual testing, client-side testing with banks, and validation under regulatory constraints</li>
              <li>Wrote and corrected SQL procedures to support system behavior and resolve inconsistencies</li>
              <li>Configured and parameterized SEPA message formats for different banks</li>
              <li>Prepared technical documentation and held presentations for clients and internal teams</li>
              <li>Collaborated closely with architects, developers, and external teams in a production environment</li>
            </ul>
          </div>
        </motion.div>

        {/* Intern Experience */}
        <motion.div
          className="relative flex mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Dot */}
          <div className="absolute left-0 top-3 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white"></div>

          {/* Card */}
          <div className="ml-12 bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl border-l-4 border-emerald-500 transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-2">
              Software Engineering Intern
            </h3>

            <p className="text-sm text-gray-500 mb-3">
              University Internship · 3 months
            </p>

            <p className="text-gray-700 mb-4">
              Participated in the development of a student attendance management
              system as part of a small engineering team, working on both
              implementation and testing.
            </p>

            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Contributed to backend and frontend features under mentorship</li>
              <li>Gained experience working in a team-based development environment</li>
              <li>Participated in testing, debugging, and iterative improvements</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
