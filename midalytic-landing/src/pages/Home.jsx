import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';

const Home = () => {
    return (
        <main>
            <Hero id="hero" />
            <Services id="services" />
            <Portfolio id="portfolio" />
            <About id="about" />
            <Contact id="contact" />
        </main>
    );
};

export default Home;
