import { Calendar, Bell, ChevronDown, Menu, Settings, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import brandLogo from '../assets/brand-logo.svg';

function LanguageToggle() {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(nextLang);
  };

  const isEn = i18n.language === 'en';

  return (
    <div className="flex items-center gap-2">
      <span className={`text-[10px] font-bold uppercase tracking-tight transition-colors ${isEn ? 'text-sky-600' : 'text-slate-400'}`}>
        <span className="hidden sm:inline">{t('header.english')}</span>
        <span className="sm:hidden">EN</span>
      </span>

      <button
        onClick={toggleLanguage}
        className="relative w-9 h-5 bg-white border border-slate-200 rounded-full p-0.5 transition-all hover:border-sky-200 shadow-sm"
      >
        <div className={`w-3.5 h-3.5 bg-sky-500 rounded-full flex items-center justify-center transition-transform duration-300 transform ${isEn ? 'translate-x-0' : 'translate-x-4'}`}>
          <Globe size={10} className="text-white" />
        </div>
      </button>

      <span className={`text-[10px] font-bold uppercase tracking-tight transition-colors ${!isEn ? 'text-sky-600' : 'text-slate-400'}`}>
        <span className="hidden sm:inline">{t('header.spanish')}</span>
        <span className="sm:hidden">ES</span>
      </span>
    </div>
  );
}

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [dateTime, setDateTime] = useState(new Date());
  useTranslation();

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDateFull = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatDateShort = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-2 md:px-6 lg:px-8 sticky top-0 z-40">
      <div className="flex items-center gap-2 md:gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-1.5 text-slate-500 hover:bg-slate-50 rounded-lg transition-colors shrink-0"
        >
          <Menu size={20} />
        </button>

        <Link to="/" className="flex items-center shrink-0 border-r border-gray-100 pr-2 md:pr-4">
          <img src={brandLogo} alt="Logo" className="w-32 h-auto md:w-40" />
        </Link>

        <div className="hidden sm:flex items-center gap-1.5 text-slate-400 bg-slate-50/50 px-2 py-1 rounded-xl border border-slate-100/50 min-w-0">
          <Calendar size={12} className="text-sky-400 shrink-0" />
          <div className="flex flex-col">
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-tighter leading-none">
              <span className="hidden md:inline">{formatDateFull(dateTime)}</span>
              <span className="md:hidden">{formatDateShort(dateTime)}</span>
            </span>
            <span className="text-[8px] md:text-[9px] font-medium text-slate-500 tracking-tight mt-0.5">{formatTime(dateTime)}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1.5 md:gap-4 lg:gap-6">
        <div className="flex items-center h-8 bg-slate-50/80 rounded-2xl border border-slate-100/50 px-3 shrink-0">
          <LanguageToggle />
        </div>

        <div className="flex items-center gap-1 md:gap-3 pl-1.5 md:pl-4 lg:pl-6 border-l border-gray-100">
          <button className="relative p-1.5 text-slate-400 hover:text-sky-500 hover:bg-slate-50 rounded-xl transition-all duration-300">
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-400 rounded-full border-2 border-white shadow-sm transition-transform duration-300 transform scale-100 hover:scale-110 flex items-center justify-center text-[6px] font-bold text-slate-900 leading-none">2</span>
          </button>

          <Link to="/settings" className="p-1.5 text-slate-400 hover:text-sky-500 hover:bg-slate-50 rounded-xl transition-all duration-300">
            <Settings size={18} />
          </Link>

          <div className="flex items-center gap-2 md:gap-3 ml-0.5 md:ml-2 lg:ml-4 pl-1.5 md:pl-4 lg:pl-6 border-l border-gray-100 py-1 group cursor-pointer hover:bg-slate-50 rounded-2xl transition-all duration-300">
            <div className="hidden lg:flex flex-col items-end">
              <span className="text-[10px] md:text-[11px] font-bold text-slate-700 tracking-tight leading-none group-hover:text-sky-600 transition-colors">Micheal Ajayi</span>
              <span className="text-[9px] md:text-[10px] font-medium text-slate-400 mt-0.5 group-hover:text-slate-500 transition-colors shrink-0">Admin user</span>
            </div>
            <div className="relative shrink-0">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="w-7 h-7 md:w-8 md:h-8 rounded-full ring-2 ring-white group-hover:ring-sky-100 transition-all duration-300"
              />
              <ChevronDown size={11} className="absolute -right-1 -bottom-1 text-slate-400 group-hover:text-sky-500 transition-transform duration-300 group-hover:rotate-180 bg-white rounded-full shadow-sm" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
