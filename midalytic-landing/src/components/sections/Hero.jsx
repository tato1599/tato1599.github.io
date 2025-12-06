import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 text-center lg:text-left"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight tracking-tight mb-6">
                        Tu Socio en <span className="text-primary">Innovación Digital</span>
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        Midalytic ayuda a las empresas a crecer y tener éxito a través de landing pages diseñadas por expertos y soluciones de software personalizadas adaptadas a sus necesidades únicas.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-primary/25">
                            Obtén una Cotización
                        </button>
                        <button className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-3 rounded-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                            Ver Portafolio
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex-1 w-full"
                >
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxNwTaJY4lvjhuDb8veQpnsyOc1mmCFz2kKsiUTChisfYLXOm0ROJqrhWVV4magTI_qFM5lw39s6idj1ixn1KfzBUgXQ9UpkH3P2rpaCNW2-i37rGMZv5N_sEGplD2XwqAi8n9MMLsYEG26NNh61BJi-eSRLqv4Xd3kHs74jPqs_2upeWDu7rGSssjLN5aknHHozkpyOW0dJuvmaVlgvYrH3E412M7G2FIiUpM1nEIQumjWWYEP6xpqaO4JPVgPAa7ui-aSO8ARbLs"
                            alt="Digital Innovation"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
