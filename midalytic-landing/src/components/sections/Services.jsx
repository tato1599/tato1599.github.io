import React from 'react';
import { Layout, Code2, Monitor, Smartphone, Palette } from 'lucide-react';

const Services = () => {
    const mainOffers = [
        {
            icon: <Layout className="w-10 h-10 text-primary" />,
            title: "Desarrollo de Landing Pages",
            description: "Diseñamos y construimos landing pages responsivas de alta conversión que cautivan a su audiencia e impulsan la acción."
        },
        {
            icon: <Code2 className="w-10 h-10 text-primary" />,
            title: "Desarrollo de Software a Medida",
            description: "Desde el concepto hasta la implementación, creamos soluciones de software escalables y a medida para resolver sus desafíos más complejos."
        }
    ];

    const detailedServices = [
        {
            icon: <Monitor className="w-8 h-8 text-primary" />,
            title: "Desarrollo Web",
            description: "Creación de aplicaciones web robustas y escalables adaptadas a sus objetivos de negocio."
        },
        {
            icon: <Smartphone className="w-8 h-8 text-primary" />,
            title: "Desarrollo Móvil",
            description: "Construcción de aplicaciones móviles intuitivas y de alto rendimiento para iOS y Android."
        },
        {
            icon: <Palette className="w-8 h-8 text-primary" />,
            title: "Diseño UI/UX",
            description: "Diseño de interfaces centradas en el usuario que son a la vez atractivas y fáciles de usar."
        }
    ];

    return (
        <section id="services" className="py-20 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Offers */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Nuestras Ofertas Principales</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Nos enfocamos en áreas clave para proporcionar el máximo impacto para su negocio.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {mainOffers.map((offer, index) => (
                            <div key={index} className="p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors group">
                                <div className="mb-6 p-3 bg-white dark:bg-slate-800 w-fit rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                                    {offer.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{offer.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{offer.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Detailed Services */}
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Servicios Integrales</h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {detailedServices.map((service, index) => (
                            <div key={index} className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                                <div className="mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;
