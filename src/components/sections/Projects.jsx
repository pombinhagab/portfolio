// Projects.jsx
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "Car Dealership Management System + AI Integration v1.0",
      status: "WIP",
      desc: "A web application built with Django to manage a car dealership, featuring vehicle listings, sales management, and user-friendly interfaces for browsing and administration.",
      tech: ["Django", "Python", "PostgreSQL"],
      link: "https://carros-4z6c.onrender.com/cars/",
    },
    {
      title: "LoL Build Assistant – Frontend + AI Integration",
      status: "WIP",
      desc: "Frontend project integrated with an AI API that generates personalized builds for characters, showcasing API integration, UI design, and dynamic rendering.",
      tech: ["HTML", "CSS", "React"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 text-white bg-gradient-to-r from-gray-900 via-gray-800 to-indigo-950">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
              >
                <h3 className="text-xl font-bold mb-2">
                  {project.title} <span className="text-red-500">({project.status})</span>
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
                    View Project ⭢
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
