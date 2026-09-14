import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenTerminal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'services', 'ghl-showcase', 'process', 'projects', 'reviews', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'What I Build', href: '#services', id: 'services' },
    { label: 'Automations', href: '#ghl-showcase', id: 'ghl-showcase' },
    { label: 'How I Work', href: '#process', id: 'process' },
    { label: 'Case Studies', href: '#projects', id: 'projects' },
    { label: 'Reviews', href: '#reviews', id: 'reviews' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Book a Call', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          id="nav-logo"
          className="group flex items-center gap-2.5 text-slate-100 focus:outline-none"
        >
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-cyan-400/60 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-200 shrink-0 bg-slate-900">
            <img
              src={PERSONAL_INFO.avatar || '/profile.jpg'}
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://github.com/jemuelracsa.png';
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {PERSONAL_INFO.title}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-3 py-1.5 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              id={`nav-link-${link.id}`}
              className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-150 ${
                activeSection === link.id
                  ? 'text-cyan-400 bg-slate-800/90 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onOpenTerminal}
            id="nav-terminal-btn"
            title="Open CLI Terminal"
            className="px-3 py-1.5 text-xs font-mono rounded-full text-slate-400 hover:text-cyan-300 hover:bg-slate-800/60 transition-colors flex items-center gap-1.5 ml-1"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden lg:inline">Terminal</span>
          </button>
        </nav>

        {/* Action CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            id="nav-resume-btn"
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-700/80 rounded-lg hover:border-slate-600 transition-all hover:shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            Resume
          </button>
          <a
            href="#contact"
            id="nav-hire-btn"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-lg transition-all shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/25"
          >
            Get in Touch
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            id="mobile-quick-resume-btn"
            aria-label="View Resume"
            className="p-2 text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 rounded-lg"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
            className="p-2.5 rounded-lg text-slate-300 hover:text-white bg-slate-900 border border-slate-800 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden bg-slate-950/95 border-b border-slate-800 px-5 pt-3 pb-6 space-y-3 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex items-center justify-between py-2 border-b border-slate-800/80 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Open to Opportunities
            </span>
            <span className="text-slate-500">github.com/{PERSONAL_INFO.githubUsername}</span>
          </div>

          <div className="grid grid-cols-1 gap-1 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                id={`mobile-nav-link-${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg ${
                  activeSection === link.id
                    ? 'text-cyan-400 bg-slate-900'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-slate-500">#0{navLinks.indexOf(link) + 1}</span>
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              id="mobile-nav-terminal-btn"
              className="flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg text-slate-300 hover:bg-slate-900 hover:text-cyan-400"
            >
              <span className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                Terminal Simulator
              </span>
              <span className="text-xs font-mono text-slate-500">CLI</span>
            </button>
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              id="mobile-resume-action"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-slate-200 bg-slate-900 border border-slate-700 rounded-lg hover:bg-slate-800"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              View Full Resume
            </button>
            <a
              href="#contact"
              id="mobile-contact-action"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-md"
            >
              Contact Me
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
