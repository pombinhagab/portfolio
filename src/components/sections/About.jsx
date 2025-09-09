// About.jsx
import { RevealOnScroll } from "../RevealOnScroll";
import { Timeline } from "../Timeline";

export const About = () => {

  const backendSkills = ["Python", "Django", "C#", "PostgreSQL", "MySQL"];
  const frontendSkills = ["HTML", "CSS", "React", "TailwindCSS"];

  return (
    <section id="about" className="py-16 text-white bg-gradient-to-r from-gray-900 via-gray-800 to-indigo-950">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-white mb-6">
              Passionate developer with expertise in backend and web development applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="/path-to-your-cv.pdf"
              className="block mt-6 text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
              download
            >
              Download CV
            </a>
          </div>

          {/* Education */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Graduating in Software Engineering</strong> - Uniacademia - Centro Universitario
                </li>
                <li>
                  <strong>Relevant Coursework</strong> Django Master by Felipe Azambuja
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Timeline />
      </RevealOnScroll>
    </section>
  );
};
