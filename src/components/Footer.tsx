import React from 'react';
import { ArrowUp, Github, Mail, Globe, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#hero"
              className="flex items-center gap-2.5 text-white font-bold text-base mb-1"
            >
              <img
                src={PERSONAL_INFO.avatar || '/profile.jpg'}
                alt={PERSONAL_INFO.name}
                className="w-7 h-7 rounded-full object-cover border border-cyan-500/50"
                onError={(e) => {
                  e.currentTarget.src = 'https://github.com/jemuelracsa.png';
                }}
              />
              <span>{PERSONAL_INFO.name}</span>
            </a>
            <p className="text-slate-500 max-w-sm">
              {PERSONAL_INFO.title} • {PERSONAL_INFO.tagline}
            </p>
          </div>

          {/* Socials & Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              id="footer-github-link"
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              id="footer-email-link"
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
              title="Send Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.website}
              target="_blank"
              rel="noreferrer"
              id="footer-website-link"
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
              title="GitHub Pages Live URL"
            >
              <Globe className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              id="footer-back-to-top-btn"
              className="flex items-center gap-1 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors border border-slate-800 font-mono text-xs"
              title="Scroll to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Credits & Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Available for GoHighLevel setups, automations & client projects.
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>https://jemuelracsa.github.io/portfolio/</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
