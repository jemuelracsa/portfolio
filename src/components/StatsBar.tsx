import React from 'react';
import { STATS_DATA } from '../data/portfolioData';
import { Activity, Layers, Clock, Award } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const icons = [Clock, Layers, Activity, Award];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-16 relative z-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-xl backdrop-blur-md">
        {STATS_DATA.map((stat, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <div
              key={idx}
              className="flex flex-col p-3 rounded-xl hover:bg-slate-800/40 transition-colors border border-transparent hover:border-slate-800"
            >
              <div className="flex items-center gap-2 mb-1">
                <Icon className="w-4 h-4 text-cyan-400" />
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                  {stat.value}
                </span>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200">
                {stat.label}
              </span>
              <span className="text-[11px] text-slate-400 mt-0.5">
                {stat.detail}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
