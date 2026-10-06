import React from 'react';
import { Calendar, Clock, Bell, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CONFERENCE_MILESTONES } from '../data/conferenceData';

interface TimelineMilestonesProps {
  onOpenPreRegister: () => void;
}

export const TimelineMilestones: React.FC<TimelineMilestonesProps> = ({ onOpenPreRegister }) => {
  return (
    <section id="timeline" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-1.5">
              <span className="w-5 h-[2px] bg-emerald-600"></span>
              <span>Conference Deadlines & Milestones</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight">
              Important Dates
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Official timeline for manuscript submissions, peer-review acceptance, and delegate registration.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-200 w-fit">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Deadlines: 23:59 BST (UTC+6)</span>
          </div>
        </div>

        {/* Milestone Items List matching screenshot */}
        <div className="space-y-3">
          {CONFERENCE_MILESTONES.map((milestone) => (
            <div
              key={milestone.step}
              className={`p-4 rounded-lg border transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                milestone.status === 'active-open'
                  ? 'bg-emerald-50/40 border-emerald-300 shadow-2xs'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Left Column: Number, Title, Status, Subtitle */}
              <div className="flex items-start gap-3.5">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                  milestone.status === 'active-open'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 text-slate-600 border border-slate-200'
                }`}>
                  {milestone.step}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-sm font-bold text-slate-900">
                      {milestone.title}
                    </h3>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                      milestone.status === 'active-open'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {milestone.status === 'active-open' ? 'Active / Open' : 'Scheduled'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {milestone.subtitle}
                  </p>
                </div>
              </div>

              {/* Right Column: Date & Action Link */}
              <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 pl-10 md:pl-0">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>[ {milestone.targetDate} ]</span>
                </div>

                <button
                  onClick={onOpenPreRegister}
                  className={`text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors ${
                    milestone.status === 'active-open'
                      ? 'text-emerald-700 hover:text-emerald-900'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>{milestone.status === 'active-open' ? 'Submit' : 'Details'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note banner matching screenshot */}
        <div className="mt-6 p-3 bg-slate-50 border border-slate-200 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">ⓘ Note:</span>
            <span>Exact calendar dates are demonstrator placeholders and will be confirmed by the conference executive board.</span>
          </div>
          <button
            onClick={onOpenPreRegister}
            className="text-xs font-bold text-emerald-700 hover:text-emerald-900 shrink-0 cursor-pointer underline"
          >
            Pre-Register Early →
          </button>
        </div>

      </div>
    </section>
  );
};
