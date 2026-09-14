import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS_DATA, SKILL_CATEGORIES } from '../data/portfolioData';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

interface CommandOutput {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  isOpen,
  onClose,
  onOpenResume,
}) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      id: 'welcome',
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">
            Jemuel Racsa CLI Environment [Version 2.4.0-release]
          </p>
          <p className="text-slate-400">
            Type <span className="text-cyan-300 font-mono">help</span> to view available commands, or click any suggestion below.
          </p>
        </div>
      ),
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isExpanded, setIsExpanded] = useState(false);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const quickCommands = ['help', 'whoami', 'skills', 'projects', 'hire', 'clear'];

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const id = Date.now().toString();

    let outputContent: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        outputContent = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-300 font-semibold mb-1">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs">
              <div><span className="text-cyan-400 font-mono">whoami</span> — Summary biography</div>
              <div><span className="text-cyan-400 font-mono">skills</span> — Technical capabilities</div>
              <div><span className="text-cyan-400 font-mono">projects</span> — Key production systems</div>
              <div><span className="text-cyan-400 font-mono">contact</span> — Reach out / email</div>
              <div><span className="text-cyan-400 font-mono">resume</span> — Open interactive resume</div>
              <div><span className="text-cyan-400 font-mono">hire</span> — Employment availability</div>
              <div><span className="text-cyan-400 font-mono">github</span> — Open GitHub profile</div>
              <div><span className="text-cyan-400 font-mono">clear</span> — Wipe terminal screen</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        outputContent = (
          <div className="space-y-1 text-slate-300">
            <p><span className="text-cyan-400 font-bold">{PERSONAL_INFO.name}</span> — {PERSONAL_INFO.title}</p>
            <p className="text-slate-400 text-xs">{PERSONAL_INFO.bio}</p>
            <p className="text-emerald-400 text-xs mt-1">Status: {PERSONAL_INFO.status}</p>
          </div>
        );
        break;

      case 'skills':
        outputContent = (
          <div className="space-y-2 text-slate-300">
            <p className="text-cyan-300 font-semibold">Core Technical Stack:</p>
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="text-xs">
                <span className="text-slate-400 font-bold">{cat.category}: </span>
                <span className="text-slate-200">
                  {cat.skills.map((s) => `${s.name} (${s.level})`).join(', ')}
                </span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        outputContent = (
          <div className="space-y-2 text-slate-300 text-xs">
            <p className="text-cyan-300 font-semibold">Highlighted Projects:</p>
            {PROJECTS_DATA.map((p) => (
              <div key={p.id} className="border-l-2 border-cyan-500 pl-2 py-0.5">
                <p className="font-bold text-white">{p.title} <span className="font-normal text-slate-400">[{p.category}]</span></p>
                <p className="text-slate-400">{p.tagline}</p>
                <p className="text-cyan-400 font-mono text-[11px]">{p.tags.join(' • ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        outputContent = (
          <div className="space-y-1 text-slate-300 text-xs">
            <p className="text-cyan-300 font-semibold">Get in Touch:</p>
            <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-400 underline">{PERSONAL_INFO.email}</a></p>
            <p>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{PERSONAL_INFO.github}</a></p>
            <p>Location: {PERSONAL_INFO.location}</p>
          </div>
        );
        break;

      case 'resume':
      case 'cat resume.txt':
        outputContent = (
          <div className="text-xs text-slate-300">
            <p className="text-emerald-400 font-semibold">Opening full resume view...</p>
            <p className="text-slate-400">Triggered resume viewer modal.</p>
          </div>
        );
        onOpenResume();
        break;

      case 'hire':
      case 'sudo hire jemuel':
        outputContent = (
          <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-lg text-emerald-300 text-xs space-y-1">
            <p className="font-bold">STATUS: Available for Full-Time & High-Impact Contracts</p>
            <p>Looking for: Senior / Lead Full-Stack or Backend Engineer roles.</p>
            <p>Email: <span className="underline font-mono">{PERSONAL_INFO.email}</span></p>
          </div>
        );
        break;

      case 'github':
        window.open(PERSONAL_INFO.github, '_blank');
        outputContent = <p className="text-xs text-slate-400">Opened {PERSONAL_INFO.github} in a new tab.</p>;
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        outputContent = (
          <p className="text-xs text-rose-400 font-mono">
            zsh: command not found: {trimmed}. Type <span className="text-cyan-400 font-semibold">help</span> for commands list.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { id, command: cmdStr, output: outputContent }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < commandHistory.length) {
          setHistoryIndex(nextIdx);
          setInput(commandHistory[commandHistory.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInput(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div
      id="terminal-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={`bg-slate-950 border border-slate-700 rounded-2xl w-full shadow-2xl flex flex-col font-mono text-xs sm:text-sm overflow-hidden transition-all duration-200 ${
          isExpanded ? 'max-w-5xl h-[85vh]' : 'max-w-3xl h-[550px]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Title Bar */}
        <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <button
                onClick={onClose}
                aria-label="Close terminal"
                className="w-3 h-3 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors"
              />
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                aria-label="Toggle full terminal"
                className="w-3 h-3 rounded-full bg-amber-500 hover:bg-amber-600 transition-colors"
              />
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                aria-label="Maximize terminal"
                className="w-3 h-3 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors"
              />
            </div>
            <span className="ml-3 text-xs text-slate-400 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              jemuel@cloud-box: ~ (zsh)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded text-slate-400 hover:text-white"
            >
              {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="bg-slate-900/50 border-b border-slate-800/80 px-4 py-2 flex items-center gap-1.5 overflow-x-auto text-xs">
          <span className="text-[11px] text-slate-500 mr-1">Suggestions:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-cyan-300 text-[11px] font-mono border border-slate-700/60 transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Body */}
        <div
          className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 text-slate-200"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item) => (
            <div key={item.id} className="space-y-1.5">
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="text-emerald-400 font-bold">jemuel@portfolio</span>
                <span className="text-slate-500">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-slate-400">$</span>
                <span className="text-white font-medium">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}

          {/* Active Prompt Line */}
          <div className="flex items-center gap-2 text-cyan-400 pt-1">
            <span className="text-emerald-400 font-bold">jemuel@portfolio</span>
            <span className="text-slate-500">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-slate-400">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-white focus:outline-none caret-cyan-400 font-mono text-xs sm:text-sm"
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
            <button
              onClick={() => executeCommand(input)}
              className="text-slate-500 hover:text-cyan-400 p-1"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>

          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Footer */}
        <div className="bg-slate-900/80 px-4 py-2 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between font-mono">
          <span>Press [Enter] to run command • [Up/Down] for history</span>
          <span className="text-cyan-500">status: connected</span>
        </div>
      </div>
    </div>
  );
};
