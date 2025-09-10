import { motion } from "framer-motion";

export const Timeline = () => {
  const events = [
    {
      year: "2024 — UniAcademia",
      title: "Início da Graduação",
      desc: "Iniciei minha graduação em Engenharia de Software na UniAcademia. Atualmente estou no 4º período.",
    },
    {
      year: "2024 — Fundamentos",
      title: "Primeiros Passos",
      desc: "Me aprofundei em Python, lógica de programação e desenvolvimento web.",
    },
    {
      year: "2025 — Primeiro Grande Projeto",
      title: "Revenda de Carros",
      desc: "Desenvolvi um sistema de revenda de carros com Django e integração de AI.",
    },
    {
      year: "2025 — Projeto Atual",
      title: "Detecção de Alimentos e Sugestão de Refeições",
      desc: "Aplicação em Python com OpenCV e IA para identificar alimentos pela câmera e sugerir refeições.",
    },
  ];

  return (
    <section
      id="timeline"
      className="py-16 text-white bg-gradient-to-r from-gray-900 via-gray-800 to-indigo-950"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Minha Jornada
        </h2>

        <div className="relative">
          {/* linha vertical contínua */}
          <div className="absolute top-0 left-6 w-px h-full bg-gray-700"></div>

          {/* eventos */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex relative"
              >
                {/* marcador */}
                <div className="flex flex-col items-center mr-6">
                  <div className="w-6 h-6 bg-purple-600 rounded-full border-4 border-gray-900"></div>
                </div>

                {/* conteúdo do evento */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{event.year}</h3>
                  <h4 className="text-lg text-purple-400 mb-2">{event.title}</h4>
                  <p className="text-gray-300">{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
