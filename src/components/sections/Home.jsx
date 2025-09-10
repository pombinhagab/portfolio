import { FaGithub } from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
        <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
                    Hi, I'm Gabriel Nascimento
                </h1>

                <p className="text-white text-lg mb-8 max-w-lg mx-auto">
                Sou um desenvolvedor Backend e Web apaixonado, criando aplicações web escaláveis e eficientes. Gosto de transformar ideias em soluções digitais funcionais, com foco em código limpo, alto desempenho e experiências de usuário fluídas.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        Ver Projetos
                    </a>
                    <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                        Fale Comigo
                    </a>
                    <a href="https://github.com/pombinhagab" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white py-3 px-6 rounded font-medium flex items-center space-x-2 transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(75,85,99,0.4)]">
                    <FaGithub size={20} />
                    <span>GitHub</span>
                    </a>
                </div>
            </div>
        </RevealOnScroll>
        </section>
    )
}