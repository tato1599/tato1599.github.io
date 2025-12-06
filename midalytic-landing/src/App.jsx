import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;
