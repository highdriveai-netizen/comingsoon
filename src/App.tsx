import React, { useState } from 'react';
import { Dna, CheckCircle2, Bell, MapPin } from 'lucide-react';

export default function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#021f19] via-[#032a22] to-[#011713] text-white flex flex-col justify-between relative overflow-hidden selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Background subtle scientific grid pattern & ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Top Header Bar */}
      <header className="relative z-10 w-full px-6 py-6 border-b border-emerald-900/40">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-700 flex items-center justify-center font-extrabold text-white shadow-md border border-emerald-300/30">
              <span className="text-sm tracking-tight font-display">CU</span>
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-white font-display block leading-tight">
                IBC 2026
              </span>
              <span className="text-xs text-emerald-300/80 font-medium">
                2nd Int'l Biotechnology Conference
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Center Section */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 py-12">
        <div className="max-w-2xl w-full mx-auto text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-600/50 text-emerald-300 text-xs font-semibold shadow-xs">
            <Dna className="w-4 h-4 text-emerald-400 animate-spin" style={{ animationDuration: '12s' }} />
            <span className="tracking-widest uppercase">Official Conference Portal</span>
          </div>

          {/* Coming Soon Big Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white font-display leading-none">
              COMING <br />
              <span className="text-emerald-400 drop-shadow-[0_0_35px_rgba(52,211,153,0.35)]">
                SOON
              </span>
            </h1>

            <p className="text-base sm:text-xl text-emerald-100/90 font-medium max-w-lg mx-auto leading-relaxed pt-2">
              2nd International Biotechnology Conference 2026
            </p>
          </div>

          {/* Quick Notification Form */}
          <div className="pt-2 max-w-md mx-auto">
            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-600/70 text-emerald-200 text-sm flex items-center justify-center gap-2.5 animate-fadeIn shadow-lg">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="font-medium">Thank you! We'll notify you when the portal launches.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email to get notified"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg bg-emerald-950/80 border border-emerald-700/70 text-white placeholder-emerald-400/50 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all shadow-inner"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-sm font-bold transition-all shadow-md hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <Bell className="w-4 h-4" />
                  <span>Notify Me</span>
                </button>
              </form>
            )}
          </div>

          {/* Key Details Pill */}
          <div className="flex items-center justify-center pt-2 text-xs text-emerald-200/80">
            <span className="flex items-center gap-1.5 bg-[#022820] px-4 py-1.5 rounded-md border border-emerald-800/60">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              University of Chittagong, Bangladesh
            </span>
          </div>

        </div>
      </main>

      {/* Bottom "Organized by" Section matching screenshot branding */}
      <footer className="relative z-10 w-full py-8 px-6 border-t border-emerald-900/50 bg-[#011814]/80 backdrop-blur-xs">
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <div className="text-[11px] uppercase tracking-widest font-bold text-emerald-400 flex items-center justify-center gap-2">
            <span className="w-4 h-[1px] bg-emerald-500"></span>
            <span>Organized By</span>
            <span className="w-4 h-[1px] bg-emerald-500"></span>
          </div>

          <h3 className="text-base sm:text-lg font-extrabold text-white font-display">
            Department of Genetic Engineering & Biotechnology (GEB)
          </h3>

          <p className="text-xs sm:text-sm text-emerald-200/80 font-medium">
            Faculty of Biological Sciences • University of Chittagong, Bangladesh
          </p>

          <p className="text-[11px] text-emerald-400/50 pt-2">
            © 2026 2nd International Biotechnology Conference (IBC 2026). All Rights Reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
