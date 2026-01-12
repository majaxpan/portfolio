"use client";

import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaUserFriends } from "react-icons/fa";

export default function Skills() {
  const skillGroups = [
    {
      title: "Programming & Frameworks",
      icon: <FaCode className="w-6 h-6 text-violet-500" />,
      items: [
        "Java (Spring Boot)",
        "Python (Django)",
        "C# (.NET)",
        "C",
        "JavaScript / TypeScript",
        "React / Next.js",
      ],
      border: "border-violet-500",
    },
    {
      title: "Databases & Tools",
      icon: <FaDatabase className="w-6 h-6 text-emerald-500" />,
      items: [
        "PostgreSQL",
        "SQL",
        "REST APIs",
        "Git / GitHub",
      ],
      border: "border-emerald-500",
    },
    {
      title: "Working Style",
      icon: <FaUserFriends className="w-6 h-6 text-sky-500" />,
      items: [
        "Problem-solving mindset",
        "Analytical & detail-oriented",
        "Clear technical communication",
        "Team collaboration",
        "Creative thinking",
      ],
      border: "border-sky-500",
    },
  ];

  return (
    <section id="skills" className="min-h-screen px-6 py-24 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12 relative after:block after:w-24 after:h-1 after:bg-violet-500 after:mx-auto after:mt-2">
        Skills
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {skillGroups.map((group, index) => (
          <motion.div
            key={index}
            className={`bg-gray-50 p-6 rounded-2xl shadow-md border-l-4 ${group.border}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              {group.icon}
              <h3 className="text-xl font-semibold">{group.title}</h3>
            </div>

            <ul className="space-y-2 text-gray-700">
              {group.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gray-400" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
