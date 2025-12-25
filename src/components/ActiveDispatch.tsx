import { RefreshCw, FileText, Activity } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface DispatchCardProps {
  jobNumber: string;
  company: string;
  equipment: string;
  truck: string;
  loads: number;
  tons: number;
}

function DispatchCard({ jobNumber, company, equipment, truck, loads, tons }: DispatchCardProps) {
  const { t } = useTranslation();
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <FileText size={20} className="text-blue-600" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs font-semibold text-gray-900 mb-1">{jobNumber}</div>
          <div className="text-[10px] text-gray-600 mb-2">{company}</div>
          <div className="text-[10px] text-gray-500 mb-3">{equipment}</div>
          <div className="grid grid-cols-3 gap-2 text-[10px]">
            <div>
              <div className="text-gray-500">{t('dispatch.truck')}</div>
              <div className="font-medium text-gray-700">{truck}</div>
            </div>
            <div>
              <div className="text-gray-500">{t('dispatch.loads')}</div>
              <div className="font-medium text-gray-700">{loads}</div>
            </div>
            <div>
              <div className="text-gray-500">{t('dispatch.tons')}</div>
              <div className="font-medium text-gray-700">{tons}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ActiveDispatch() {
  const { t } = useTranslation();

  const dispatches = [
    {
      jobNumber: 'JOB-2025-1123-188',
      company: 'Fred Smith Company',
      equipment: 'Wade Moore Equip.',
      truck: 'N/A',
      loads: 0,
      tons: 0
    },
    {
      jobNumber: 'JOB-2025-1123-188',
      company: 'Fred Smith Company',
      equipment: 'Wade Moore Equip.',
      truck: 'N/A',
      loads: 0,
      tons: 0
    },
    {
      jobNumber: 'JOB-2025-1123-188',
      company: 'Fred Smith Company',
      equipment: 'Wade Moore Equip.',
      truck: 'N/A',
      loads: 0,
      tons: 0
    }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center border border-orange-100">
            <Activity className="text-orange-600" size={20} />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-gray-900 mb-1">{t('dispatch.title')}</h2>
            <p className="text-xs text-gray-500">{t('dispatch.subtitle')}</p>
          </div>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <RefreshCw size={18} className="text-gray-600" />
        </button>
      </div>

      <div className="flex flex-col gap-4 mb-6">
        {dispatches.map((dispatch, index) => (
          <DispatchCard key={index} {...dispatch} />
        ))}
      </div>

      <div className="flex justify-center">
        <button className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-xs font-medium text-gray-600 rounded-lg transition-colors">
          {t('dispatch.see_all')}
        </button>
      </div>
    </div>
  );
}
