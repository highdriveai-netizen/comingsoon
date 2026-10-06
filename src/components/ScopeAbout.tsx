import React, { useState } from 'react';
import { 
  FileCheck, 
  Layers, 
  Globe2, 
  Award, 
  ArrowRight, 
  ExternalLink, 
  Building2, 
  CheckCircle2,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { CONFERENCE_INFO } from '../data/conferenceData';

interface ScopeAboutProps {
  onOpenPreRegister: () => void;
}

export const ScopeAbout: React.FC<ScopeAboutProps> = ({ onOpenPreRegister }) => {
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50/50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with dash prefix matching screenshot */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-1.5">
            <span className="w-5 h-[2px] bg-emerald-600"></span>
            <span>Academic Background & Scope</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight">
            About the 2nd International Biotechnology Conference 2026
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
            Following the monumental success of the National Biotechnology Conference (NBC 2023), the Department
            of Genetic Engineering & Biotechnology (GEB) at the University of Chittagong is proud to convene the
            international research community for the 2026 edition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative & 4 Feature Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-slate-700 text-sm leading-relaxed space-y-3.5">
              <p>
                The <strong className="text-slate-900">2nd International Biotechnology Conference 2026 (IBC 2026)</strong> provides a premier
                interdisciplinary platform for researchers, scientists, academic scholars, and biotechnology
                industry pioneers to present groundbreaking findings, discuss emerging challenges, and foster
                cross-border collaborations.
              </p>
              <p>
                Organized under the auspices of the <strong className="text-emerald-900">Department of Genetic Engineering and Biotechnology (GEB), University of Chittagong</strong>,
                this three-day international congress will feature plenary addresses by distinguished world authorities,
                high-level oral presentations, competitive scientific poster exhibitions, hands-on bioinformatics workshops,
                and dedicated industry-academia networking roundtables.
              </p>
              <p className="text-xs text-slate-500 italic">
                Special emphasis is placed on empowering young researchers and student investigators through
                the <em>Young Emerging Biotechnologist Spotlight</em>, career guidance colloquiums, and meritorious
                research recognition awards.
              </p>
            </div>

            {/* 4 Feature cards matching screenshot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-lg bg-white border border-slate-200/90 shadow-2xs hover:border-emerald-300 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-emerald-50 text-emerald-700 shrink-0 border border-emerald-100">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Peer-Reviewed Proceedings</h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                      Indexed conference abstracts and journal special issue publication opportunities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white border border-slate-200/90 shadow-2xs hover:border-emerald-300 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-emerald-50 text-emerald-700 shrink-0 border border-emerald-100">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">12 Multidisciplinary Tracks</h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                      Covering genomics, pharma, agricultural, and environmental biotechnology.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white border border-slate-200/90 shadow-2xs hover:border-emerald-300 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-emerald-50 text-emerald-700 shrink-0 border border-emerald-100">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Global Academic Network</h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                      Interaction with international scholars, laboratory directors, and faculty.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white border border-slate-200/90 shadow-2xs hover:border-emerald-300 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-emerald-50 text-emerald-700 shrink-0 border border-emerald-100">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Young Scientist Awards</h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                      Formal recognition and cash grants for outstanding student presentations.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Read institutional background button */}
            <div className="pt-2">
              <button
                onClick={() => setShowHistoryModal(true)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 transition-colors cursor-pointer group"
              >
                <span>Read Full Institutional Background & History</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Column: Lab image & stats box matching screenshot */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
              
              {/* Lab Photo Container */}
              <div className="relative h-64 overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80"
                  alt="Department of GEB laboratory research facility"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="inline-block bg-emerald-500/90 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded mb-1">
                    Department of GEB • Established 2004
                  </div>
                  <p className="text-xs font-medium text-emerald-100">
                    Faculty of Biological Sciences, University of Chittagong
                  </p>
                </div>
              </div>

              {/* Research Metrics matching screenshot */}
              <div className="p-4 sm:p-5">
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <div className="text-[11px] font-semibold text-slate-500">Research Focus</div>
                    <div className="text-lg font-extrabold text-emerald-700 font-display">12 Themes</div>
                    <div className="text-[10px] text-slate-400">From genomics to bioeconomy</div>
                  </div>

                  <div>
                    <div className="text-[11px] font-semibold text-slate-500">Delegates Target</div>
                    <div className="text-lg font-extrabold text-emerald-700 font-display">[500+ Demo]</div>
                    <div className="text-[10px] text-slate-400">Academics & Students</div>
                  </div>

                  <div>
                    <div className="text-[11px] font-semibold text-slate-500">Presentations</div>
                    <div className="text-lg font-extrabold text-emerald-700 font-display">[100+ Demo]</div>
                    <div className="text-[10px] text-slate-400">Oral & poster tracks</div>
                  </div>

                  <div>
                    <div className="text-[11px] font-semibold text-slate-500">Institutions</div>
                    <div className="text-lg font-extrabold text-emerald-700 font-display">[50+ Demo]</div>
                    <div className="text-[10px] text-slate-400">Universities & research bodies</div>
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between">
                  <p className="text-[10px] text-slate-400 italic">
                    * Numerical metrics above are demonstrative placeholders for the website prototype.
                  </p>
                  <button
                    onClick={onOpenPreRegister}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-900 cursor-pointer"
                  >
                    Join As Delegate →
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Institutional Background Modal */}
      {showHistoryModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 max-h-[85vh] overflow-y-auto animate-scaleUp">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-emerald-600" />
                <h3 className="text-base font-bold text-slate-900">
                  Institutional Background & Conference Legacy
                </h3>
              </div>
              <button
                onClick={() => setShowHistoryModal(false)}
                className="p-1 rounded text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-4 text-xs text-slate-600 leading-relaxed">
              <p>
                The <strong>Department of Genetic Engineering and Biotechnology (GEB)</strong> at the University of Chittagong
                was established in <strong>2004</strong> with a forward-looking vision to advance molecular life sciences and
                biotechnology education in Bangladesh.
              </p>
              <p>
                For over two decades, through rigorous teaching and internationally recognized research, the department has
                trained graduates who are now serving around the globe across academia, clinical genomics, agriculture,
                and high-tech biotechnology enterprises. Faculty and scholars regularly publish in premier high-impact
                international journals.
              </p>
              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100 text-emerald-900 space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>The Legacy of NBC 2023 & Genesis of IBC 2026</span>
                </div>
                <p>
                  The previous National Biotechnology Conference (NBC 2023) brought together over 450 delegates, 80 scientific
                  papers, and renowned plenary speakers. Building on that momentum, the 2026 edition expands into a fully
                  international research summit welcoming worldwide participants.
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://cu.ac.bd"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-xs font-medium inline-flex items-center gap-1"
                >
                  <span>Visit University of Chittagong Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setShowHistoryModal(false)}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-semibold cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
