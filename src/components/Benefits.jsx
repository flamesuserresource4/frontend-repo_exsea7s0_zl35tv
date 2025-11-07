import React from 'react';
import { Zap, Target, Activity, ShieldCheck } from 'lucide-react';

const items = [
  {
    icon: Zap,
    title: 'Sustained Energy',
    desc: 'Clean, steady lift without the spikes. Perform longer with balanced release.',
    color: 'from-cyan-400 to-sky-500',
  },
  {
    icon: Target,
    title: 'Laser Focus',
    desc: 'Dial in with L-theanine + caffeine synergy for calm, clear concentration.',
    color: 'from-fuchsia-400 to-rose-500',
  },
  {
    icon: Activity,
    title: 'Faster Recovery',
    desc: 'Electrolytes and B-vitamins help rehydrate and reduce post-session fatigue.',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    icon: ShieldCheck,
    title: 'Clean Ingredients',
    desc: 'No sugar. No artificial dyes. Just what your body needs to thrive.',
    color: 'from-slate-300 to-zinc-200',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative w-full bg-[#0b1016] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,153,255,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-extrabold md:text-5xl">
          Built for Focus, Endurance, and Recovery
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-white/70">
          Engineered formula that powers athletes, creators, and high-performers without compromise.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-black shadow-lg shadow-black/20`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-tr from-white/10 to-transparent blur-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
