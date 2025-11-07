import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 flex flex-col items-start">
        <p className="text-neutral-400 tracking-widest uppercase text-xs md:text-sm">Coming Soon</p>
        <h1 className="mt-4 text-white text-4xl md:text-6xl font-semibold leading-tight max-w-2xl">
          A monochrome space for playful robotics
        </h1>
        <p className="mt-4 text-neutral-300 max-w-xl">
          Minimal, friendly, and interactive. Were crafting something in black and white with subtle light.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <span className="h-px w-10 bg-neutral-600" />
          <span className="text-neutral-400 text-sm">Stay tuned. Launching soon.</span>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
    </section>
  );
}
