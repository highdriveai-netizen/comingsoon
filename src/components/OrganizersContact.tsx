import React, { useState } from 'react';
import { 
  Building2, 
  Mail, 
  Phone, 
  Globe, 
  MapPin, 
  Send, 
  CheckCircle, 
  ExternalLink,
  School,
  Landmark,
  ShieldCheck,
  Check
} from 'lucide-react';
import { CONFERENCE_INFO, ORGANIZING_PARTNERS } from '../data/conferenceData';

export const OrganizersContact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ fullName: '', email: '', subject: '', message: '' });
      }, 5000);
    }
  };

  return (
    <div id="contact" className="border-b border-slate-200">
      
      {/* SECTION 1: INSTITUTIONAL LEADERSHIP & HOST */}
      <section className="py-16 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-1.5">
              <span className="w-5 h-[2px] bg-emerald-600"></span>
              <span>Institutional Leadership & Host</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight">
              Organized By
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Conducted by the Department of Genetic Engineering & Biotechnology, Faculty of Biological Sciences, University of Chittagong.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Big Card: Department of GEB matching screenshot */}
            <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-xs">
              <div className="flex items-start gap-4 pb-4 border-b border-slate-100">
                <div className="w-14 h-14 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                  <School className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">
                    Host Department
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    Department of Genetic Engineering & Biotechnology
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    University of Chittagong • Established 2004
                  </p>
                </div>
              </div>

              <div className="py-4 space-y-3 text-xs text-slate-600 leading-relaxed">
                <p>
                  The Department of Genetic Engineering and Biotechnology (GEB), University of Chittagong was established in 2004 with a forward-looking vision to advance molecular life sciences and biotechnology education in Bangladesh.
                </p>
                <p>
                  For over two decades, through rigorous teaching and internationally recognized research, the department has trained graduates who are now serving around the globe across academia, clinical genomics, agriculture, and high-tech biotechnology enterprises. Faculty and scholars regularly publish in premier high-impact international journals.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <a
                  href="https://cu.ac.bd"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded border border-emerald-200 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Visit University of Chittagong Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://cu.ac.bd"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded border border-slate-200 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Department of GEB Webpage</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Partner Cards matching screenshot */}
            <div className="lg:col-span-5 space-y-3.5">
              {ORGANIZING_PARTNERS.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-slate-200 p-4 shadow-2xs hover:border-emerald-300 transition-colors flex items-start gap-3.5"
                >
                  <div className="p-2 rounded bg-emerald-50 text-emerald-700 border border-emerald-100 shrink-0 mt-0.5">
                    {index === 0 && <School className="w-5 h-5" />}
                    {index === 1 && <ShieldCheck className="w-5 h-5" />}
                    {index === 2 && <Landmark className="w-5 h-5" />}
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      {partner.name}
                    </h4>
                    <span className="text-[10px] font-semibold text-emerald-700 block">
                      {partner.category}
                    </span>
                    <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                      {partner.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 2: CONFERENCE SECRETARIAT & CONTACT US */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-1.5">
              <span className="w-5 h-[2px] bg-emerald-600"></span>
              <span>Conference Secretariat</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight">
              Contact Us
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              For academic inquiries, registration queries, or corporate partnership expressions, please contact the organizing committee.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Secretariat Headquarters */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 space-y-4">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 pb-2 border-b border-slate-200">
                  <Building2 className="w-4 h-4 text-emerald-600" />
                  <span>Secretariat Headquarters</span>
                </h3>

                <div className="space-y-3.5 text-xs text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-800">Official Postal Address</strong>
                      <span>Department of Genetic Engineering & Biotechnology</span><br />
                      <span>Faculty of Biological Sciences</span><br />
                      <span>University of Chittagong, Chittagong 4331, Bangladesh</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-800">Email Desk</strong>
                      <a href={`mailto:${CONFERENCE_INFO.email}`} className="text-emerald-700 hover:underline">
                        {CONFERENCE_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-800">Telephone / Mobile Helpline</strong>
                      <span>{CONFERENCE_INFO.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-800">Official Web Portal</strong>
                      <a href={CONFERENCE_INFO.website} target="_blank" rel="noreferrer" className="text-emerald-700 hover:underline">
                        {CONFERENCE_INFO.website}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-amber-50 rounded border border-amber-200 text-[11px] text-amber-900">
                  <strong>Notice:</strong> Contact numbers and emails above are configured as placeholders and can be verified by the secretariat.
                </div>
              </div>

              {/* Map Preview Card matching screenshot */}
              <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-200 shadow-xs relative">
                <div className="relative h-44">
                  <img
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
                    alt="Campus Location Map"
                    className="w-full h-full object-cover filter brightness-75 contrast-125"
                  />
                  <div className="absolute inset-0 bg-slate-950/40"></div>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    <div className="p-2 rounded-full bg-emerald-500 text-white shadow-lg animate-bounce mb-1">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="text-white text-xs font-bold drop-shadow">
                      University of Chittagong Campus
                    </div>
                    <div className="text-[11px] text-emerald-300 drop-shadow">
                      Hathazari, Chittagong
                    </div>
                    
                    <a
                      href="https://maps.google.com/?q=University+of+Chittagong+Bangladesh"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 px-3 py-1 bg-white text-slate-900 text-[10px] font-bold rounded shadow hover:bg-slate-100 transition-colors inline-flex items-center gap-1"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                <div className="px-3 py-2 bg-slate-900 text-[10px] text-slate-400 flex items-center justify-between">
                  <span>Campus Location: University of Chittagong</span>
                  <span className="text-emerald-400">Hathazari, Chittagong</span>
                </div>
              </div>

            </div>

            {/* Right Column: Send Message Form matching screenshot */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-xs">
                <h3 className="text-base font-extrabold text-slate-900">
                  Send a Message to the Secretariat
                </h3>
                <p className="text-xs text-slate-500 mt-1 mb-5">
                  Have inquiries regarding registration, presentations, or accommodation? Leave your message below.
                </p>

                {submitted ? (
                  <div className="p-8 text-center bg-emerald-50 rounded-xl border border-emerald-200 space-y-2 animate-fadeIn">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">Message Dispatched Successfully!</h4>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto">
                      Thank you, {formData.fullName}. Your inquiry has been routed to the IBC 2026 Organizing Secretariat. A response will be sent to {formData.email}.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-700 font-semibold mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Dr. / Mr. / Ms. Full Name"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-700 font-semibold mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="author@institution.edu"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">
                        Inquiry Subject
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Abstract Guidelines / Delegate Accommodation / Registration"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">
                        Your Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Please specify your query or institutional request..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="px-6 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs rounded-md shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>SEND MESSAGE</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
