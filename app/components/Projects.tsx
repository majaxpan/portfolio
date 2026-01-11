export default function Projects() {
  return (
    <section className="min-h-screen px-6 py-24">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      <div className="max-w-4xl mx-auto grid gap-8">
        {/* Thesis Project */}
        <div className="border rounded-2xl p-6">
          <h3 className="text-2xl font-semibold mb-2">
            Book Search & Rating Platform
          </h3>

          <p className="text-sm text-gray-500 mb-4">
            Full-stack web application · Thesis Project
          </p>

          <p className="text-gray-600 mb-4">
            Designed and implemented a full-stack web application for searching,
            rating, and managing books, integrating external APIs and persistent
            storage.
          </p>

          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>Backend built with Java Spring Boot</li>
            <li>Frontend developed using React</li>
            <li>PostgreSQL database for data persistence</li>
            <li>Integrated Google Books API for book data</li>
          </ul>

          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/majaxpan/bookapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              GitHub Repository
            </a>

            <span className="text-sm text-gray-400">
              Live demo coming soon
            </span>
          </div>
        </div>

        {/* Game Project – Placeholder */}
        <div className="border rounded-2xl p-6 border-dashed">
          <h3 className="text-2xl font-semibold mb-2">
            2D Mobile Game (In Progress)
          </h3>

          <p className="text-sm text-gray-500 mb-4">
            Godot · GDScript
          </p>

          <p className="text-gray-600 mb-4">
            A simple 2D mobile game focused on core gameplay mechanics,
            player input, and iteration. Built as a personal learning project.
          </p>

          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>Godot Engine (2D)</li>
            <li>Game loop, physics, and input handling</li>
            <li>Mobile-first design considerations</li>
          </ul>

          <p className="text-sm text-gray-400">
            Currently in development.
          </p>
        </div>
      </div>
    </section>
  );
}
