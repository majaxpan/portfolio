"use client";

import { motion } from "framer-motion";
import { SiReact, SiPostgresql, SiGodotengine } from "react-icons/si";
import { FaBook } from "react-icons/fa"; // fallback for Google Books API
import { JSX } from "react";

export default function Projects() {
  const techIcons: Record<string, JSX.Element> = {
    "Java Spring Boot": <span>☕</span>,
    React: <SiReact className="w-4 h-4" />,
    PostgreSQL: <SiPostgresql className="w-4 h-4" />,
    "Google Books API": <FaBook className="w-4 h-4" />,
    "Godot Engine": <SiGodotengine className="w-4 h-4" />,
    "GDScript / C#": <SiGodotengine className="w-4 h-4" />,
  };

  const projects = [
    {
      title: "Book Search & Rating Platform",
      type: "Full-stack web application · Thesis Project",
      description:
        "Designed and implemented a web application for searching, rating, and managing books, integrating external APIs and persistent storage.",
      tech: ["Java Spring Boot", "React", "PostgreSQL", "Google Books API"],
      github: "https://github.com/majaxpan/bookapp",
      demo: "#",
      color: "violet-500",
    },
    {
      title: "Upcoming Game Project",
      type: "Personal project",
      description:
        "A simple but fun game being developed to learn game mechanics and expand creative programming skills.",
      tech: ["Godot Engine", "GDScript / C#"],
      github: "#",
      demo: "#",
      color: "emerald-500",
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-6 py-24 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12 relative after:block after:w-24 after:h-1 after:bg-violet-500 after:mx-auto after:mt-2">
        Projects
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className={`relative bg-white p-6 rounded-2xl shadow-md border-l-4 border-${proj.color} overflow-hidden`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ y: -5, boxShadow: "0px 15px 25px rgba(0,0,0,0.2)" }}
          >
            {/* Gradient overlay on hover */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.08 }}
              style={{ background: "linear-gradient(135deg, #6b21a8, #10b981)" }}
            />

            <h3 className="text-2xl font-semibold mb-1 relative z-10">{proj.title}</h3>
            <p className="text-sm text-gray-500 mb-3 relative z-10">{proj.type}</p>
            <p className="text-gray-700 mb-4 relative z-10">{proj.description}</p>

            {/* Tech stack with icons and hover bounce */}
            <div className="flex flex-wrap gap-2 mb-4 relative z-10">
              {proj.tech.map((tech, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-sm text-gray-700 cursor-default"
                  whileHover={{ scale: 1.2, y: -2 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  {techIcons[tech] || <span className="w-2 h-2 rounded-full bg-gray-500 inline-block" />}
                  {tech}
                </motion.div>
              ))}
            </div>

            {/* Links with animated underline */}
            <div className="flex gap-6 relative z-10">
              {proj.github !== "#" && (
                <a
                  href={proj.github}
                  target="_blank"
                  className={`text-${proj.color} text-sm relative after:block after:h-0.5 after:bg-current after:absolute after:left-0 after:bottom-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
                >
                  Github
                </a>
              )}
              {proj.demo !== "#" && (
                <a
                  href={proj.demo}
                  target="_blank"
                  className={`text-${proj.color} text-sm relative after:block after:h-0.5 after:bg-current after:absolute after:left-0 after:bottom-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
                >
                  Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
