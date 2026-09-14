import React from 'react';
import { Briefcase, Calendar, MapPin, GraduationCap, ArrowUpRight } from 'lucide-react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2 font-semibold">
              <Briefcase className="w-4 h-4" />
              <span>Career History</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Work Experience & Impact
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Track record of building resilient software, collaborating with cross-functional teams, and delivering production systems at scale.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Continuously Shipping Since 2018</span>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 md:before:left-4 before:w-0.5 before:bg-slate-800">
          {EXPERIENCE_DATA.map((item) => (
            <div
              key={item.id}
              id={`experience-item-${item.id}`}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Timeline marker */}
              <div className="absolute left-1.5 md:left-2.5 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-200" />

              <div className="bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 transition-all duration-200 shadow-md">
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800/80">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-slate-300">
                      {item.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400 flex-wrap">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {item.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {item.location} ({item.type})
                    </span>
                  </div>
                </div>

                {/* Role Summary */}
                <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                  {item.summary}
                </p>

                {/* Key Bullet Points */}
                <ul className="space-y-2 mb-5">
                  {item.bulletPoints.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="text-xs sm:text-sm text-slate-400 flex items-start gap-2.5 leading-relaxed"
                    >
                      <span className="text-cyan-400 mt-1 font-mono font-bold text-xs">&rsaquo;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/60 text-slate-300 border border-slate-700/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-16 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-slate-800 text-cyan-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Education & Foundation</h3>
              <p className="text-xs text-slate-400 font-mono">Academic Background & Computer Science Fundamentals</p>
            </div>
          </div>

          {EDUCATION_DATA.map((edu, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <span className="text-sm font-semibold text-white">{edu.degree}</span>
                <span className="text-xs font-mono text-cyan-400">{edu.honors || edu.period}</span>
              </div>
              <p className="text-xs text-slate-400">{edu.school}</p>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
