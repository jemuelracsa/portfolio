import React from 'react';
import { Cpu, Server, Layout, Database, Cloud, Code2, CheckCircle, ShieldCheck, Workflow } from 'lucide-react';
import { SKILL_CATEGORIES, PHILOSOPHY_POINTS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-cyan-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-sky-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-indigo-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-purple-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2 font-semibold">
            <Cpu className="w-4 h-4" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Infrastructure Matrix
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Battle-tested technologies and tooling utilized in production environments to build resilient, high-capacity systems.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="bg-slate-900/70 border border-slate-800/90 rounded-2xl p-6 hover:border-slate-700 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800">
                <div className="p-2 rounded-lg bg-slate-800/80">
                  {getIcon(cat.iconName)}
                </div>
                <h3 className="font-bold text-white text-base">
                  {cat.category}
                </h3>
              </div>

              <div className="space-y-3">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-800/40 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      <span className="text-xs sm:text-sm font-medium text-slate-200">
                        {skill.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60">
                        {skill.years}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded font-medium ${
                          skill.level === 'Expert'
                            ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                            : skill.level === 'Advanced'
                            ? 'bg-blue-500/10 text-blue-300 border border-blue-500/30'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy Showcase */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-1 font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Engineering Principles</span>
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
            How I Build & Architect Software
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mb-6 max-w-2xl">
            My engineering philosophy centers around reliability, observability, mathematical simplicity, and delivering measurable business impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PHILOSOPHY_POINTS.map((pt, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      {pt.title}
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 font-medium">
                      {pt.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pl-6">
                    {pt.description}
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
