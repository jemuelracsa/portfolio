import React, { useState, useEffect } from 'react';
import { X, Printer, Copy, Check, Download, Mail, Github, Globe, MapPin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_DATA, SKILL_CATEGORIES, PROJECTS_DATA, EDUCATION_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const markdown = `# ${PERSONAL_INFO.name} — ${PERSONAL_INFO.title}
Email: ${PERSONAL_INFO.email} | GitHub: ${PERSONAL_INFO.github} | Location: ${PERSONAL_INFO.location}

## SUMMARY
${PERSONAL_INFO.bio}

## TECHNICAL SKILLS
${SKILL_CATEGORIES.map((c) => `- **${c.category}**: ${c.skills.map((s) => s.name).join(', ')}`).join('\n')}

## PROFESSIONAL EXPERIENCE
${EXPERIENCE_DATA.map(
  (exp) => `### ${exp.role} — ${exp.company} (${exp.period})
${exp.summary}
${exp.bulletPoints.map((b) => `- ${b}`).join('\n')}
Tech Stack: ${exp.technologies.join(', ')}
`
).join('\n')}

## FEATURED PROJECTS
${PROJECTS_DATA.map(
  (p) => `- **${p.title}** (${p.tags.join(', ')}): ${p.description} [${p.githubUrl}]`
).join('\n')}

## EDUCATION
${EDUCATION_DATA.map((e) => `- ${e.degree}, ${e.school} (${e.period})`).join('\n')}
`;

    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-4xl max-h-[92vh] overflow-hidden shadow-2xl flex flex-col text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-3 sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white font-mono">
              resume-{PERSONAL_INFO.name.toLowerCase().replace(' ', '-')}.pdf
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              UPDATED 2026
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              id="resume-copy-md-btn"
              title="Copy as Markdown"
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied MD!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy Markdown</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              id="resume-print-btn"
              title="Print / Save PDF"
              className="px-3 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              id="resume-close-btn"
              aria-label="Close resume modal"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-slate-950 text-slate-200 print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-lg font-semibold text-cyan-400 mt-0.5">
              {PERSONAL_INFO.title}
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-3 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.email}
              </span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white"
              >
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                github.com/{PERSONAL_INFO.githubUsername}
              </a>
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.website}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2">
              Professional Summary
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Core Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat, i) => (
                <div key={i} className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="font-semibold text-white block mb-1">{cat.category}</span>
                  <span className="text-slate-400 leading-relaxed">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-4">
              Work Experience
            </h2>
            <div className="space-y-6">
              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-base font-bold text-white">
                      {exp.role}{' '}
                      <span className="text-sm font-normal text-slate-400">
                        @ {exp.company}
                      </span>
                    </h3>
                    <span className="text-xs font-mono text-cyan-400">
                      {exp.period} | {exp.location}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 italic">{exp.summary}</p>
                  <ul className="space-y-1.5 pl-4 list-disc text-xs sm:text-sm text-slate-300">
                    {exp.bulletPoints.map((bp, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">
                        {bp}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-1 text-[11px] font-mono text-slate-500">
                    Tools: {exp.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Open Source & Systems */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3">
              Highlighted Open-Source & Distributed Systems
            </h2>
            <div className="space-y-3 text-xs sm:text-sm">
              {PROJECTS_DATA.slice(0, 3).map((p) => (
                <div key={p.id} className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-bold text-white">{p.title}</span>
                    <span className="text-[11px] font-mono text-slate-400">{p.role}</span>
                  </div>
                  <p className="text-xs text-slate-300 mb-1.5">{p.description}</p>
                  <div className="text-[11px] font-mono text-cyan-400">{p.tags.join(' • ')}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2">
              Education
            </h2>
            {EDUCATION_DATA.map((edu, idx) => (
              <div key={idx} className="text-xs sm:text-sm">
                <div className="flex items-center justify-between font-medium text-white">
                  <span>{edu.degree}</span>
                  <span className="font-mono text-slate-400">{edu.honors || edu.period}</span>
                </div>
                <div className="text-slate-400 text-xs">{edu.school}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
