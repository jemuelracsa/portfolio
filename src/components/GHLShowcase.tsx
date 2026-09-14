import React, { useState } from 'react';
import {
  Workflow,
  Boxes,
  Code2,
  Layout,
  ShieldCheck,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Play,
  RotateCcw,
  Zap,
  PhoneCall,
  Mail,
  Bot,
  Calendar,
  Layers,
  ChevronRight
} from 'lucide-react';
import { GHL_PILLARS, GHLPillar } from '../data/portfolioData';

export const GHLShowcase: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string>('workflows');
  const [simulationBranch, setSimulationBranch] = useState<'yes' | 'no'>('yes');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulationStep, setSimulationStep] = useState<number>(3);

  const activePillar = GHL_PILLARS.find((p) => p.id === activePillarId) || GHL_PILLARS[0];

  const getPillarIcon = (iconName: string, className: string = 'w-5 h-5') => {
    switch (iconName) {
      case 'Workflow':
        return <Workflow className={className} />;
      case 'Boxes':
        return <Boxes className={className} />;
      case 'Code2':
        return <Code2 className={className} />;
      case 'Layout':
        return <Layout className={className} />;
      case 'ShieldCheck':
        return <ShieldCheck className={className} />;
      case 'BarChart3':
        return <BarChart3 className={className} />;
      default:
        return <Zap className={className} />;
    }
  };

  const handleRunSimulation = (branch: 'yes' | 'no') => {
    setSimulationBranch(branch);
    setIsSimulating(true);
    setSimulationStep(0);

    const stepInterval = setInterval(() => {
      setSimulationStep((prev) => {
        if (prev >= 4) {
          clearInterval(stepInterval);
          setIsSimulating(false);
          return 4;
        }
        return prev + 1;
      });
    }, 450);
  };

  return (
    <section id="ghl-showcase" className="py-20 relative border-t border-slate-800/80 bg-slate-950/40">
      {/* Subtle Glow Background */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[350px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[300px] bg-blue-600/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase tracking-wider mb-3 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>GoHighLevel Made Simple</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Automations That Win You More Clients
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Simple, powerful setups that answer your leads instantly, book appointments while you sleep, and organize your client pipeline without extra headaches.
          </p>
        </div>

        {/* Pillars Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {GHL_PILLARS.map((pillar) => {
            const isSelected = pillar.id === activePillarId;
            return (
              <button
                key={pillar.id}
                id={`ghl-pillar-tab-${pillar.id}`}
                onClick={() => setActivePillarId(pillar.id)}
                className={`p-3.5 rounded-xl text-left transition-all duration-200 flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500/50 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/20'
                    : 'bg-slate-900/50 hover:bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div>
                  <div
                    className={`p-2 rounded-lg w-fit mb-2.5 ${
                      isSelected
                        ? 'bg-cyan-500/15 text-cyan-400'
                        : 'bg-slate-800/80 text-slate-400'
                    }`}
                  >
                    {getPillarIcon(pillar.iconName, 'w-4 h-4')}
                  </div>
                  <div className="text-xs font-bold text-white leading-snug line-clamp-2">
                    {pillar.title}
                  </div>
                </div>
                <div className="mt-3">
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                      isSelected
                        ? 'bg-cyan-950 text-cyan-300 border border-cyan-800'
                        : 'bg-slate-800 text-slate-500'
                    }`}
                  >
                    {pillar.badge}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Deep-Dive Card */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 mb-16 shadow-xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Pillar Overview (Col 5) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {getPillarIcon(activePillar.iconName, 'w-6 h-6')}
                </div>
                <div>
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    {activePillar.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {activePillar.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activePillar.description}
              </p>

              {/* Metric Card */}
              <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">
                  Real Results For Clients
                </span>
                <div className="text-base sm:text-lg font-bold font-mono text-cyan-300 mt-0.5">
                  {activePillar.metrics}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Want this setup for your business? Let's chat</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Pillar Capabilities Checklist (Col 7) */}
            <div className="lg:col-span-7 bg-slate-950/60 border border-slate-800/80 rounded-xl p-5 sm:p-6">
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-4 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>What You Get When We Work Together</span>
              </h4>

              <ul className="space-y-3">
                {activePillar.capabilities.map((cap, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Interactive GoHighLevel Workflow Visualizer */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold mb-1">
                <Workflow className="w-4 h-4" />
                <span>Live Interactive Demo</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                How Your Inquiries Turn Into Booked Calls
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Click below to see how new leads get contacted and booked on your calendar in seconds, with 0 manual effort.
              </p>
            </div>

            {/* Simulation Controls */}
            <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800 shrink-0">
              <button
                onClick={() => handleRunSimulation('yes')}
                disabled={isSimulating}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                  simulationBranch === 'yes'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Play className="w-3 h-3" />
                <span>When Lead Replies (Fast Booking)</span>
              </button>

              <button
                onClick={() => handleRunSimulation('no')}
                disabled={isSimulating}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                  simulationBranch === 'no'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <RotateCcw className="w-3 h-3" />
                <span>If No Reply (Auto Nurture)</span>
              </button>
            </div>
          </div>

          {/* Workflow Diagram Grid */}
          <div className="space-y-4">
            {/* Step 1: Inbound Trigger */}
            <div
              className={`p-4 rounded-xl border transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                simulationStep >= 0
                  ? 'bg-slate-950 border-cyan-500/50 shadow-md shadow-cyan-500/5'
                  : 'bg-slate-950/40 border-slate-800 opacity-60'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  01
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white">Step 1: New Lead Arrives</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      Website Form, Facebook, or Instagram
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">
                    A potential client submits their name, phone number, and what they need.
                  </p>
                </div>
              </div>

              <div className="text-right sm:text-right shrink-0">
                <span className="text-[11px] font-mono text-emerald-400 flex items-center sm:justify-end gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Instant Notification
                </span>
              </div>
            </div>

            {/* Step 2: Instant Dual Action */}
            <div
              className={`p-4 rounded-xl border transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                simulationStep >= 1
                  ? 'bg-slate-950 border-cyan-500/50 shadow-md shadow-cyan-500/5'
                  : 'bg-slate-950/40 border-slate-800 opacity-60'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  02
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white">Step 2: Instant Personalized Text & Email Sent</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      Under 45 Seconds
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Your system texts them immediately while they are still thinking about you: <span className="text-cyan-300 italic text-[11px]">"Hey John, saw you just asked for details! When's a good time to chat?"</span>
                  </p>
                </div>
              </div>

              <div className="text-right sm:text-right shrink-0">
                <span className="text-[11px] font-mono text-cyan-400 flex items-center sm:justify-end gap-1">
                  <Zap className="w-3.5 h-3.5" />
                  Fastest in your industry
                </span>
              </div>
            </div>

            {/* Step 3: Decision Condition */}
            <div
              className={`p-4 rounded-xl border transition-all duration-300 ${
                simulationStep >= 2
                  ? 'bg-slate-950 border-blue-500/50'
                  : 'bg-slate-950/40 border-slate-800 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                    03
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white">Step 3: Smart Routing Based On What The Lead Does</span>
                    <p className="text-xs text-slate-400">The system automatically listens for their reply or calendar booking</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  Smart Decision
                </span>
              </div>

              {/* Two Branches */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 pt-3 border-t border-slate-800">
                {/* Branch A: Yes */}
                <div
                  className={`p-3.5 rounded-lg border transition-all duration-300 ${
                    simulationBranch === 'yes' && simulationStep >= 3
                      ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-200'
                      : 'bg-slate-900/40 border-slate-800/60 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold flex items-center gap-1.5 text-emerald-400">
                      <Bot className="w-3.5 h-3.5" />
                      If Lead Replies &rarr; Instant Booking Link Sent
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300">
                      Ready To Buy
                    </span>
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    The system answers their questions, offers convenient times, and locks the appointment onto your Google or Outlook calendar with reminder texts.
                  </p>
                </div>

                {/* Branch B: No */}
                <div
                  className={`p-3.5 rounded-lg border transition-all duration-300 ${
                    simulationBranch === 'no' && simulationStep >= 3
                      ? 'bg-amber-950/30 border-amber-500/50 text-amber-200'
                      : 'bg-slate-900/40 border-slate-800/60 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold flex items-center gap-1.5 text-amber-400">
                      <PhoneCall className="w-3.5 h-3.5" />
                      If No Reply &rarr; Gentle Follow-Up On Autopilot
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300">
                      Never Miss A Lead
                    </span>
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    Sends friendly reminders over the next few days. No lead slips through the cracks, and you don't have to remember to follow up manually.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4: Outcome & Attribution */}
            <div
              className={`p-4 rounded-xl border transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                simulationStep >= 4
                  ? 'bg-slate-950 border-emerald-500/50 shadow-md shadow-emerald-500/5'
                  : 'bg-slate-950/40 border-slate-800 opacity-60'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  04
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white">Step 4: Booked Call Added & Pipeline Updated</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      Ready For You
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">
                    A confirmed appointment is on your calendar, your sales board is updated, and both you and your client receive reminder notifications.
                  </p>
                </div>
              </div>

              <div className="shrink-0 text-right">
                <span className="text-[11px] font-mono text-emerald-300 bg-emerald-950/60 border border-emerald-800/80 px-2.5 py-1 rounded-md">
                  100% Automated | 0 Time Wasted
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
