export default function Skills() {
  return (
    <section id="skills" className="min-h-screen px-6 py-24">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

      <div className="max-w-4xl mx-auto grid gap-10">
        {/* Programming Languages */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Programming Languages
          </h3>
          <p className="text-gray-600">
            Java, SQL, JavaScript, TypeScript, Python, C#, C
          </p>
        </div>

        {/* Frameworks & Technologies */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Frameworks & Technologies
          </h3>
          <p className="text-gray-600">
            Spring Boot, React, Next.js, REST APIs
          </p>
        </div>

        {/* Databases */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Databases
          </h3>
          <p className="text-gray-600">
            PostgreSQL, Microsoft SQL Server
          </p>
        </div>

        {/* Tools & Practices */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Tools & Practices
          </h3>
          <p className="text-gray-600">
            Git, Manual Testing, System Analysis, Documentation, CI/CD (basic)
          </p>
        </div>

        {/* Currently Exploring */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Currently Exploring
          </h3>
          <p className="text-gray-600">
            Game Development with Godot, GDScript, Mobile-focused development
          </p>
        </div>
      </div>
    </section>
  );
}
