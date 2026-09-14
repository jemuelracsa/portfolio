import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden bg-slate-950/90 border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs uppercase tracking-wider mb-3 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Client Results & Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What Clients Say About The Systems
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Real feedback from agency owners, clinic operators, and business founders who automated their operations, saved dozens of hours, and booked more calls.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/60 border border-slate-800/90 hover:border-slate-700/90 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 relative group"
            >
              <div>
                {/* Metric pill at the top of each review */}
                <div className="flex items-center justify-between mb-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">
                    <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.metric}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-slate-200 text-sm leading-relaxed mb-6 italic relative">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Company Info */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3.5">
                {item.avatar && (
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-11 h-11 rounded-full object-cover border border-slate-700 shrink-0"
                  />
                )}
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{item.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  </h4>
                  <p className="text-xs text-slate-400 font-mono">
                    {item.role}
                  </p>
                  <p className="text-[11px] text-cyan-400/90 font-medium">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Proof Strip */}
        <div className="mt-12 py-5 px-6 rounded-2xl bg-slate-900/40 border border-slate-800/70 flex flex-wrap items-center justify-around gap-6 text-center text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-semibold text-white">100% On-Time Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span className="font-semibold text-white">Documented SOPs Included</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span className="font-semibold text-white">Personal Loom Video Walkthroughs</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            <span className="font-semibold text-white">30-Day Post-Launch Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};
