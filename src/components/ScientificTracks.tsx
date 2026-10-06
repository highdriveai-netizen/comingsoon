import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Stethoscope, 
  Sprout, 
  Leaf, 
  Factory, 
  Apple, 
  Dna, 
  Binary, 
  Network, 
  Cpu, 
  Microscope, 
  Flower2, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Filter,
  X,
  FileCheck2
} from 'lucide-react';
import { THEMATIC_TRACKS } from '../data/conferenceData';
import { ThematicTrack } from '../types';

interface ScientificTracksProps {
  onOpenPreRegisterWithTrack: (trackId: number) => void;
}

export const ScientificTracks: React.FC<ScientificTracksProps> = ({ onOpenPreRegisterWithTrack }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalTrack, setActiveModalTrack] = useState<ThematicTrack | null>(null);

  const getTrackIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope className="w-4 h-4 text-emerald-600" />;
      case 'Sprout': return <Sprout className="w-4 h-4 text-emerald-600" />;
      case 'Leaf': return <Leaf className="w-4 h-4 text-emerald-600" />;
      case 'Factory': return <Factory className="w-4 h-4 text-emerald-600" />;
      case 'Apple': return <Apple className="w-4 h-4 text-emerald-600" />;
      case 'Dna': return <Dna className="w-4 h-4 text-emerald-600" />;
      case 'Binary': return <Binary className="w-4 h-4 text-emerald-600" />;
      case 'Network': return <Network className="w-4 h-4 text-emerald-600" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-emerald-600" />;
      case 'Microscope': return <Microscope className="w-4 h-4 text-emerald-600" />;
      case 'Flower2': return <Flower2 className="w-4 h-4 text-emerald-600" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-emerald-600" />;
      default: return <Dna className="w-4 h-4 text-emerald-600" />;
    }
  };

  const filteredTracks = useMemo(() => {
    return THEMATIC_TRACKS.filter((track) => {
      const matchesSearch =
        track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        track.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        track.keyTopics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'all' || track.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="tracks" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with dash prefix matching screenshot */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-1.5">
              <span className="w-5 h-[2px] bg-emerald-600"></span>
              <span>Scientific Tracks & Scope</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight">
              Conference Thematic Areas & Presentation Topics
            </h2>
            <p className="text-sm text-slate-500 mt-1 max-w-2xl">
              Abstract contributions are welcomed in 12 specialized research areas for Oral and Poster presentations.
            </p>
          </div>

          {/* Search box right-aligned matching screenshot */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics, genes, enzymes..."
              className="w-full pl-9 pr-3.5 py-2 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-slate-700"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Filter categories tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6 text-xs">
          <span className="text-slate-400 font-medium flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {[
            { id: 'all', label: 'All 12 Tracks' },
            { id: 'life-sciences', label: 'Life Sciences & Medicine' },
            { id: 'applied-biotech', label: 'Applied & Industrial Biotech' },
            { id: 'computational', label: 'Computational & AI' },
            { id: 'environmental', label: 'Environment & Microbes' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-emerald-800 text-white shadow-2xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 12 Tracks Grid matching reference screenshot exactly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTracks.map((track) => (
            <div
              key={track.id}
              onClick={() => setActiveModalTrack(track)}
              className="p-4 rounded-lg bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Number & Icon Header */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1 rounded bg-emerald-50 border border-emerald-200">
                    {getTrackIcon(track.icon)}
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-800">
                    {track.code}.
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {track.title}
                  </h3>
                </div>

                {/* Description matching screenshot */}
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                  {track.description}
                </p>

                {/* Key topics tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {track.keyTopics.slice(0, 3).map((topic, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200/80"
                    >
                      {topic}
                    </span>
                  ))}
                  {track.keyTopics.length > 3 && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded text-emerald-700 font-medium">
                      +{track.keyTopics.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom inspect link */}
              <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 group-hover:text-emerald-700">
                <span className="font-medium">Click to inspect topics & scope</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* If no tracks match search query */}
        {filteredTracks.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-lg border border-dashed border-slate-200">
            <p className="text-sm text-slate-500">No tracks found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-2 text-xs font-bold text-emerald-700 hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Bottom Banner matching screenshot */}
        <div className="mt-8 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              Oral & Poster presentations scheduled across all tracks
            </span>
            <span className="flex items-center gap-1.5 text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              Cross-disciplinary abstracts accepted
            </span>
          </div>

          <button
            onClick={() => onOpenPreRegisterWithTrack(1)}
            className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>Submit Abstract in These Areas</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Track Inspection Modal */}
      {activeModalTrack && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 animate-scaleUp">
            <div className="flex items-start justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-md bg-emerald-50 border border-emerald-200">
                  {getTrackIcon(activeModalTrack.icon)}
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold text-emerald-700 uppercase">
                    Theme Track {activeModalTrack.code}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900">
                    {activeModalTrack.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setActiveModalTrack(null)}
                className="p-1 rounded text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-4 text-xs text-slate-600">
              <div>
                <h4 className="font-bold text-slate-800 mb-1">Track Scope & Objectives:</h4>
                <p className="leading-relaxed text-slate-600">
                  {activeModalTrack.description} This track invites leading empirical, experimental,
                  and computational contributions. Submissions will undergo rigorous peer review by
                  appointed international session chairs.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-800 mb-2">Key Thematic Sub-topics & Focus Areas:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalTrack.keyTopics.map((topic, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded bg-slate-50 border border-slate-200/80">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="text-slate-700">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100 text-emerald-900 text-[11px]">
                <strong>Submission Formats:</strong> Both 15-minute Oral Presentation (standard powerpoint slot) and Poster Presentation (A0 portrait interactive exhibition) are welcomed for this thematic area.
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => setActiveModalTrack(null)}
                className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-700 cursor-pointer"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const id = activeModalTrack.id;
                  setActiveModalTrack(null);
                  onOpenPreRegisterWithTrack(id);
                }}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>Pre-Register for Track {activeModalTrack.code}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
