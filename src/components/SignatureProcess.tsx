import React from 'react';
import { Search, FileCode2, Rocket, Video, BookOpen, Layers, ShieldCheck, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { SIGNATURE_PROCESS, BUILD_DELIVERABLES } from '../data/portfolioData';

export const SignatureProcess: React.FC = () => {
  const getProcessIcon = (name: string) => {
    switch (name) {
      case 'Search':
        return <Search className="w-5 h-5 text-cyan-400" />;
      case 'FileCode2':
        return <FileCode2 className="w-5 h-5 text-cyan-400" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-emerald-400" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getDeliverableIcon = (name: string) => {
    switch (name) {
      case 'Video':
        return <Video className="w-5 h-5 text-cyan-400" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-emerald-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-blue-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-slate-950/70 border-t border-slate-900">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase tracking-wider mb-3 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>How I Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Discovery, Blueprint, Build & Ship
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            No guessing or messy trial-and-error. We follow a 3-step battle-tested methodology: uncover where time & money are spent, blueprint the architecture and data flows, then build, test, and ship with complete team documentation.
          </p>
        </div>

        {/* 3-Step Process Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {SIGNATURE_PROCESS.map((stepItem, idx) => (
            <div
              key={stepItem.step}
              className="relative group bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/90 hover:border-cyan-500/40 rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 flex flex-col justify-between"
            >
              {/* Top Bar with Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center shadow-inner">
                      {getProcessIcon(stepItem.iconName)}
                    </div>
                    <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider">
                      STEP {stepItem.step}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 font-semibold">
                    0{idx + 1} / 03
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                  {stepItem.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400/90 mb-3">
                  {stepItem.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {stepItem.description}
                </p>
              </div>

              {/* Deliverables for this step */}
              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2.5 font-semibold">
                  What Happens Here:
                </span>
                <ul className="space-y-2">
                  {stepItem.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Hallmark Section: Included With Every Build */}
        <div className="bg-gradient-to-b from-slate-900/80 to-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold mb-2">
                <Layers className="w-4 h-4" />
                <span>The Complete Handover Guarantee</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Included With Every System Build
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                You never get handed an empty system with no instructions. Every project comes standard with complete video walkthroughs, team SOPs, and post-launch support.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all shrink-0 self-start md:self-auto"
            >
              <span>Discuss Your Build</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BUILD_DELIVERABLES.map((deliv) => (
              <div
                key={deliv.title}
                className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                      {getDeliverableIcon(deliv.iconName)}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800/90 text-slate-300 border border-slate-700/80">
                      {deliv.badge}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                    {deliv.title}
                  </h4>
                  <p className="text-[11px] font-mono text-cyan-400 mb-2">
                    {deliv.tagline}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {deliv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
