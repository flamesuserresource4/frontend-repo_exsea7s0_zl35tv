import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Ingredients from './components/Ingredients';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#070a0f]/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
        <a href="#" className="flex items-center gap-2 font-black tracking-wider">
          <span className="inline-block h-3 w-3 rounded-sm bg-gradient-to-br from-sky-400 to-cyan-300" />
          THRYV
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#benefits" className="hover:text-white">Benefits</a>
          <a href="#ingredients" className="hover:text-white">Ingredients</a>
          <a href="#testimonials" className="hover:text-white">Reviews</a>
        </nav>
        <a
          href="#buy"
          className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-4 py-2 text-xs font-bold uppercase text-black"
        >
          Buy
        </a>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#070a0f] selection:bg-cyan-300 selection:text-black">
      <Navbar />
      <Hero />
      <Benefits />
      <Ingredients />
      <div id="testimonials">
        <Testimonials />
      </div>
      <FinalCTA />
      <footer className="border-t border-white/5 bg-[#070a0f] py-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} THRYV Energy. All rights reserved.
      </footer>
    </div>
  );
}
