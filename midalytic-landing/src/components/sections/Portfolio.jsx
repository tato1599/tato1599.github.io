import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
    const projects = [
        {
            title: "E-Commerce Analytics Dashboard",
            category: "Web Application",
            image: "/images/ecommerce.png",
            description: "Una plataforma integral de análisis para tiendas en línea, con visualización de datos en tiempo real y gestión de inventario.",
            tags: ["React", "Tailwind CSS", "Recharts", "Node.js"]
        },
        {
            title: "NeoBank Mobile App",
            category: "Mobile App",
            image: "/images/banking.png",
            description: "Aplicación bancaria de próxima generación con características de seguridad biométrica y gestión financiera personal.",
            tags: ["React Native", "TypeScript", "Firebase"]
        },
        {
            title: "HealthCare Connect",
            category: "Healthcare Platform",
            image: "/images/healthcare.png",
            description: "Portal de pacientes seguro para programación de citas, telemedicina y acceso a registros médicos.",
            tags: ["Next.js", "PostgreSQL", "WebRTC"]
        }
    ];

    return (
        <section id="portfolio" className="py-20 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Nuestro Portafolio</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Explore algunos de nuestros proyectos recientes y vea cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos digitales.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <button className="p-2 bg-white rounded-full text-slate-900 hover:bg-primary hover:text-white transition-colors">
                                        <ExternalLink size={20} />
                                    </button>
                                    <button className="p-2 bg-white rounded-full text-slate-900 hover:bg-primary hover:text-white transition-colors">
                                        <Github size={20} />
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">{project.category}</div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-full font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="px-8 py-3 border border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-colors">
                        Ver Todos los Proyectos
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
