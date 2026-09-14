import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Copy, Check, Github, MapPin, Clock, MessageSquare, AlertCircle, Calendar, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactMessage } from '../types';

export const ContactSection: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'message' | 'call'>('call');
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    email: '',
    subject: '',
    inquiryType: 'GoHighLevel Setup & Workflows',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulated client-side submission with mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      inquiryType: 'Full-Time Employment',
      message: '',
    });
    setIsSuccess(false);
    setErrorMessage(null);
  };

  const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    `[${formData.inquiryType}] ${formData.subject || 'Portfolio Inquiry'}`
  )}&body=${encodeURIComponent(
    `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2 font-semibold">
            <MessageSquare className="w-4 h-4" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Talk About Your Project
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Have a project or need help setting up GoHighLevel? Send me a quick message and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Direct Info (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl">
              {/* Profile Card Info */}
              <div className="flex items-center gap-4 pb-5 mb-5 border-b border-slate-800/80">
                <div className="relative shrink-0">
                  <img
                    src={PERSONAL_INFO.avatar || '/profile.jpg'}
                    alt={PERSONAL_INFO.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-cyan-400/80 shadow-md"
                    onError={(e) => {
                      e.currentTarget.src = 'https://github.com/jemuelracsa.png';
                    }}
                  />
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-900" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono">
                    {PERSONAL_INFO.title}
                  </p>
                  <span className="text-[11px] text-emerald-400 font-medium">
                    Available for new projects & clients
                  </span>
                </div>
              </div>

              <h3 className="text-sm font-bold text-white mb-2">
                Message Me Directly
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                Email me anytime or use the simple form here. I read every message and usually reply within a few hours.
              </p>

              {/* Email Copy Card */}
              <div className="p-3.5 bg-slate-950/70 border border-slate-800 rounded-xl flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-[11px] font-mono text-slate-400">Direct Email</span>
                    <span className="text-xs sm:text-sm font-mono font-medium text-slate-200 truncate">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  id="contact-copy-email-btn"
                  title="Copy email to clipboard"
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Quick Info Grid */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Response Time: Usually within a few hours</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Location: {PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <Github className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cyan-300 underline underline-offset-4 decoration-slate-700"
                  >
                    github.com/{PERSONAL_INFO.githubUsername}
                  </a>
                </div>
              </div>
            </div>

            {/* Client Notice */}
            <div className="p-5 bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-500/20 rounded-2xl">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                READY TO START
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Whether you need a full GoHighLevel setup from scratch, faster lead follow-up, or ongoing tech support, I'm ready to help you get it running smoothly.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form / Call Scheduler (Col 7) */}
          <div className="lg:col-span-7">
            {/* Tab Selector: Book a Free Call vs Direct Message */}
            <div className="flex items-center gap-2 mb-4 p-1.5 bg-slate-900/90 border border-slate-800 rounded-2xl">
              <button
                type="button"
                onClick={() => setActiveMode('call')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeMode === 'call'
                    ? 'bg-cyan-400 text-slate-950 shadow-md font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Free Call</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-950/20 text-slate-900 font-bold">
                  Fastest
                </span>
              </button>
              <button
                type="button"
                onClick={() => setActiveMode('message')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeMode === 'message'
                    ? 'bg-cyan-400 text-slate-950 shadow-md font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Mail className="w-4 h-4" />
                <span>Send a Message</span>
              </button>
            </div>

            {activeMode === 'call' ? (
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>30-MIN STRATEGY & DISCOVERY SESSION</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">100% Free</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                  Get on a call with me and let's talk it through.
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  We'll audit your current lead handling and tech stack, map out where leads or hours are slipping through the cracks, and design the exact GoHighLevel architecture your business needs to scale.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>No aggressive sales pitch — pure engineering & automation advice</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Instant calendar invite with Google Meet link delivered</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/90 border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold text-white block">Ready to pick a time on my calendar?</span>
                    <span className="text-[11px] text-slate-400">Available across US, UK, Australia & Asia-Pacific timezones</span>
                  </div>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent('Booking a 30-Min Systems Call')}&body=${encodeURIComponent("Hi Jemuel,\n\nI'd like to book a 30-minute discovery call to discuss our GoHighLevel automations and systems.\n\nMy preferred days/times are:\n\nLooking forward to speaking!")}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/25 transition-all shrink-0 active:scale-98"
                  >
                    <span>Request Discovery Time</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              {isSuccess ? (
                <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Message Prepared!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{formData.name}</span>. Your inquiry regarding <span className="text-cyan-300 font-mono">{formData.inquiryType}</span> is ready.
                  </p>

                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={mailtoLink}
                      id="contact-open-mail-client-btn"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs shadow-md transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      Send via Email App
                    </a>
                    <button
                      onClick={handleResetForm}
                      id="contact-send-another-btn"
                      className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" id="portfolio-contact-form">
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-medium text-slate-300 mb-1.5"
                      >
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sarah Connor"
                        className="w-full px-3.5 py-2.5 bg-slate-950/70 border border-slate-800 rounded-lg text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-medium text-slate-300 mb-1.5"
                      >
                        Your Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-3.5 py-2.5 bg-slate-950/70 border border-slate-800 rounded-lg text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-inquiry-type"
                        className="block text-xs font-medium text-slate-300 mb-1.5"
                      >
                        How Can I Help You?
                      </label>
                      <select
                        id="contact-inquiry-type"
                        value={formData.inquiryType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            inquiryType: e.target.value as ContactMessage['inquiryType'],
                          })
                        }
                        className="w-full px-3.5 py-2.5 bg-slate-950/70 border border-slate-800 rounded-lg text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
                      >
                        <option value="GoHighLevel Setup & Workflows">GoHighLevel Setup & Workflows</option>
                        <option value="GHL Snapshot & SaaS Mode">Turnkey Snapshot & SaaS Setup</option>
                        <option value="API & Custom Webhook Integration">API & Custom Integrations</option>
                        <option value="Full-Time Employment">Full-Time / Dedicated Hire</option>
                        <option value="Contract / Consulting">Project Contract / Consulting</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-xs font-medium text-slate-300 mb-1.5"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="contact-subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Need help automating lead follow-up"
                        className="w-full px-3.5 py-2.5 bg-slate-950/70 border border-slate-800 rounded-lg text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me a bit about your business and what you'd like to achieve..."
                      className="w-full px-3.5 py-2.5 bg-slate-950/70 border border-slate-800 rounded-lg text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      id="contact-submit-btn"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-sm shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-150 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
