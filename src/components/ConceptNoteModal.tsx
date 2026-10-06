import React from 'react';
import { X, FileText, Download, CheckCircle, BookOpen, Printer, Building2 } from 'lucide-react';
import { CONFERENCE_INFO } from '../data/conferenceData';

interface ConceptNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPreRegister: () => void;
}

export const ConceptNoteModal: React.FC<ConceptNoteModalProps> = ({
  isOpen,
  onClose,
  onOpenPreRegister,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden my-6 max-h-[90vh] flex flex-col animate-scaleUp">
        
        {/* Top Header */}
        <div className="bg-[#03261f] text-white p-5 flex items-center justify-between border-b border-emerald-900/40 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
                Official Document Preview
              </span>
              <h3 className="text-base font-bold text-white font-display">
                IBC 2026 Concept Note & Author Guidelines
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-emerald-300 hover:text-white hover:bg-emerald-900/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-700 leading-relaxed">
          
          {/* Institutional Banner */}
          <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200/80 flex items-start gap-3">
            <Building2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-slate-900 text-sm">
                2nd International Biotechnology Conference 2026 (IBC 2026)
              </h4>
              <p className="text-xs text-emerald-900 mt-0.5">
                Organized by the Department of Genetic Engineering & Biotechnology (GEB), University of Chittagong.
              </p>
            </div>
          </div>

          {/* Section 1: Executive Summary */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-1.5 pb-1 border-b border-slate-200">
              1. Executive Summary & Purpose
            </h4>
            <p>
              Biotechnology stands at the vanguard of modern scientific discovery, offering sustainable solutions
              for global food security, climate adaptation, medical diagnostics, targeted therapeutics, and industrial
              sustainability. Following the resounding success of the National Biotechnology Conference (NBC 2023),
              the Department of Genetic Engineering and Biotechnology (GEB) at the University of Chittagong convenes
              the 2nd International Biotechnology Conference 2026.
            </p>
          </div>

          {/* Section 2: Structure & Peer-Review */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-1.5 pb-1 border-b border-slate-200">
              2. Scientific Structure & Abstract Criteria
            </h4>
            <ul className="space-y-1.5 list-disc list-inside text-slate-600 pl-1">
              <li><strong>Submission Types:</strong> Original empirical research, comprehensive clinical reviews, technological case studies.</li>
              <li><strong>Abstract Format:</strong> Structured format containing: Background, Methodology, Key Results, and Conclusion (Strictly ≤ 250 words).</li>
              <li><strong>Presentation Formats:</strong> Competitive Oral Sessions (15 minutes + 5 minutes Q&A) and Interactive Poster Sessions (A0 portrait).</li>
              <li><strong>Peer Review:</strong> Double-blind evaluation by international scientific advisory committees.</li>
            </ul>
          </div>

          {/* Section 3: Publications & Indexing */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-1.5 pb-1 border-b border-slate-200">
              3. Publications & Special Issues
            </h4>
            <p>
              All accepted and registered abstracts will be compiled into the official <em>IBC 2026 Conference Proceedings</em> with registered ISBN/DOI. Meritorious authors will be invited to submit expanded full manuscripts for peer-reviewed publication in partner journals indexed in Scopus and Web of Science.
            </p>
          </div>

          {/* Section 4: Venue & Travel Logistics */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-1.5 pb-1 border-b border-slate-200">
              4. Venue & Accommodation Assistance
            </h4>
            <p>
              The conference will be held at the sprawling scenic campus of the <strong>University of Chittagong</strong>, nestled amid natural rolling hills. Dedicated shuttle transit, airport reception for international delegates, and guest house reservations will be arranged by the Secretariat Hospitality Sub-Committee.
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-[11px] text-slate-500">
            Document Version: Rev-2.0 (Preliminary Prospectus)
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3.5 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Document</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenPreRegister();
              }}
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded text-xs font-bold transition-colors cursor-pointer"
            >
              Pre-Register for Conference
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
