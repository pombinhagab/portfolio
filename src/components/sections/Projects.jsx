
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "Revenda de Carros + Integração com IA v1.0",
      status: "BETA",
      desc: "Sistema de revenda de carros em Python e Django com PostgreSQL, integrado a IA para otimizar processos.",
      tech: ["Django", "Python", "PostgreSQL"],
      link: "https://github.com/pombinhagab/carros",
    },
    {
      title: "Detecção de Alimentos e Sugestão de Refeições (Python, IA e OpenCV)",
      status: "WIP",
      desc: "Aplicação em Python com OpenCV e IA para identificar alimentos pela câmera e sugerir refeições.",
      tech: ["Python", "OpenCV", "AI"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 text-white bg-gradient-to-r from-gray-900 via-gray-800 to-indigo-950">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Projetos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
              >
                <h3 className="text-xl font-bold mb-2">
                  <span className={project.title.includes("Car Dealership") ? "text-blue-400" : "text-white"}>
                    {project.title}
                  </span>{" "}
                  <span className={project.status === "WIP" ? "text-red-500" : "text-blue-300"}>
                    ({project.status})
                  </span>
                </h3>
                <p className="text-gray-300 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end">
                  <a href={project.link} target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Ver Projeto ⭢
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
