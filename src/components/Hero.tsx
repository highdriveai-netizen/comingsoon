import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Globe, 
  ArrowRight, 
  FileText, 
  FileCheck2, 
  Sparkles, 
  Dna, 
  Users, 
  Microscope,
  CheckCircle,
  Share2
} from 'lucide-react';
import { CONFERENCE_INFO } from '../data/conferenceData';

interface HeroProps {
  onOpenPreRegister: () => void;
  onOpenConceptNote: () => void;
  onOpenTrackModal: (trackId?: number) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenPreRegister,
  onOpenConceptNote,
  onOpenTrackModal
}) => {
  const [quickEmail, setQuickEmail] = useState('');
  const [quickSubmitted, setQuickSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickEmail && quickEmail.includes('@')) {
      setQuickSubmitted(true);
      setTimeout(() => setQuickSubmitted(false), 5000);
      setQuickEmail('');
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-b from-[#03231d] via-[#042d25] to-[#021f19] text-white pt-10 pb-16 md:pt-14 md:pb-20 overflow-hidden border-b border-emerald-900/50">
      {/* Background scientific grid pattern & ambient radial glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.07] pointer-events-none"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Department Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-xs font-medium mb-6">
          <Dna className="w-3.5 h-3.5 text-emerald-400 animate-spin" style={{ animationDuration: '10s' }} />
          <span>Department of Genetic Engineering & Biotechnology • University of Chittagong</span>
          <span className="hidden sm:inline text-emerald-500/60">•</span>
          <span className="hidden sm:inline text-emerald-400 font-semibold">Official Coming Soon Preview</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Hero Title & Key Info */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                <span className="w-6 h-[2px] bg-emerald-400"></span>
                <span>{CONFERENCE_INFO.badge}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display leading-[1.15]">
                2nd International Biotechnology Conference <br className="hidden sm:inline" />
                <span className="text-emerald-400 underline decoration-emerald-500/40 underline-offset-8">
                  2026
                </span>
              </h1>
            </div>

            <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed max-w-2xl">
              Organized under the auspices of the Department of Genetic Engineering and Biotechnology (GEB).
              Gathering researchers, scientists, academic leaders, and industry pioneers to explore emerging
              frontiers in biotechnology and foster meaningful scientific collaboration across the globe.
            </p>

            {/* 3 Info Pill Badges matching screenshot */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-lg bg-[#021f19]/90 border border-emerald-800/60 flex items-start gap-3">
                <div className="p-2 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">Conference Date</div>
                  <div className="text-xs font-semibold text-white mt-0.5">{CONFERENCE_INFO.targetMonth}</div>
                  <div className="text-[10px] text-emerald-300/70">[Date TBA]</div>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-[#021f19]/90 border border-emerald-800/60 flex items-start gap-3">
                <div className="p-2 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">Venue & City</div>
                  <div className="text-xs font-semibold text-white mt-0.5">Univ. of Chittagong</div>
                  <div className="text-[10px] text-emerald-300/70">Chittagong, Bangladesh</div>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-[#021f19]/90 border border-emerald-800/60 flex items-start gap-3">
                <div className="p-2 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">Format</div>
                  <div className="text-xs font-semibold text-white mt-0.5">Int'l Conference</div>
                  <div className="text-[10px] text-emerald-300/70">In-Person & Plenary</div>
                </div>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={onOpenPreRegister}
                className="px-5 py-3 text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-md shadow-lg shadow-emerald-950/60 transition-all flex items-center gap-2 hover:scale-[1.02] cursor-pointer"
              >
                <span>REGISTER INTEREST NOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenTrackModal()}
                className="px-4 py-3 text-sm font-semibold text-emerald-200 hover:text-white bg-emerald-900/40 hover:bg-emerald-900/70 border border-emerald-700/60 rounded-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <FileCheck2 className="w-4 h-4 text-emerald-400" />
                <span>Submit Article Intent</span>
              </button>

              <button
                onClick={onOpenConceptNote}
                className="px-4 py-3 text-sm font-semibold text-emerald-300/90 hover:text-white border border-emerald-800/60 hover:border-emerald-600 rounded-md transition-all flex items-center gap-2 cursor-pointer bg-emerald-950/20"
              >
                <FileText className="w-4 h-4" />
                <span>View Scientific Program</span>
              </button>
            </div>

            {/* Quick 1-click notification bar */}
            <div className="pt-2">
              <form onSubmit={handleQuickSubmit} className="flex flex-col sm:flex-row gap-2 max-w-lg">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={quickEmail}
                    onChange={(e) => setQuickEmail(e.target.value)}
                    placeholder="Enter your academic / personal email for alerts"
                    className="w-full px-3.5 py-2.5 text-xs text-white bg-emerald-950/70 border border-emerald-800/80 rounded-md placeholder-emerald-400/50 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer shadow-sm"
                >
                  Notify When Portal Opens
                </button>
              </form>

              {quickSubmitted && (
                <div className="flex items-center gap-2 text-xs text-emerald-300 mt-2 animate-fadeIn">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Thank you! We will notify you immediately when registrations and abstract submissions go live.</span>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Reference Teaser Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#021f19]/90 border border-emerald-700/60 rounded-xl p-5 sm:p-6 shadow-2xl relative overflow-hidden backdrop-blur-md">
              {/* Top Card Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-emerald-800/60 mb-5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-semibold text-emerald-300">Call for Papers Opening Soon</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400/80 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800/50">
                  IBC 2026
                </span>
              </div>

              {/* Theme highlight box directly from image */}
              <div className="p-4 rounded-lg bg-emerald-950/80 border border-emerald-800/80 mb-5 space-y-1.5">
                <div className="text-[10px] font-bold tracking-wider uppercase text-emerald-400">
                  Conference Theme
                </div>
                <div className="text-base sm:text-lg font-bold text-white leading-snug font-display">
                  "{CONFERENCE_INFO.theme}"
                </div>
                <div className="text-xs text-emerald-300/80 pt-1 flex items-center justify-between">
                  <span>12 Thematic Research Areas</span>
                  <span className="text-emerald-400 font-semibold">Oral & Poster Tracks</span>
                </div>
              </div>

              {/* Teaser stats grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3 rounded-lg bg-[#032a22] border border-emerald-800/40">
                  <div className="text-[11px] text-emerald-300/70">Research Focus</div>
                  <div className="text-xl font-extrabold text-emerald-300 font-display">12 Themes</div>
                  <div className="text-[10px] text-emerald-400/60">From genomics to bioeconomy</div>
                </div>

                <div className="p-3 rounded-lg bg-[#032a22] border border-emerald-800/40">
                  <div className="text-[11px] text-emerald-300/70">Delegates Target</div>
                  <div className="text-xl font-extrabold text-emerald-300 font-display">{CONFERENCE_INFO.expectedDelegates}</div>
                  <div className="text-[10px] text-emerald-400/60">Academics & Industry</div>
                </div>

                <div className="p-3 rounded-lg bg-[#032a22] border border-emerald-800/40">
                  <div className="text-[11px] text-emerald-300/70">Presentations</div>
                  <div className="text-xl font-extrabold text-emerald-300 font-display">{CONFERENCE_INFO.presentationsCount}</div>
                  <div className="text-[10px] text-emerald-400/60">Oral & poster tracks</div>
                </div>

                <div className="p-3 rounded-lg bg-[#032a22] border border-emerald-800/40">
                  <div className="text-[11px] text-emerald-300/70">Institutions</div>
                  <div className="text-xl font-extrabold text-emerald-300 font-display">{CONFERENCE_INFO.institutionsCount}</div>
                  <div className="text-[10px] text-emerald-400/60">Universities & research bodies</div>
                </div>
              </div>

              {/* Action and Share */}
              <div className="pt-2 flex items-center justify-between gap-3 border-t border-emerald-800/50">
                <button
                  onClick={onOpenPreRegister}
                  className="w-full py-2.5 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-md text-center transition-colors shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Pre-Register to Secure Early Access</span>
                </button>
                <button
                  onClick={handleShare}
                  title="Share Conference Page"
                  className="p-2.5 bg-emerald-950 hover:bg-emerald-900 border border-emerald-800 text-emerald-300 rounded-md transition-colors cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              {copiedLink && (
                <div className="text-[11px] text-emerald-300 text-center mt-2 animate-fadeIn">
                  Conference link copied to clipboard!
                </div>
              )}

              <p className="text-[10px] text-emerald-400/60 text-center mt-3">
                * Numerical metrics above are demonstrative indicators for the upcoming official summit.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
