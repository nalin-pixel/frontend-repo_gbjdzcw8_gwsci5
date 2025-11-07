import React from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Logo from './components/Logo';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-white selection:text-black">
      <header className="fixed top-0 inset-x-0 z-20 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Logo />
          <div className="text-xs text-neutral-400 tracking-widest uppercase">Coming Soon</div>
        </div>
      </header>

      <main className="w-full">
        <Hero />
        <Countdown />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}

export default App;
