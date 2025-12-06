import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Servicios', href: '#services' },
        { name: 'Portafolio', href: '#portfolio' },
        { name: 'Nosotros', href: '#about' },
        { name: 'Contacto', href: '#contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center gap-2">
                        <div className="text-primary w-8 h-8">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <span className="text-xl font-bold text-slate-900 dark:text-white">Midalytic</span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-slate-600 dark:text-slate-300"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800">
                    <div className="px-4 py-4 flex flex-col gap-4">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-base font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
