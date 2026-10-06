import React, { useState } from 'react';
import { 
  UserCheck, 
  Sparkles, 
  Building, 
  MapPin, 
  ArrowRight, 
  Info, 
  Mail, 
  CheckCircle, 
  X,
  ExternalLink
} from 'lucide-react';
import { SPEAKERS_PREVIEW } from '../data/conferenceData';
import { SpeakerTeaser } from '../types';

interface SpeakersTeaserProps {
  onOpenPreRegister: () => void;
}

export const SpeakersTeaser: React.FC<SpeakersTeaserProps> = ({ onOpenPreRegister }) => {
  const [filterType, setFilterType] = useState<'all' | 'plenary' | 'invited'>('all');
  const [selectedSpeaker, setSelectedSpeaker] = useState<SpeakerTeaser | null>(null);
  const [showNominateModal, setShowNominateModal] = useState(false);
  const [nominateSubmitted, setNominateSubmitted] = useState(false);
  const [nominationData, setNominationData] = useState({
    nomineeName: '',
    nomineeAffiliation: '',
    nomineeField: '',
    yourEmail: '',
  });

  const featuredKeynote = SPEAKERS_PREVIEW[0];
  const gridSpeakers = SPEAKERS_PREVIEW.slice(1);

  const filteredSpeakers = gridSpeakers.filter((spk) => {
    if (filterType === 'all') return true;
    return spk.type === filterType;
  });

  const handleNominateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNominateSubmitted(true);
    setTimeout(() => {
      setNominateSubmitted(false);
      setShowNominateModal(false);
      setNominationData({
        nomineeName: '',
        nomineeAffiliation: '',
        nomineeField: '',
        yourEmail: '',
      });
    }, 2500);
  };

  return (
    <section id="speakers" className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Plenary Leadership Section Heading */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-1.5">
            <span className="w-5 h-[2px] bg-emerald-600"></span>
            <span>Plenary Leadership</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight">
            Featured Keynote Speaker
          </h2>
          <p className="text-sm text-slate-500 mt-1 max-w-2xl">
            Distinguished scholars and international leaders in genetic engineering and biotechnology delivering inaugural plenary addresses.
          </p>
        </div>

        {/* Featured Keynote Card directly matching screenshot layout */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs mb-16 relative overflow-hidden">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-semibold mb-6 border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>KEYNOTE SPEAKER • DEMO PLACEHOLDER</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
            
            {/* Photo column */}
            <div className="md:col-span-3">
              <div className="relative rounded-lg overflow-hidden border border-slate-200 aspect-square max-w-[220px] mx-auto md:mx-0 shadow-xs">
                <img
                  src={featuredKeynote.imagePlaceholderUrl}
                  alt="Keynote Speaker Placeholder"
                  className="w-full h-full object-cover filter contrast-105"
                />
                <div className="absolute bottom-0 inset-x-0 bg-slate-900/90 py-1.5 px-2 text-center text-white text-[10px] font-mono font-medium">
                  Keynote Address TBA
                </div>
              </div>
            </div>

            {/* Info column */}
            <div className="md:col-span-9 space-y-3">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
                  {featuredKeynote.name}
                </h3>
                <p className="text-sm font-semibold text-emerald-800 mt-0.5">
                  {featuredKeynote.role}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-1">
                  <span className="flex items-center gap-1">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    {featuredKeynote.affiliation}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {featuredKeynote.country}
                  </span>
                </div>
              </div>

              {/* Research specialization box */}
              <div className="p-3 bg-emerald-50/70 border border-emerald-200/80 rounded-md">
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-800 block mb-0.5">
                  Research Specialization
                </span>
                <span className="text-xs font-medium text-slate-800">
                  {featuredKeynote.specialization}
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                This is a placeholder profile for the keynote speaker of the 2nd International Biotechnology
                Conference 2026. The organizing committee at the University of Chittagong is finalizing invitations
                with prominent global biotech scholars and institutional partners. Once confirmed, the full
                curriculum vitae, keynote title, and abstract will be updated here.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setSelectedSpeaker(featuredKeynote)}
                  className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-md text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <span>VIEW PROFILE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] text-slate-400 italic">
                  * Official Keynote speaker invitations are actively underway by the committee.
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Subsection: Meet Our Speakers */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-1.5">
              <span className="w-5 h-[2px] bg-emerald-600"></span>
              <span>Scientific Faculty & Invited Scholars</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
              Meet Our Speakers
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Leading researchers and scientists from universities, institutions, and biotechnology research centers.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-md border border-slate-200 text-xs">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1 rounded font-medium transition-colors cursor-pointer ${
                filterType === 'all' ? 'bg-emerald-800 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilterType('plenary')}
              className={`px-3 py-1 rounded font-medium transition-colors cursor-pointer ${
                filterType === 'plenary' ? 'bg-emerald-800 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Plenary
            </button>
            <button
              onClick={() => setFilterType('invited')}
              className={`px-3 py-1 rounded font-medium transition-colors cursor-pointer ${
                filterType === 'invited' ? 'bg-emerald-800 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Invited
            </button>
          </div>
        </div>

        {/* Notice badge matching screenshot */}
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 text-xs mb-6 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold">Organizing Committee Notice:</strong> The speaker profiles below are editable demonstrations designed to showcase layout and presentation formatting. Confirmed national and international invited scholars will be listed upon confirmation.
          </div>
        </div>

        {/* 6 Speaker Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSpeakers.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Speaker Photo */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={speaker.imagePlaceholderUrl}
                    alt={speaker.name}
                    className="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute top-2.5 right-2.5">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded shadow-xs uppercase tracking-wider ${
                      speaker.type === 'plenary'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-900/80 text-white'
                    }`}>
                      {speaker.type}
                    </span>
                  </div>
                </div>

                {/* Speaker Content */}
                <div className="p-4 space-y-2">
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    {speaker.name}
                  </h4>
                  <p className="text-xs text-emerald-800 font-medium line-clamp-1">
                    {speaker.role}
                  </p>
                  
                  <div className="text-[11px] text-slate-500 space-y-0.5 pt-1">
                    <div className="flex items-center gap-1.5 truncate">
                      <Building className="w-3 h-3 text-slate-400 shrink-0" />
                      <span className="truncate">{speaker.affiliation}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                      <span>{speaker.country}</span>
                    </div>
                  </div>

                  {/* Research domain */}
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Research Domain
                    </span>
                    <span className="text-xs text-slate-700 font-medium line-clamp-2">
                      [{speaker.specialization}]
                    </span>
                  </div>
                </div>
              </div>

              {/* View Profile Action matching screenshot */}
              <div className="p-4 pt-0">
                <button
                  onClick={() => setSelectedSpeaker(speaker)}
                  className="w-full py-2 text-center text-xs font-semibold text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50/50 rounded border border-emerald-200 transition-colors cursor-pointer flex items-center justify-center gap-1"
                >
                  <span>VIEW PROFILE</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenPreRegister()}
            className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-md text-xs font-bold transition-colors cursor-pointer shadow-2xs flex items-center gap-2"
          >
            <span>View All Speakers & Scientific Biographies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setShowNominateModal(true)}
            className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white rounded-md text-xs font-bold transition-colors cursor-pointer shadow-xs flex items-center gap-1.5"
          >
            <UserCheck className="w-4 h-4 text-emerald-300" />
            <span>Nominate / Suggest a Keynote Speaker</span>
          </button>
        </div>

      </div>

      {/* Speaker Details Modal */}
      {selectedSpeaker && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 animate-scaleUp">
            <div className="flex items-start justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <img
                  src={selectedSpeaker.imagePlaceholderUrl}
                  alt={selectedSpeaker.name}
                  className="w-14 h-14 rounded-lg object-cover border border-slate-200"
                />
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    {selectedSpeaker.type} Session
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 mt-1">
                    {selectedSpeaker.name}
                  </h3>
                  <p className="text-xs text-emerald-700 font-medium">
                    {selectedSpeaker.role}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="p-1 rounded text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-3 text-xs text-slate-600">
              <div>
                <strong className="text-slate-800">Affiliation & Institution:</strong>
                <p>{selectedSpeaker.affiliation} ({selectedSpeaker.country})</p>
              </div>

              <div>
                <strong className="text-slate-800">Research Specialization:</strong>
                <p className="text-emerald-800 font-semibold">{selectedSpeaker.specialization}</p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                <strong className="text-slate-800">Session Status:</strong>
                <p>
                  Official session schedule and lecture synopsis will be formally released once the
                  academic scientific board completes international peer review and coordination.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 flex justify-between items-center">
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-700 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedSpeaker(null);
                  onOpenPreRegister();
                }}
                className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded text-xs font-bold cursor-pointer"
              >
                Get Notified for This Session
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Nominate Speaker Modal */}
      {showNominateModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl border border-slate-200 animate-scaleUp">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-emerald-600" />
                <h3 className="text-base font-bold text-slate-900">
                  Nominate / Propose a Speaker
                </h3>
              </div>
              <button
                onClick={() => setShowNominateModal(false)}
                className="p-1 rounded text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {nominateSubmitted ? (
              <div className="py-8 text-center space-y-2">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Nomination Received!</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Thank you! The GEB Academic Organizing Committee will review your recommendation for the plenary program.
                </p>
              </div>
            ) : (
              <form onSubmit={handleNominateSubmit} className="py-4 space-y-3 text-xs">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Nominee Full Name & Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Prof. Jane Doe"
                    value={nominationData.nomineeName}
                    onChange={(e) => setNominationData({ ...nominationData, nomineeName: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded text-slate-800 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Affiliation & University / Institute *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Oxford Genomics Centre, UK"
                    value={nominationData.nomineeAffiliation}
                    onChange={(e) => setNominationData({ ...nominationData, nomineeAffiliation: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded text-slate-800 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Field of Expertise / Proposed Track
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. CRISPR therapeutics, Synthetic Biology"
                    value={nominationData.nomineeField}
                    onChange={(e) => setNominationData({ ...nominationData, nomineeField: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded text-slate-800 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Your Contact Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="yourname@institution.edu"
                    value={nominationData.yourEmail}
                    onChange={(e) => setNominationData({ ...nominationData, yourEmail: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded text-slate-800 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowNominateModal(false)}
                    className="px-3 py-2 text-slate-500 hover:text-slate-700 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-emerald-800 hover:bg-emerald-700 text-white font-bold rounded cursor-pointer"
                  >
                    Submit Nomination
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
