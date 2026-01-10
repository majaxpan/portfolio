export default function About() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>

      <p className="text-lg text-gray-600 max-w-2xl mb-4">
        I’m a software engineer who enjoys building technically solid,
        well-structured systems and learning continuously through both work and
        personal projects.
      </p>

      <p className="text-lg text-gray-600 max-w-2xl mb-4">
        Over the past year, I contributed to national-scale production systems, including the
        SEPA payment infrastructure used by multiple banks, gaining hands-on experience
        in complex, real-world software development.
      </p>

      <p className="text-lg text-gray-600 max-w-2xl">
        Outside of work, I explore creative technologies like game development to expand my
        problem-solving skills and enjoy building things that are both playful and meaningful.
      </p>
    </section>
  );
}
