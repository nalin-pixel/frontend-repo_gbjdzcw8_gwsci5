import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitted(true);
  };

  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold">Be first to know</h2>
          <p className="text-neutral-400 mt-2">Sign up for a single launch email. No spam, only monochrome goodness.</p>
        </div>
        {submitted ? (
          <div className="mt-6 inline-flex items-center gap-3 text-neutral-300">
            <span className="inline-block h-2 w-2 rounded-full bg-white" />
            Thanks! We'll notify you when we go live.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex w-full max-w-xl items-center gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@monochrome.co"
              className="flex-1 bg-white/5 border border-white/10 text-white placeholder:text-neutral-500 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-white text-black rounded-md px-5 py-3 font-medium hover:bg-neutral-100 transition"
            >
              Notify me
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
