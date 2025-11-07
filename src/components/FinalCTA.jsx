import React from 'react';

export default function FinalCTA() {
  return (
    <section id="buy" className="relative w-full bg-[#0a0d12] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-extrabold md:text-5xl">
          Join the THRYV Movement
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          Elevate your training, your sessions, and your day. Make clean, high-performance energy your new baseline.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 via-red-500 to-orange-400 px-10 py-4 text-sm font-extrabold tracking-wide text-white shadow-[0_0_25px_rgba(244,63,94,0.35)] transition-transform hover:scale-[1.03]"
          >
            Buy Now
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-10 py-4 text-sm font-semibold text-white/90 backdrop-blur transition-colors hover:bg-white/10"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
