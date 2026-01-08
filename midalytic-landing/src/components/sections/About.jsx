import React from 'react';
import { Target, Lightbulb, Users, CheckCircle2 } from 'lucide-react';

const About = ({ id }) => {
    const values = [
        {
            icon: <Target className="w-6 h-6 text-primary" />,
            title: "Misión",
            description: "Impulsar el crecimiento de las empresas a través de soluciones tecnológicas innovadoras y estrategias digitales efectivas."
        },
        {
            icon: <Lightbulb className="w-6 h-6 text-primary" />,
            title: "Visión",
            description: "Ser el socio tecnológico preferido para negocios que buscan transformar su presencia digital y optimizar sus procesos."
        },
        {
            icon: <Users className="w-6 h-6 text-primary" />,
            title: "Equipo",
            description: "Un grupo multidisciplinario de expertos apasionados por el código, el diseño y la resolución de problemas complejos."
        }
    ];

    const stats = [
        { number: "3+", label: "Años de Experiencia" },
        { number: "30+", label: "Proyectos Exitosos" },
        { number: "100%", label: "Clientes Satisfechos" },
    ];

    return (
        <section id={id} className="py-20 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Content */}
                    <div className="lg:w-1/2">
                        <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
                            Sobre Nosotros
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                            Transformando ideas en <span className="text-primary">Realidad Digital</span>
                        </h2>
                        <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                            <p>
                                En Midalytic, no solo escribimos código; construimos el futuro de tu negocio. Somos una agencia de desarrollo de software y diseño web dedicada a crear experiencias digitales que marcan la diferencia.
                            </p>
                            <p>
                                Desde startups ambiciosas hasta empresas establecidas, trabajamos codo a codo con nuestros clientes para entender sus desafíos únicos y entregar soluciones que superan expectativas.
                            </p>
                        </div>

                        {/* Values Grid */}
                        <div className="grid sm:grid-cols-2 gap-6 mt-10">
                            {values.map((item, index) => (
                                <div key={index} className="flex gap-4 p-4 rounded-xl bg-background-light dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                                    <div className="shrink-0 mt-1">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 mt-12 border-t border-slate-200 dark:border-slate-800 pt-8">
                            {stats.map((stat, index) => (
                                <div key={index}>
                                    <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                                    <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="lg:w-1/2 w-full relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 group">
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                            <img
                                src="/images/about-us.png"
                                alt="Equipo Midalytic trabajando"
                                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
