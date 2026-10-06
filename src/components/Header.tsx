import React, { useState } from 'react';
import { Bell, Calendar, Download, Menu, X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CONFERENCE_INFO } from '../data/conferenceData';

interface HeaderProps {
  onOpenPreRegister: () => void;
  onOpenConceptNote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPreRegister, onOpenConceptNote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Call for Abstracts', href: '#abstracts' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Host & Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full shadow-sm">
      {/* Top institution bar matching reference design */}
      <div className="bg-[#042821] text-emerald-200/90 text-xs py-1.5 px-4 sm:px-8 border-b border-emerald-900/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-emerald-100">
              {CONFERENCE_INFO.organizer}
            </span>
            <span className="hidden md:inline text-emerald-400/60">•</span>
            <span className="hidden md:inline text-emerald-300/80">
              {CONFERENCE_INFO.university}, Bangladesh
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-[11px] text-emerald-300/90">
            <span className="hidden sm:inline bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60 text-emerald-300">
              Target: {CONFERENCE_INFO.targetMonth} — [Date to Be Announced]
            </span>
            <button 
              onClick={onOpenPreRegister}
              className="text-emerald-300 hover:text-white underline underline-offset-2 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Bell className="w-3 h-3" />
              <span>Get Priority Alerts</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav className="bg-[#02211b]/95 backdrop-blur-md text-white border-b border-emerald-800/40 px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center font-bold text-white shadow-md border border-emerald-400/30 group-hover:scale-105 transition-transform">
              <span className="text-base tracking-tighter">CU</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold tracking-tight text-lg text-white font-display">
                  IBC 2026
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Coming Soon
                </span>
              </div>
              <p className="text-[11px] text-emerald-300/75 leading-tight font-medium">
                2nd Int'l Biotechnology Conference
              </p>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-emerald-100/90">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-emerald-400 transition-colors py-1 relative text-xs tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenConceptNote}
              className="px-3.5 py-2 text-xs font-semibold text-emerald-200 hover:text-white border border-emerald-700/60 hover:border-emerald-500 rounded-md transition-all flex items-center gap-1.5 cursor-pointer bg-emerald-950/40"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Concept Note</span>
            </button>

            <button
              onClick={onOpenPreRegister}
              className="px-4 py-2 text-xs font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-md shadow-md shadow-emerald-900/30 transition-all flex items-center gap-1.5 hover:shadow-emerald-500/20 hover:scale-[1.02] cursor-pointer"
            >
              <span>REGISTER INTEREST</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-emerald-200 hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-3 border-t border-emerald-800/60 mt-3 space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm text-emerald-100 hover:bg-emerald-900/40 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConceptNote();
                }}
                className="w-full py-2.5 text-xs font-semibold text-center border border-emerald-700 text-emerald-200 rounded-md"
              >
                Download Concept Note (PDF)
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPreRegister();
                }}
                className="w-full py-2.5 text-xs font-bold text-center bg-emerald-400 text-slate-950 rounded-md"
              >
                Pre-Register / Notify Me
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
