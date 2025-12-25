import { Wrench, CheckCircle, RefreshCw } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function MaintenanceSchedule() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'overdue' | 'upcoming'>('overdue');

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
            <div className="p-1.5 bg-yellow-100 rounded-md">
              <Wrench size={18} className="text-yellow-600" />
            </div>
            {t('maintenance.title')}
          </h2>
          <p className="text-sm text-gray-500">{t('maintenance.subtitle')}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold">
            <span className="px-2.5 py-1 bg-green-50 text-green-700 rounded-md border border-green-100">
              10 {t('maintenance.open')}
            </span>
            <span className="px-2.5 py-1 bg-yellow-50 text-yellow-700 rounded-md border border-yellow-100">
              10 {t('maintenance.in_progress')}
            </span>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400 hover:text-gray-600">
            <RefreshCw size={18} />
          </button>
        </div>
      </div>

      <div className="flex gap-8 mb-8 border-b border-gray-100">
        <button
          onClick={() => setActiveTab('overdue')}
          className={`pb-3 text-sm font-semibold transition-all relative ${activeTab === 'overdue'
            ? 'text-gray-900'
            : 'text-gray-400 hover:text-gray-600'
            }`}
        >
          {t('maintenance.overdue')} (0)
          {activeTab === 'overdue' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 rounded-t-full"></span>
          )}
        </button>
        <button
          onClick={() => setActiveTab('upcoming')}
          className={`pb-3 text-sm font-semibold transition-all relative ${activeTab === 'upcoming'
            ? 'text-gray-900'
            : 'text-gray-400 hover:text-gray-600'
            }`}
        >
          {t('maintenance.upcoming')} (3)
          {activeTab === 'upcoming' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 rounded-t-full"></span>
          )}
        </button>
      </div>

      <div className="py-16 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-50 rounded-full mb-4 ring-8 ring-green-50/50">
          <CheckCircle size={40} className="text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{t('maintenance.no_overdue')}</h3>
        <p className="text-sm text-gray-500 mb-6 max-w-xs mx-auto">{t('maintenance.all_good_message')}</p>
        <button className="px-4 py-2 bg-[#0f172a] hover:bg-[#1e293b] text-white text-sm font-medium rounded-lg transition-all shadow-lg hover:shadow-xl">
          {t('maintenance.view_details')}
        </button>
      </div>
    </div>
  );
}
