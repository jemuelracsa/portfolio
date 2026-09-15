import React, { useState } from 'react';
import { Zap, Bot, Cpu, Layout, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Video, BookOpen, Layers } from 'lucide-react';
import { CORE_SERVICES } from '../data/portfolioData';

export const WhatIBuildSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(CORE_SERVICES[0].id);

  const getServiceIcon = (name: string, className: string = 'w-5 h-5') => {
    switch (name) {
      case 'Zap':
        return <Zap className={className} />;
      case 'Bot':
        return <Bot className={className} />;
      case 'Cpu':
        return <Cpu className={className} />;
      case 'Layout':
        return <Layout className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      default:
        return <Layers className={className} />;
    }
  };

  const selectedService = CORE_SERVICES.find((s) => s.id === activeTab) || CORE_SERVICES[0];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900">
      {/* Background radial gradient accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase tracking-wider mb-4 font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>What I Build</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Systems & Infrastructure For High-Growth Teams
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            From speed-to-lead pipelines and custom GoHighLevel CRM architecture to conversational AI and custom integrations, engineered end-to-end to eliminate manual work and drive revenue.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {CORE_SERVICES.map((service) => {
            const isSelected = service.id === activeTab;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border ${
                  isSelected
                    ? 'bg-cyan-400 text-slate-950 font-bold border-cyan-400 shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-900/70 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-800'
                }`}
              >
                {getServiceIcon(service.iconName, 'w-4 h-4')}
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Card */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Col: Overview & Pitch (Col 6) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-[11px] font-semibold mb-3">
                  <span>{selectedService.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {selectedService.title}
                </h3>
                <p className="text-sm font-mono text-cyan-400 mt-1">
                  {selectedService.headline}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                  {selectedService.summary}
                </p>
              </div>

              {/* Best For Callout */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1 font-semibold">
                  Best For:
                </span>
                <p className="text-xs sm:text-sm text-slate-200 font-medium">
                  {selectedService.bestFor}
                </p>
              </div>

              {/* Standard Included Handover */}
              <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-800/40">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold mb-1">
                  <Video className="w-3.5 h-3.5" />
                  <span>Standard Handover Guarantee</span>
                </div>
                <p className="text-xs text-slate-300">
                  {selectedService.deliverablesSnippet}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all active:scale-98"
                >
                  <span>Build This For My Business</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Col: Capabilities Checklist & Deliverables (Col 6) */}
            <div className="lg:col-span-6 bg-slate-950/70 border border-slate-800/90 rounded-2xl p-6 sm:p-8">
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-5 flex items-center justify-between">
                <span>System Features & Technical Specifications</span>
                <span className="text-cyan-400 font-mono">Turnkey Ready</span>
              </h4>

              <ul className="space-y-3.5 mb-8">
                {selectedService.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Deliverable Tags Bar */}
              <div className="pt-5 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono uppercase text-slate-400 mr-1 font-semibold">
                  Included:
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-cyan-300 font-mono">
                  <Video className="w-3 h-3 text-cyan-400" /> Loom Video Walkthrough
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-emerald-300 font-mono">
                  <BookOpen className="w-3 h-3 text-emerald-400" /> Team SOP Document
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-amber-300 font-mono">
                  <ShieldCheck className="w-3 h-3 text-amber-400" /> 30-Day Warranty
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
