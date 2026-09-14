import React from 'react';
import { ArrowDown, ArrowUpRight, Github, Mail, FileText, CheckCircle2, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenTerminal }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content (Col 7) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* Profile Avatar & Status Pill */}
            <div className="flex items-center gap-4">
              <div className="relative group shrink-0">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 opacity-75 blur-sm group-hover:opacity-100 transition duration-300" />
                <img
                  src={PERSONAL_INFO.avatar || '/profile.jpg'}
                  alt={PERSONAL_INFO.name}
                  id="hero-profile-avatar"
                  className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-cyan-400/90 shadow-xl"
                  onError={(e) => {
                    e.currentTarget.src = 'https://github.com/jemuelracsa.png';
                  }}
                />
                <div
                  className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-slate-950 border-2 border-slate-900 flex items-center justify-center shadow"
                  title="Available for immediate engagement"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>{PERSONAL_INFO.status}</span>
                </div>
                <div className="text-[11px] font-mono text-slate-400 flex items-center gap-2">
                  <span>5+ Years Experience</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-cyan-400">Independent Specialist</span>
                </div>
              </div>
            </div>

            {/* Name & Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <p className="mt-2 text-xl sm:text-2xl font-semibold text-slate-300">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Stop losing leads to slow follow-ups. I build simple, reliable <strong className="text-cyan-400 font-semibold">GoHighLevel</strong> systems that reply to new inquiries in seconds, book calls directly on your calendar, and keep your sales pipeline moving on autopilot.
            </p>

            {/* Key Value Points for Clients */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Instant text & email reply in under 45 seconds</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hands-free calendar booking & reminder texts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Done-for-you agency setups ready in minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Messages land straight in the inbox (never spam)</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#ghl-showcase"
                id="hero-ghl-showcase-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all transform active:scale-98"
              >
                See How It Works
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                id="hero-contact-btn"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-100 font-medium text-sm border border-slate-700 hover:border-slate-600 transition-all active:scale-98"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                Let's Talk About Your Project
              </a>

              <button
                onClick={onOpenResume}
                id="hero-resume-btn"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-white font-medium text-sm border border-slate-800 hover:border-slate-700 transition-all"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                View Resume
              </button>

              <button
                onClick={onOpenTerminal}
                id="hero-terminal-btn"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-slate-950 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-mono text-xs transition-all"
                title="Launch Interactive CLI"
              >
                <Terminal className="w-4 h-4" />
                <span>$ ghl --status</span>
              </button>
            </div>

            {/* Social / Profile links */}
            <div className="pt-2 flex items-center gap-5 text-sm text-slate-400">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                id="hero-github-link"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>github.com/{PERSONAL_INFO.githubUsername}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
              <span className="text-slate-700">•</span>
              <span className="text-slate-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* Code / Architecture Card Showcase (Col 5) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-5 shadow-2xl shadow-black/40 backdrop-blur-sm overflow-hidden">
              {/* Window Controls */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">client-results.config.ts</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  GUARANTEED_RESULTS
                </span>
              </div>

              {/* Code Snippet */}
              <pre className="font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto selection:bg-cyan-500/30">
                <code>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-400">myPromiseToYourBusiness</span> = &#123;{'\n'}
                  {'  '}leadReplyTime: <span className="text-emerald-300">'Under 45 seconds'</span>,{'\n'}
                  {'  '}calendarBooking: <span className="text-emerald-300">'100% automated'</span>,{'\n'}
                  {'  '}appointmentReminders: <span className="text-emerald-300">'Cut no-shows by 50%'</span>,{'\n'}
                  {'  '}messageDelivery: <span className="text-emerald-300">'99.8% inbox rate'</span>,{'\n'}
                  {'  '}wastedHours: <span className="text-emerald-300">'0 manual follow-ups needed'</span>,{'\n'}
                  {'  '}bottomLine: <span className="text-amber-300">'More booked calls & higher revenue'</span>{'\n'}
                  &#125;;{'\n\n'}
                  <span className="text-slate-500">// Built to run 24/7 without breaking</span>{'\n'}
                  <span className="text-purple-400">export default</span> <span className="text-blue-400">myPromiseToYourBusiness</span>;
                </code>
              </pre>

              {/* Quick interactive mini-badge */}
              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Avg. Reply: &lt; 45s | Inbox: 99.8%
                </span>
                <a
                  href="#ghl-showcase"
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                >
                  see how &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
