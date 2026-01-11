export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-24">
      <h2 className="text-4xl font-bold mb-6">Contact</h2>

      <p className="text-lg text-gray-600 mb-6">
        I’m open to software engineering opportunities and collaborations.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="mailto:panoskamaja@outlook.com"
          className="text-blue-600 hover:underline text-lg"
        >
          Email
        </a>

        <a
          href="https://www.linkedin.com/in/maja-panoska/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-lg"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/majaxpan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-lg"
        >
          GitHub
        </a>
      </div>

      <p className="mt-6 text-sm text-gray-400">
        All links open in a new tab.
      </p>
    </section>
  );
}
