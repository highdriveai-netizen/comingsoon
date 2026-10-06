import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle, 
  Sparkles, 
  Download, 
  Copy, 
  Check, 
  Calendar, 
  Share2, 
  ArrowRight,
  ShieldCheck,
  Dna,
  QrCode
} from 'lucide-react';
import { THEMATIC_TRACKS, CONFERENCE_INFO } from '../data/conferenceData';
import { PreRegistrationData } from '../types';

interface PreRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTrackId?: number;
}

export const PreRegisterModal: React.FC<PreRegisterModalProps> = ({
  isOpen,
  onClose,
  initialTrackId
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    affiliation: '',
    country: 'Bangladesh',
    role: 'Graduate Student (PhD / Master’s)',
    selectedTracks: [] as number[],
    interestedInPaperSubmission: true,
  });

  const [submittedData, setSubmittedData] = useState<PreRegistrationData | null>(null);
  const [copiedId, setCopiedId] = useState(false);

  useEffect(() => {
    if (initialTrackId) {
      setFormData((prev) => ({
        ...prev,
        selectedTracks: prev.selectedTracks.includes(initialTrackId)
          ? prev.selectedTracks
          : [...prev.selectedTracks, initialTrackId],
      }));
    }
  }, [initialTrackId]);

  if (!isOpen) return null;

  const toggleTrack = (trackId: number) => {
    setFormData((prev) => {
      const exists = prev.selectedTracks.includes(trackId);
      return {
        ...prev,
        selectedTracks: exists
          ? prev.selectedTracks.filter((id) => id !== trackId)
          : [...prev.selectedTracks, trackId],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    // Generate unique Pass ID
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const regId = `IBC26-${formData.role.includes('Student') ? 'STU' : 'DEL'}-${randomSuffix}`;
    const timestamp = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

    setSubmittedData({
      ...formData,
      registrationId: regId,
      registeredAt: timestamp,
    });
  };

  const handleCopyId = () => {
    if (submittedData?.registrationId) {
      navigator.clipboard.writeText(submittedData.registrationId);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2500);
    }
  };

  const handlePrintOrDownload = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden my-6 animate-scaleUp">
        
        {/* Header Bar */}
        <div className="bg-[#03261f] text-white p-5 flex items-center justify-between border-b border-emerald-900/40">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <Dna className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
                IBC 2026 • Official Registration Portal
              </span>
              <h3 className="text-base font-bold text-white font-display">
                {submittedData ? 'Delegate Early Access Confirmation' : 'Pre-Register / Priority Notification'}
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

        {/* Content Body */}
        {submittedData ? (
          /* DIGITAL DELEGATE PASS / CONFIRMATION */
          <div className="p-6 space-y-6">
            
            {/* Success Banner */}
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3">
              <div className="p-2 rounded-full bg-emerald-100 text-emerald-700 shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <h4 className="font-bold text-emerald-950">Pre-Registration Confirmed!</h4>
                <p className="text-emerald-800/90 mt-0.5">
                  You are registered on the priority roster for IBC 2026. Official abstract submission links and early-bird discounts will be sent to <strong>{submittedData.email}</strong>.
                </p>
              </div>
            </div>

            {/* Visual Digital Pass */}
            <div className="bg-gradient-to-br from-[#021f19] via-[#032f25] to-[#043b2f] text-white rounded-xl p-5 border border-emerald-500/40 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none"></div>

              {/* Pass Top Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-emerald-700/50 mb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">
                    Priority Delegate Pass
                  </span>
                  <div className="text-sm font-extrabold font-display">IBC 2026 SUMMIT</div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-emerald-300/80 block">Registration Code</span>
                  <span className="font-mono text-xs font-bold text-emerald-300">
                    {submittedData.registrationId}
                  </span>
                </div>
              </div>

              {/* Attendee Info */}
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[10px] text-emerald-400/80 uppercase block">Delegate Name</span>
                  <span className="text-base font-bold text-white">{submittedData.fullName}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[10px] text-emerald-400/80 uppercase block">Affiliation</span>
                    <span className="font-medium text-emerald-100 truncate block">
                      {submittedData.affiliation || 'University of Chittagong / Independent'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-emerald-400/80 uppercase block">Category</span>
                    <span className="font-medium text-emerald-100 truncate block">
                      {submittedData.role}
                    </span>
                  </div>
                </div>

                {/* Subscribed Tracks */}
                {submittedData.selectedTracks.length > 0 && (
                  <div>
                    <span className="text-[10px] text-emerald-400/80 uppercase block">Selected Thematic Tracks</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {submittedData.selectedTracks.map((id) => (
                        <span key={id} className="text-[10px] bg-emerald-950/80 border border-emerald-600/50 px-2 py-0.5 rounded text-emerald-200">
                          Track {String(id).padStart(2, '0')}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Pass Bottom */}
              <div className="mt-4 pt-3 border-t border-emerald-700/50 flex items-center justify-between text-[11px] text-emerald-300/80">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Dept. of GEB • Univ. of Chittagong</span>
                </div>
                <span className="font-mono text-[10px]">Issued: {submittedData.registeredAt}</span>
              </div>
            </div>

            {/* Actions for Pass */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                onClick={handleCopyId}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedId ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copiedId ? 'Code Copied!' : 'Copy Pass ID'}</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrintOrDownload}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Print / Save Pass</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md text-xs font-bold transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>

          </div>
        ) : (
          /* REGISTRATION FORM */
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            
            <p className="text-slate-600 text-xs leading-relaxed">
              Register your interest early to receive immediate notifications when the full submission
              portal launches, secure early-bird delegate discounts, and reserve priority attendance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Full Name & Honorific *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Sabrina Rahman"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-slate-800 focus:outline-none focus:border-emerald-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="delegate@institution.edu"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-slate-800 focus:outline-none focus:border-emerald-600 focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Affiliation / University / Company *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. University of Chittagong"
                  value={formData.affiliation}
                  onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-slate-800 focus:outline-none focus:border-emerald-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Country of Residence *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Bangladesh / Japan / UK"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-slate-800 focus:outline-none focus:border-emerald-600 focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">
                Participant Category
              </label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-slate-800 focus:outline-none focus:border-emerald-600 focus:bg-white"
              >
                <option value="Professor / Academic Faculty">Professor / Academic Faculty</option>
                <option value="Postdoctoral Fellow / Research Scientist">Postdoctoral Fellow / Research Scientist</option>
                <option value="Graduate Student (PhD / Master’s)">Graduate Student (PhD / Master’s)</option>
                <option value="Undergraduate Student Investigator">Undergraduate Student Investigator</option>
                <option value="Biotechnology Industry Professional">Biotechnology Industry Professional</option>
                <option value="Exhibitor / Corporate Sponsor">Exhibitor / Corporate Sponsor</option>
              </select>
            </div>

            {/* Thematic Tracks selector */}
            <div>
              <label className="block text-slate-700 font-semibold mb-1">
                Select Scientific Tracks of Interest (Multiple selectable)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-36 overflow-y-auto p-2 border border-slate-200 rounded-md bg-slate-50/50">
                {THEMATIC_TRACKS.map((track) => {
                  const selected = formData.selectedTracks.includes(track.id);
                  return (
                    <button
                      type="button"
                      key={track.id}
                      onClick={() => toggleTrack(track.id)}
                      className={`text-left p-1.5 rounded text-[11px] transition-colors cursor-pointer border ${
                        selected
                          ? 'bg-emerald-100 text-emerald-900 border-emerald-400 font-semibold'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <span className="font-mono text-emerald-700 font-bold mr-1">{track.code}.</span>
                      <span className="line-clamp-1">{track.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Checkbox */}
            <div className="space-y-2 pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-slate-700">
                <input
                  type="checkbox"
                  checked={formData.interestedInPaperSubmission}
                  onChange={(e) => setFormData({ ...formData, interestedInPaperSubmission: e.target.checked })}
                  className="rounded text-emerald-600 focus:ring-emerald-500"
                />
                <span>I plan to submit an abstract for Oral or Poster presentation</span>
              </label>
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-slate-500 hover:text-slate-700 cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-md shadow-xs transition-colors cursor-pointer flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                <span>Submit & Generate Pass</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
