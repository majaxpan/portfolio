"use client";

import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-24 bg-violet-50"
    >
      <h2 className="text-4xl font-bold mb-8 relative after:block after:w-24 after:h-1 after:bg-violet-500 after:mx-auto after:mt-2">
        Contact
      </h2>

      <p className="text-lg text-gray-600 mb-12 max-w-xl">
        I’m open to software engineering opportunities and meaningful collaborations.
      </p>

      <div className="flex flex-col sm:flex-row gap-6">
        {/* Email */}
        <a
          href="mailto:panoskamaja@outlook.com"
          className="flex items-center gap-2 px-6 py-3 rounded-xl border border-emerald-500 text-violet-600 hover:bg-violet-50 shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <HiOutlineMail size={20} />
          Email
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/maja-panoska/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-xl border border-emerald-500 text-emerald-600 hover:bg-emerald-50 shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <FaLinkedin size={20} />
          LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/majaxpan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-400 text-gray-700 hover:bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <FaGithub size={20} />
          GitHub
        </a>
      </div>

      <p className="mt-10 text-sm text-gray-400">
        All links open in a new tab.
      </p>
    </section>
  );
}
