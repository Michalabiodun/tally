import { GripVertical } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface MaintenanceRecord {
  vehicle: string;
  serviceType: string;
  technician: string;
  date: string;
  details: string;
}

export default function CompletedMaintenance() {
  const { t } = useTranslation();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const records: MaintenanceRecord[] = [
    {
      vehicle: '1701',
      serviceType: 'Oil Change - Oil change',
      technician: 'Jonathan',
      date: 'Nov 2, 2025',
      details: '155,567 mi'
    },
    {
      vehicle: '1701',
      serviceType: 'Oil Change - Oil change',
      technician: 'Jonathan',
      date: 'Nov 2, 2025',
      details: '4 Tires across the back axles'
    },
    {
      vehicle: '1701',
      serviceType: 'Oil Change - Oil change',
      technician: 'Jonathan',
      date: 'Nov 2, 2025',
      details: '155,567 mi'
    }
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
          <div className="w-2 h-4 bg-gray-900 rounded-sm"></div>
          {t('completed_maintenance.title')}
        </h2>
        <p className="text-sm text-gray-500">{t('Historical maintenance records for your fleet')}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">{t('completed_maintenance.table.vehicle')}</label>
          <select className="w-full px-3 py-2 bg-gray-50 border border-transparent hover:bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors">
            <option>{t('completed_maintenance.filters.all_vehicles')}</option>
            <option>1701</option>
            <option>1702</option>
            <option>1703</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">{t('completed_maintenance.filters.start_date')}</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 border border-transparent hover:bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">{t('completed_maintenance.filters.end_date')}</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 border border-transparent hover:bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
          />
        </div>

        <div className="flex items-end">
          <button
            onClick={() => {
              setStartDate('');
              setEndDate('');
            }}
            className="w-full sm:w-auto px-4 py-2 bg-[#0f172a] hover:bg-[#1e293b] text-white text-sm font-medium rounded-lg transition-colors shadow-md"
          >
            {t('completed_maintenance.filters.clear_filters')}
          </button>
        </div>
      </div>

      <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-3 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">{t('completed_maintenance.table.vehicle')}</th>
              <th className="text-left py-3 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">{t('completed_maintenance.table.service_type')}</th>
              <th className="text-left py-3 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">{t('completed_maintenance.table.technician')}</th>
              <th className="text-left py-3 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">{t('completed_maintenance.table.details')}</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={index} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors group">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <GripVertical size={16} className="text-gray-300 group-hover:text-gray-400" />
                    <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-700">
                      {record.vehicle}
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="text-sm font-medium text-gray-900">{record.serviceType.split(' - ')[0]}</div>
                  <div className="text-xs text-gray-500">{record.date}</div>
                </td>
                <td className="py-4 px-4 text-sm text-gray-600 font-medium">{record.technician}</td>
                <td className="py-4 px-4 text-sm text-gray-600">{record.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-center">
        <button className="text-sm text-[#0f172a] hover:text-blue-600 font-semibold transition-colors">
          {t('completed_maintenance.view_details')}
        </button>
      </div>
    </div>
  );
}
