import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex R.',
    role: 'Hybrid Athlete',
    quote:
      'Locked in for my entire session. Smooth energy, no crash. THRYV is my new go-to.',
  },
  {
    name: 'Jade M.',
    role: 'Esports Pro',
    quote:
      'The focus is unreal. I can grind for hours without feeling wired or shaky.',
  },
  {
    name: 'Diego S.',
    role: 'Coach & Creator',
    quote:
      'Recovery feels faster and my afternoon slump is gone. Clean taste, clean energy.',
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1 text-amber-300">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative w-full bg-[#0b1016] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(0,204,255,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-extrabold md:text-5xl">Trusted by Athletes and Creators</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Real stories from people who demand more from their energy.
            </p>
          </div>
          <Stars />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <Quote className="absolute -right-2 -top-2 h-10 w-10 text-white/10" />
              <blockquote className="text-sm text-white/80">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold">
                {t.name} <span className="text-white/50">• {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
