import React from 'react';
import { 
  FileText, 
  CheckCircle, 
  BookOpen, 
  ArrowRight, 
  Check, 
  Sparkles,
  Download
} from 'lucide-react';

interface CallForAbstractsPreviewProps {
  onOpenPreRegister: () => void;
  onOpenGuidelines: () => void;
}

export const CallForAbstractsPreview: React.FC<CallForAbstractsPreviewProps> = ({
  onOpenPreRegister,
  onOpenGuidelines
}) => {
  return (
    <section id="abstracts" className="bg-[#032922] text-white py-14 sm:py-16 border-b border-emerald-900/60 relative overflow-hidden">
      {/* Background subtle mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column matching screenshot */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-950 text-emerald-400 text-xs font-semibold border border-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>CALL FOR ORIGINAL SCIENTIFIC CONTRIBUTIONS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Call for Abstracts
            </h2>

            <p className="text-emerald-100/85 text-sm sm:text-base leading-relaxed">
              "Researchers, academics, students, and biotechnology professionals are invited to share their original research with the international biotechnology community."
            </p>

            {/* Check badges matching screenshot */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs">
              <div className="flex items-center gap-1.5 text-emerald-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Original Research</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Review Articles</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Oral Presentations</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Poster Presentations</span>
              </div>
            </div>

            {/* Action Buttons matching screenshot */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={onOpenPreRegister}
                className="px-5 py-3 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs rounded-md shadow-md transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.02]"
              >
                <FileText className="w-4 h-4" />
                <span>SUBMIT ARTICLE</span>
              </button>

              <button
                onClick={onOpenGuidelines}
                className="px-5 py-3 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700 text-emerald-200 font-semibold text-xs rounded-md transition-colors flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>VIEW GUIDELINES</span>
              </button>
            </div>
          </div>

          {/* Right Column: Submission Snapshot Card matching screenshot */}
          <div className="lg:col-span-5">
            <div className="bg-[#021f19] border border-emerald-700/60 rounded-xl p-5 sm:p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-emerald-800/60">
                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                  Submission Snapshot
                </h3>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  No Fee Required
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-emerald-400/80 font-medium block text-[11px]">Word Limit:</span>
                  <span className="text-white font-semibold">Maximum 250 words (structured body)</span>
                </div>

                <div>
                  <span className="text-emerald-400/80 font-medium block text-[11px]">Required Abstract Structure:</span>
                  <span className="text-emerald-100">
                    Background / Objective, Methodology, Results / Findings, Conclusion
                  </span>
                </div>

                <div>
                  <span className="text-emerald-400/80 font-medium block text-[11px]">Peer-Review Notification:</span>
                  <span className="text-white font-semibold">[Date — To Be Announced]</span>
                </div>

                <div>
                  <span className="text-emerald-400/80 font-medium block text-[11px]">Accepted Authors Registration:</span>
                  <span className="text-emerald-200/90">
                    Individual registration required upon acceptance
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-emerald-800/60 text-center">
                <button
                  onClick={onOpenPreRegister}
                  className="text-xs text-emerald-300 hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
                >
                  Already submitted? Check your abstract status →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
