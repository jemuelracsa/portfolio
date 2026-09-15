import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowRight, Github, Mail, FileText, CheckCircle2, Terminal, Sparkles, Zap, Video, Calendar, Shield, Activity } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenTerminal }) => {
  const [activeTelemetryStep, setActiveTelemetryStep] = useState(0);

  const telemetrySteps = [
    { label: 'Inbound Lead Opt-In', detail: 'Form submitted via Facebook Ad', time: '0.0s', status: 'Triggered' },
    { label: 'Speed-to-Lead SMS', detail: 'Personalized text sent to prospect', time: '+0.8s', status: 'Delivered' },
    { label: 'Conversational AI', detail: 'Answered inquiry & provided link', time: '+18s', status: 'Replied' },
    { label: 'Appointment Locked', detail: 'Slot booked on Google Calendar', time: '+34s', status: 'Confirmed' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTelemetryStep((prev) => (prev + 1) % 4);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content (Col 7) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* Top Pill / Identity Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold shadow-sm backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>SYSTEMS & GOHIGHLEVEL CONSULTANT</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span>Available for Systems Builds & Roles</span>
              </div>
            </div>

            {/* High-Impact Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Automated Systems That Turn{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400">
                  Leads Into Booked Clients.
                </span>
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-medium text-slate-300">
                Hi, I'm <strong className="text-white font-bold">{PERSONAL_INFO.name}</strong>, a GoHighLevel systems architect building reliable, zero-touch automations for high-growth businesses.
              </p>
            </div>

            {/* Value Proposition Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Stop losing revenue to slow replies and messy spreadsheets. I engineer custom <strong className="text-cyan-400 font-semibold">GoHighLevel CRM workflows</strong>, automated booking pipelines, and custom API integrations that reply in under 45 seconds, <strong className="text-slate-100 font-semibold">with video walkthroughs and team SOPs included on every build.</strong>
            </p>

            {/* Xander Roque Style Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/40 border border-slate-800/80">
                <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>&lt; 45s Speed-to-Lead text & email</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/40 border border-slate-800/80">
                <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hands-free calendar booking & reminders</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/40 border border-slate-800/80">
                <Video className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Loom video walkthroughs + team SOPs</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/40 border border-slate-800/80">
                <Shield className="w-4 h-4 text-blue-400 shrink-0" />
                <span>99.8% Inbox placement & A2P 10DLC verified</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                id="hero-book-call-btn"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/20 transition-all transform active:scale-98"
              >
                <span>Book a Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#ghl-showcase"
                id="hero-explore-systems-btn"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 font-semibold text-sm border border-slate-700/80 hover:border-slate-600 transition-all active:scale-98"
              >
                <span>Explore Systems & Workflows</span>
                <ArrowDown className="w-4 h-4 text-cyan-400" />
              </a>

              <button
                onClick={onOpenResume}
                id="hero-resume-btn"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-slate-300 hover:text-white font-medium text-xs sm:text-sm border border-slate-800 hover:border-slate-700 transition-all"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Resume</span>
              </button>

              <button
                onClick={onOpenTerminal}
                id="hero-terminal-btn"
                className="inline-flex items-center gap-2 px-3.5 py-3.5 rounded-xl bg-slate-950 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-mono text-xs transition-all"
                title="Launch Interactive CLI"
              >
                <Terminal className="w-4 h-4" />
                <span>$ ghl</span>
              </button>
            </div>

            {/* Profile & Location Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-5 text-xs text-slate-400">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                id="hero-github-link"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>github.com/{PERSONAL_INFO.githubUsername}</span>
              </a>
              <span className="text-slate-700">•</span>
              <span className="text-slate-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Philippines / Serving US, UK & Global Clients</span>
              </span>
            </div>
          </div>

          {/* Interactive Live System Telemetry Card (Col 5) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-slate-900/95 border border-slate-800/90 p-6 shadow-2xl shadow-black/60 backdrop-blur-md overflow-hidden">
              {/* Top Bar with Live Indicator */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    live-system-telemetry.ghl
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  SYSTEM_OPTIMAL
                </span>
              </div>

              {/* Headshot & Consultant Info Header */}
              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-950/70 border border-slate-800/70 mb-5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400/80 shrink-0">
                  <img
                    src={PERSONAL_INFO.avatar || '/profile.jpg'}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://github.com/jemuelracsa.png';
                    }}
                  />
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-xs font-bold text-white tracking-tight flex items-center gap-1.5">
                    <span>{PERSONAL_INFO.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  </h4>
                  <p className="text-[11px] font-mono text-cyan-300 truncate">
                    Lead Systems & Automation Architect
                  </p>
                  <p className="text-[10px] text-slate-400">
                    GoHighLevel Specialist • 5+ Years Exp
                  </p>
                </div>
              </div>

              {/* Live Step-by-Step Flow Simulation */}
              <div className="space-y-2 mb-5">
                <div className="text-[11px] font-mono uppercase text-slate-400 flex items-center justify-between mb-2">
                  <span>Live Speed-to-Lead Execution:</span>
                  <span className="text-cyan-400 font-bold">Total: &lt; 38s</span>
                </div>

                {telemetrySteps.map((step, idx) => {
                  const isCurrent = activeTelemetryStep === idx;
                  const isDone = activeTelemetryStep > idx;
                  return (
                    <div
                      key={step.label}
                      className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-between text-xs ${
                        isCurrent
                          ? 'bg-cyan-500/10 border-cyan-500/50 text-white shadow-sm'
                          : isDone
                          ? 'bg-slate-950/60 border-slate-800/60 text-slate-300'
                          : 'bg-slate-950/30 border-slate-900/60 text-slate-500'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                            isCurrent
                              ? 'bg-cyan-400 text-slate-950 animate-pulse'
                              : isDone
                              ? 'bg-emerald-500/20 text-emerald-400'
                              : 'bg-slate-800 text-slate-500'
                          }`}
                        >
                          {idx + 1}
                        </div>
                        <div>
                          <p className="font-semibold">{step.label}</p>
                          <p className="text-[10px] text-slate-400">{step.detail}</p>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-mono text-[10px] text-cyan-300">{step.time}</span>
                        <span className="block text-[9px] font-mono text-slate-400 uppercase">{step.status}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Metric Badges */}
              <div className="pt-3 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800/60">
                  <span className="text-[10px] font-mono text-slate-400 block">Reply Speed</span>
                  <span className="text-xs sm:text-sm font-bold font-mono text-emerald-400">&lt; 45s</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800/60">
                  <span className="text-[10px] font-mono text-slate-400 block">Show-Up</span>
                  <span className="text-xs sm:text-sm font-bold font-mono text-cyan-400">+38%</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800/60">
                  <span className="text-[10px] font-mono text-slate-400 block">Delivery</span>
                  <span className="text-xs sm:text-sm font-bold font-mono text-amber-400">99.8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
