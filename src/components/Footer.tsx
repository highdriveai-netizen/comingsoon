import React from 'react';
import { ArrowUp, Mail, MapPin, ExternalLink, Dna } from 'lucide-react';
import { CONFERENCE_INFO } from '../data/conferenceData';

interface FooterProps {
  onOpenPreRegister: () => void;
  onOpenConceptNote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPreRegister, onOpenConceptNote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#021813] text-emerald-100/80 border-t border-emerald-900/60 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-emerald-900/40">
          
          {/* Brand Info Left matching screenshot */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Dna className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-base text-white tracking-tight font-display">
                  IBC 2026
                </span>
                <span className="text-[11px] text-emerald-300 block -mt-0.5">
                  2nd Int'l Biotechnology Conference
                </span>
              </div>
            </div>

            <p className="text-xs text-emerald-200/70 leading-relaxed max-w-sm">
              Hosted by the Department of Genetic Engineering & Biotechnology (GEB), University of Chittagong.
              Advancing scientific inquiry, international research synergy, and technological innovation.
            </p>

            <div className="space-y-1.5 text-xs text-emerald-300/80 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Faculty of Biological Sciences, CU, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`mailto:${CONFERENCE_INFO.email}`} className="hover:text-white underline">
                  [Official Email: {CONFERENCE_INFO.email}]
                </a>
              </div>
            </div>
          </div>

          {/* Conference Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white tracking-wider uppercase font-mono">
              Conference Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-emerald-400 transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  About GEB & Conference
                </a>
              </li>
              <li>
                <a href="#speakers" className="hover:text-emerald-400 transition-colors">
                  Keynote & Invited Speakers
                </a>
              </li>
              <li>
                <a href="#tracks" className="hover:text-emerald-400 transition-colors">
                  Scientific Agenda & Tracks
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-emerald-400 transition-colors">
                  Conference & Campus Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Authors & Delegates */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white tracking-wider uppercase font-mono">
              Authors & Delegates
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenPreRegister}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left font-semibold text-emerald-300"
                >
                  Register for Conference →
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPreRegister}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Submit Research Abstract
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenConceptNote}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Check Submission Guidelines
                </button>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  Secretariat & Help Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional Channels */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white tracking-wider uppercase font-mono">
              Institutional Channels
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>Facebook [Demo]</span>
                  <ExternalLink className="w-3 h-3 text-emerald-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>LinkedIn [Demo]</span>
                  <ExternalLink className="w-3 h-3 text-emerald-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>YouTube [Demo]</span>
                  <ExternalLink className="w-3 h-3 text-emerald-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://cu.ac.bd"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1"
                >
                  <span>cu.ac.bd</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar matching screenshot */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-400/60">
          <div>
            © 2026 2nd International Biotechnology Conference. All Rights Reserved. University of Chittagong.
          </div>

          <div className="flex items-center gap-4">
            <span>Demo Prototype for Organizing Committee</span>
            <span className="text-emerald-800">•</span>
            <button
              onClick={scrollToTop}
              className="text-emerald-300 hover:text-white font-medium flex items-center gap-1 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
