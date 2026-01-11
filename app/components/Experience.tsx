export default function Experience() {
  return (
    <section id="experience" className="min-h-screen px-6 py-24">
      <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>

      <div className="max-w-3xl mx-auto space-y-12">
        {/* SEPA Experience */}
        <div>
          <h3 className="text-2xl font-semibold">
            Product Specialist (Technical)
          </h3>

          <p className="text-sm text-gray-500 mb-3">
            National SEPA Payment System · 2025
          </p>

          <p className="text-gray-600 mb-4">
            Worked on the implementation and maintenance of a national-scale
            SEPA payment system integrated into an existing foreign currency
            payments platform, used by the national bank and multiple commercial
            banks.
          </p>

          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              Participated in system analysis, integration, and implementation
              of SEPA payment flows
            </li>
            <li>
              Performed manual testing, client-side testing with banks, and
              validation under regulatory constraints
            </li>
            <li>
              Wrote and corrected SQL procedures to support system behavior and
              resolve inconsistencies
            </li>
            <li>
              Configured and parameterized SEPA message formats for different
              banks
            </li>
            <li>
              Prepared technical documentation and held presentations for
              clients and internal teams
            </li>
            <li>
              Collaborated closely with architects, developers, and external
              teams in a production environment
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">
            Software Engineering Intern
          </h3>

          <p className="text-sm text-gray-500 mb-3">
            University Internship · 3 months
          </p>

          <p className="text-gray-600 mb-4">
            Participated in the development of a student attendance management
            system as part of a small engineering team, working on both
            implementation and testing.
          </p>

          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              Contributed to backend and frontend features under mentorship
            </li>
            <li>
              Gained experience working in a team-based development environment
            </li>
            <li>
              Participated in testing, debugging, and iterative improvements
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
