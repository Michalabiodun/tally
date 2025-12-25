import {
  LayoutDashboard,
  Truck,
  Briefcase,
  Send,
  FileText,
  FileSpreadsheet,
  Users,
  UserCircle,
  Inbox,
  Building2,
  Package,
  UserCog,
  Settings,
  LogOut,
  Mountain,
  X
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

interface SidebarProps {
  activeItem?: string;
  onClose?: () => void;
}

export default function Sidebar({ activeItem = 'Dashboard', onClose }: SidebarProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="w-[280px] bg-[#0f172a] h-screen text-slate-300 flex flex-col font-sans border-r border-[#1e293b]">
      <div className="p-4 flex justify-end lg:justify-end">
        <button onClick={onClose} className="text-slate-400 hover:text-white p-2">
          <X size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pt-2">

        <div className="px-4 mb-8">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-4 px-3">{t('sidebar.main_menu')}</div>
          <div className="space-y-1">
            <Link
              to="/dashboard"
              onClick={onClose}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${activeItem === 'Dashboard' ? 'bg-white text-slate-900 shadow-lg shadow-white/5 font-medium' : 'hover:bg-[#1e293b] hover:text-white'}`}
            >
              <LayoutDashboard size={18} className={activeItem === 'Dashboard' ? 'text-slate-900' : 'text-slate-400 group-hover:text-white'} />
              <span className="text-sm">{t('sidebar.dashboard')}</span>
            </Link>
            <Link
              to="/fleet-management"
              onClick={onClose}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${activeItem === 'Fleet Management' ? 'bg-white text-slate-900 shadow-lg shadow-white/5 font-medium' : 'hover:bg-[#1e293b] hover:text-white'}`}
            >
              <Truck size={18} className={activeItem === 'Fleet Management' ? 'text-slate-900' : 'text-slate-400 group-hover:text-white'} />
              <span className="text-sm">{t('sidebar.vehicles')}</span>
            </Link>
            <Link
              to="/jobs"
              onClick={onClose}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${activeItem === 'Jobs' ? 'bg-white text-slate-900 shadow-lg shadow-white/5 font-medium' : 'hover:bg-[#1e293b] hover:text-white'}`}
            >
              <Briefcase size={18} className={activeItem === 'Jobs' ? 'text-slate-900' : 'text-slate-400 group-hover:text-white'} />
              <span className="text-sm">{t('sidebar.my_jobs')}</span>
            </Link>
            <Link
              to="/dispatch"
              onClick={onClose}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${activeItem === 'Dispatch' ? 'bg-white text-slate-900 shadow-lg shadow-white/5 font-medium' : 'hover:bg-[#1e293b] hover:text-white'}`}
            >
              <Send size={18} className={activeItem === 'Dispatch' ? 'text-slate-900' : 'text-slate-400 group-hover:text-white'} />
              <span className="text-sm">{t('sidebar.dispatch')}</span>
            </Link>
            <Link
              to="/tickets"
              onClick={onClose}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${activeItem === 'Tickets' ? 'bg-white text-slate-900 shadow-lg shadow-white/5 font-medium' : 'hover:bg-[#1e293b] hover:text-white'}`}
            >
              <FileText size={18} className={activeItem === 'Tickets' ? 'text-slate-900' : 'text-slate-400 group-hover:text-white'} />
              <span className="text-sm">{t('sidebar.tickets')}</span>
            </Link>
            <Link
              to="/invoices"
              onClick={onClose}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${activeItem === 'Invoices' ? 'bg-white text-slate-900 shadow-lg shadow-white/5 font-medium' : 'hover:bg-[#1e293b] hover:text-white'}`}
            >
              <FileSpreadsheet size={18} className={activeItem === 'Invoices' ? 'text-slate-900' : 'text-slate-400 group-hover:text-white'} />
              <span className="text-sm">{t('sidebar.invoices')}</span>
            </Link>
          </div>
        </div>

        <div className="px-4 mb-8">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-4 px-3">{t('sidebar.management')}</div>
          <div className="space-y-1">
            <Link
              to="/users"
              onClick={onClose}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${activeItem === 'Users' ? 'bg-white text-slate-900 shadow-lg shadow-white/5 font-medium' : 'text-slate-400 hover:bg-[#1e293b] hover:text-white'}`}
            >
              <Users size={18} className={activeItem === 'Users' ? 'text-slate-900' : 'text-slate-400 group-hover:text-white'} />
              <span className="text-sm">Users</span>
            </Link>
            <Link
              to="/driver-hub"
              onClick={onClose}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${activeItem === "Driver's Hub" ? 'bg-white text-slate-900 shadow-lg shadow-white/5 font-medium' : 'text-slate-400 hover:bg-[#1e293b] hover:text-white'}`}
            >
              <UserCircle size={18} className={activeItem === "Driver's Hub" ? 'text-slate-900' : 'text-slate-400 group-hover:text-white'} />
              <span className="text-sm">Driver's Hub</span>
            </Link>
            <Link
              to="/clients"
              onClick={onClose}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${activeItem === 'Clients' ? 'bg-white text-slate-900 shadow-lg shadow-white/5 font-medium' : 'text-slate-400 hover:bg-[#1e293b] hover:text-white'}`}
            >
              <Building2 size={18} className={activeItem === 'Clients' ? 'text-slate-900' : 'text-slate-400 group-hover:text-white'} />
              <span className="text-sm">Clients</span>
            </Link>
            <Link
              to="/materials"
              onClick={onClose}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${activeItem === 'Materials' ? 'bg-white text-slate-900 shadow-lg shadow-white/5 font-medium' : 'text-slate-400 hover:bg-[#1e293b] hover:text-white'}`}
            >
              <Package size={18} className={activeItem === 'Materials' ? 'text-slate-900' : 'text-slate-400 group-hover:text-white'} />
              <span className="text-sm">Materials</span>
            </Link>
            <Link
              to="/requests"
              onClick={onClose}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${activeItem === 'Requests' ? 'bg-white text-slate-900 shadow-lg shadow-white/5 font-medium' : 'text-slate-400 hover:bg-[#1e293b] hover:text-white'}`}
            >
              <Inbox size={18} className={activeItem === 'Requests' ? 'text-slate-900' : 'text-slate-400 group-hover:text-white'} />
              <span className="text-sm">Requests</span>
            </Link>
            <Link
              to="/sub-contractors"
              onClick={onClose}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${activeItem === 'Sub Contractors' ? 'bg-white text-slate-900 shadow-lg shadow-white/5 font-medium' : 'text-slate-400 hover:bg-[#1e293b] hover:text-white'}`}
            >
              <UserCog size={18} className={activeItem === 'Sub Contractors' ? 'text-slate-900' : 'text-slate-400 group-hover:text-white'} />
              <span className="text-sm">Sub Contractors</span>
            </Link>
            <Link
              to="/managers"
              onClick={onClose}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${activeItem === 'Managers' ? 'bg-white text-slate-900 shadow-lg shadow-white/5 font-medium' : 'text-slate-400 hover:bg-[#1e293b] hover:text-white'}`}
            >
              <Briefcase size={18} className={activeItem === 'Managers' ? 'text-slate-900' : 'text-slate-400 group-hover:text-white'} />
              <span className="text-sm">Managers</span>
            </Link>
            <Link
              to="/quarry"
              onClick={onClose}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${activeItem === 'Quarry' ? 'bg-white text-slate-900 shadow-lg shadow-white/5 font-medium' : 'text-slate-400 hover:bg-[#1e293b] hover:text-white'}`}
            >
              <Mountain size={18} className={activeItem === 'Quarry' ? 'text-slate-900' : 'text-slate-400 group-hover:text-white'} />
              <span className="text-sm">Quarry</span>
            </Link>
          </div>
        </div>

      </div>

      <div className="px-4 pt-6 pb-24 border-t border-[#1e293b]">
        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-4 px-3">{t('sidebar.settings')}</div>
        <div className="space-y-1">
          <Link
            to="/settings"
            onClick={onClose}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${activeItem === 'Settings' ? 'bg-white text-slate-900 shadow-lg shadow-white/5 font-medium' : 'text-slate-400 hover:bg-[#1e293b] hover:text-white'}`}
          >
            <Settings size={18} className={activeItem === 'Settings' ? 'text-slate-900' : 'text-slate-400 group-hover:text-white'} />
            <span className="text-sm">{t('sidebar.settings')}</span>
          </Link>
          <button
            onClick={() => {
              navigate('/');
              onClose?.();
            }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-sky-500 text-white hover:bg-sky-600 transition-all duration-200 group mt-4 shadow-md"
          >
            <LogOut size={18} className="text-white" />
            <span className="text-sm font-medium">{t('sidebar.log_out')}</span>
          </button>
        </div>
      </div>
    </div >
  );
}



