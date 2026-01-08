import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="text-primary w-6 h-6">
                                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-slate-900 dark:text-white">Midalytic</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                            Transformamos ideas en experiencias digitales excepcionales. Su socio de confianza para el desarrollo de software y diseño web.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/profile.php?id=61584286157794" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
                            {/* <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Linkedin size={20} /></a> */}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-bold mb-6">Enlaces Rápidos</h4>
                        <ul className="space-y-3">
                            <li><a href="/#services" className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm transition-colors">Servicios</a></li>
                            <li><a href="/#portfolio" className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm transition-colors">Portafolio</a></li>
                            <li><a href="/#about" className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm transition-colors">Nosotros</a></li>
                            <li><a href="/#contact" className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-bold mb-6">Servicios</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm transition-colors">Desarrollo Web</a></li>
                            <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm transition-colors">Apps Móviles</a></li>
                            <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm transition-colors">Diseño UI/UX</a></li>
                            <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm transition-colors">Consultoría</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-bold mb-6">Contacto</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-sm">
                                <Mail size={18} className="text-primary" />
                                <a href="mailto:contact@midalytic.com" className="hover:text-primary transition-colors">contacto@midalytic.me</a>
                            </li>
                            <li className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-sm">
                                <Phone size={18} className="text-primary" />
                                <a href="tel:+1234567890" className="hover:text-primary transition-colors">(656) 123-2570</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 dark:text-slate-400 text-sm text-center md:text-left">
                        © 2026 Midalytic. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-400">
                        <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacidad</Link>
                        <Link to="/terms-and-conditions" className="hover:text-primary transition-colors">Términos</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
