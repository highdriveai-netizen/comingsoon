import React, { useState } from 'react';
import { Maximize2, X, ArrowRight, Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/conferenceData';
import { GalleryItem } from '../types';

export const GalleryArchive: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Conference', 'Presentations', 'Participants', 'Campus'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-1.5">
              <span className="w-5 h-[2px] bg-emerald-600"></span>
              <span>Visual Archive & Campus Atmosphere</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight">
              Conference Gallery
            </h2>
            <p className="text-sm text-slate-500 mt-1 max-w-2xl">
              Photographic highlights from the NBC 2023 archive, GEB research laboratories, and University of Chittagong campus.
            </p>
          </div>

          {/* Filter tabs matching screenshot */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-50 p-1 rounded-md border border-slate-200 text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded font-medium transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-emerald-800 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Photo Cards Grid matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group bg-white rounded-lg border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-900/80 text-white backdrop-blur-xs">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-2 rounded-full bg-white/90 text-slate-900 shadow-md">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="p-4 space-y-1.5">
                  <h4 className="text-xs font-bold text-slate-900 leading-snug group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>

              <div className="px-4 pb-3 pt-0">
                <span className="text-[11px] font-semibold text-emerald-700 group-hover:text-emerald-900 flex items-center gap-1">
                  Enlarge photograph →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Archive Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setActivePhoto(GALLERY_ITEMS[0])}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-300 rounded-md text-xs font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
          >
            <Camera className="w-3.5 h-3.5 text-emerald-600" />
            <span>Browse Complete Photo Archive</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full overflow-hidden shadow-2xl animate-scaleUp">
            <div className="relative h-96 sm:h-[450px] bg-slate-900">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white">
              <div>
                <span className="text-[10px] font-bold text-emerald-700 uppercase bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {activePhoto.category}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-1">
                  {activePhoto.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {activePhoto.caption}
                </p>
              </div>

              <button
                onClick={() => setActivePhoto(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded shrink-0 cursor-pointer"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
