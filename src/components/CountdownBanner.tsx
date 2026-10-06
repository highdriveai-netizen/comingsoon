import React, { useState, useEffect } from 'react';
import { Clock, CalendarPlus, BellRing, Sparkles, AlertCircle, Check } from 'lucide-react';
import { CONFERENCE_INFO } from '../data/conferenceData';

interface CountdownBannerProps {
  onOpenPreRegister: () => void;
}

export const CountdownBanner: React.FC<CountdownBannerProps> = ({ onOpenPreRegister }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 65,
    hours: 19,
    minutes: 36,
    seconds: 34,
  });
  const [calendarAdded, setCalendarAdded] = useState(false);

  useEffect(() => {
    // Dynamic countdown calculation based on targetTimestamp
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = CONFERENCE_INFO.targetTimestamp - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Fallback for mock demo countdown
        setTimeLeft({ days: 65, hours: 19, minutes: 36, seconds: 34 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadIcs = () => {
    // Generate .ics calendar invite
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//IBC 2026//University of Chittagong//EN',
      'BEGIN:VEVENT',
      'UID:ibc-2026-cu-bangladesh@cu.ac.bd',
      'DTSTAMP:20261006T000000Z',
      'DTSTART:20261212T030000Z',
      'DTEND:20261214T120000Z',
      'SUMMARY:2nd International Biotechnology Conference (IBC 2026)',
      'DESCRIPTION:2nd International Biotechnology Conference organized by the Department of Genetic Engineering & Biotechnology (GEB), University of Chittagong, Bangladesh.',
      'LOCATION:Faculty of Biological Sciences, University of Chittagong, Chittagong 4331, Bangladesh',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'IBC_2026_Conference_Reminder.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setCalendarAdded(true);
    setTimeout(() => setCalendarAdded(false), 4000);
  };

  const handleGoogleCalendar = () => {
    const title = encodeURIComponent('2nd International Biotechnology Conference (IBC 2026)');
    const details = encodeURIComponent('Organized by Department of Genetic Engineering & Biotechnology (GEB), University of Chittagong. Official International Research Summit.');
    const location = encodeURIComponent('Faculty of Biological Sciences, University of Chittagong, Bangladesh');
    const dates = '20261212T090000/20261214T170000';
    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    window.open(gcalUrl, '_blank');
  };

  return (
    <section className="bg-white border-b border-slate-200 py-6 px-4 sm:px-6 lg:px-8 shadow-sm relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Information matching screenshot */}
        <div className="space-y-1.5 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="p-1.5 rounded-full bg-emerald-50 text-emerald-700">
              <Clock className="w-4 h-4 text-emerald-600" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-display">
              Conference Countdown
            </h3>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100/80 text-emerald-800 border border-emerald-300">
              DEMO SCHEDULE
            </span>
          </div>

          <p className="text-xs text-slate-500 max-w-xl">
            Target: <span className="font-semibold text-slate-700">{CONFERENCE_INFO.targetMonth} — [Date to Be Announced]</span> • Subject to official academic committee announcement.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-3 pt-1 text-[11px]">
            <button
              onClick={handleDownloadIcs}
              className="text-emerald-700 hover:text-emerald-900 font-semibold flex items-center gap-1 cursor-pointer transition-colors"
            >
              <CalendarPlus className="w-3.5 h-3.5 text-emerald-600" />
              <span>{calendarAdded ? 'Saved .ics File!' : 'Add to Calendar (.ics)'}</span>
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={handleGoogleCalendar}
              className="text-slate-600 hover:text-emerald-700 transition-colors cursor-pointer"
            >
              Google Calendar
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={onOpenPreRegister}
              className="text-emerald-600 hover:text-emerald-800 font-medium flex items-center gap-1 cursor-pointer"
            >
              <BellRing className="w-3 h-3" />
              <span>Get Deadline Alerts</span>
            </button>
          </div>
        </div>

        {/* Right Countdown Boxes matching screenshot */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="text-center px-3.5 py-2 sm:px-5 sm:py-3 bg-slate-50 rounded-lg border border-slate-200 min-w-[70px] sm:min-w-[85px] shadow-xs">
            <span className="block text-2xl sm:text-3xl font-extrabold text-slate-800 font-display tracking-tight">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="block text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Days
            </span>
          </div>

          <div className="text-slate-300 font-bold text-xl">:</div>

          <div className="text-center px-3.5 py-2 sm:px-5 sm:py-3 bg-slate-50 rounded-lg border border-slate-200 min-w-[70px] sm:min-w-[85px] shadow-xs">
            <span className="block text-2xl sm:text-3xl font-extrabold text-slate-800 font-display tracking-tight">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="block text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Hours
            </span>
          </div>

          <div className="text-slate-300 font-bold text-xl">:</div>

          <div className="text-center px-3.5 py-2 sm:px-5 sm:py-3 bg-slate-50 rounded-lg border border-slate-200 min-w-[70px] sm:min-w-[85px] shadow-xs">
            <span className="block text-2xl sm:text-3xl font-extrabold text-slate-800 font-display tracking-tight">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="block text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Minutes
            </span>
          </div>

          <div className="text-slate-300 font-bold text-xl">:</div>

          <div className="text-center px-3.5 py-2 sm:px-5 sm:py-3 bg-emerald-50/70 rounded-lg border border-emerald-200 min-w-[70px] sm:min-w-[85px] shadow-xs">
            <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-700 font-display tracking-tight">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="block text-[10px] sm:text-[11px] font-bold text-emerald-600 uppercase tracking-wider">
              Seconds
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
