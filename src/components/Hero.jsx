import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0d12] text-white">
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for depth without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0d12]/40 via-[#0a0d12]/30 to-[#0a0d12]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,153,255,0.25),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center md:pt-36">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-widest text-sky-300 backdrop-blur">
          PREMIUM ENERGY • ZERO SUGAR CRASH
        </div>

        <h1 className="mt-6 font-[900] leading-tight text-4xl md:text-6xl lg:text-7xl">
          <span className="block">Fuel Your Focus.</span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300">
            Power Your Drive.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-balance text-base text-white/80 md:text-lg">
          THRYV is the high-performance energy drink engineered for focus, endurance, and rapid recovery — without the sugar crash.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#buy"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-8 py-3 text-sm font-semibold text-black shadow-[0_0_25px_rgba(56,189,248,0.45)] transition-transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0d12]"
          >
            Try THRYV Now
          </a>
          <a
            href="#benefits"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-sm font-semibold text-white/90 backdrop-blur transition-colors hover:bg-white/10"
          >
            Explore Benefits
          </a>
        </div>
      </div>
    </section>
  );
}
