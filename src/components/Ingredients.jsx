import React from 'react';

const ingredients = [
  {
    name: 'Caffeine (200mg)',
    detail: 'Optimized dose for alertness and performance without the jittery spike.',
  },
  {
    name: 'Taurine',
    detail: 'Supports endurance and muscle function during intense sessions.',
  },
  {
    name: 'L-Theanine',
    detail: 'Pairs with caffeine to promote calm focus and reduce overstimulation.',
  },
  {
    name: 'Electrolytes',
    detail: 'Sodium, potassium, and magnesium for rapid hydration and balance.',
  },
  {
    name: 'B-Vitamins',
    detail: 'B3, B6, B12 help convert energy efficiently and reduce fatigue.',
  },
];

export default function Ingredients() {
  return (
    <section id="ingredients" className="relative w-full bg-[#0a0f15] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,0,92,0.10),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-extrabold md:text-5xl">Formulated to Make Every Rep Count</h2>
        <p className="mt-4 max-w-2xl text-white/70">
          A focused blend of proven actives and clean hydration — zero sugar, zero compromises.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {ingredients.map((item) => (
            <div key={item.name} className="relative rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-5">
              <div className="text-base font-semibold tracking-wide text-sky-300">{item.name}</div>
              <div className="mt-1 text-sm text-white/70">{item.detail}</div>
              <div className="pointer-events-none absolute right-3 top-3 h-12 w-12 rounded-full bg-gradient-to-br from-cyan-400/20 to-fuchsia-400/10 blur-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
