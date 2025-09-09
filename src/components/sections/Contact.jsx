import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com';
import { useState } from "react";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });


    const [toast, setToast] = useState({ visible: false, message: "" });

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then(() => {
                setFormData({ name: "", email: "", message: "" });
                setToast({ visible: true, message: "Message sent successfully!" });
                setTimeout(() => setToast({ visible: false, message: "" }), 3000);
            })
            .catch(() => {
                setToast({ visible: true, message: "Failed to send the message, please try again." });
                setTimeout(() => setToast({ visible: false, message: "" }), 3000);
            });
    };

    return (
        <section id="contact" className="flex items-center justify-center py-20 px-20 relative">
            {toast.visible && (
                <div className="fixed top-5 right-5 z-50 max-w-xs w-auto bg-blue-500 text-white py-2 px-4 rounded shadow-lg animate-slide-in">
                    {toast.message}
                </div>
            )}

            <RevealOnScroll>
                <div className="px-4 w-150">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Get in touch
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Name..."
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="example@email.com"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Your message..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                            <button
                                type="submit"
                                className="cursor-pointer w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </RevealOnScroll>

            {/* Toast animation */}
            <style jsx>{`
                @keyframes slide-in {
                    0% {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-slide-in {
                    animation: slide-in 0.3s ease-out forwards;
                }
            `}</style>
        </section>
    );
};
