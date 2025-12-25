import { RefreshCw, GripVertical } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Job {
  jobName: string;
  client: string;
  driver: string;
  startTime: string;
  jobType: string;
  status: string;
}

export default function ActiveJobs() {
  const { t } = useTranslation();

  const jobs: Job[] = [
    {
      jobName: 'DISPATCH-1032',
      client: 'Fred Smith Company',
      driver: 'Fred Smith Company',
      startTime: '12/08/2025',
      jobType: 'Tonnage',
      status: 'Assigned'
    },
    {
      jobName: 'DISPATCH-1032',
      client: 'Fred Smith Company',
      driver: 'Fred Smith Company',
      startTime: '12/08/2025',
      jobType: 'Tonnage',
      status: 'Assigned'
    },
    {
      jobName: 'DISPATCH-1032',
      client: 'Fred Smith Company',
      driver: 'Fred Smith Company',
      startTime: '12/08/2025',
      jobType: 'Tonnage',
      status: 'Assigned'
    },
    {
      jobName: 'DISPATCH-1032',
      client: 'Fred Smith Company',
      driver: 'Fred Smith Company',
      startTime: '12/08/2025',
      jobType: 'Tonnage',
      status: 'Assigned'
    }
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
            {t('active_jobs.title')}
          </h2>
          <p className="text-sm text-gray-500">{t('active_jobs.subtitle')}</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="px-3 py-2 bg-gray-50 border border-transparent hover:bg-gray-100 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors">
            <option>All Statuses</option>
            <option>Assigned</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400 hover:text-gray-600">
            <RefreshCw size={18} />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-3 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">{t('active_jobs.table.job_no')}</th>
              <th className="text-left py-3 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">{t('active_jobs.table.customer')}</th>
              <th className="text-left py-3 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Driver</th>
              <th className="text-left py-3 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Start Time</th>
              <th className="text-left py-3 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Job Type</th>
              <th className="text-left py-3 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">{t('active_jobs.table.status')}</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={index} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors group">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <GripVertical size={16} className="text-gray-300 group-hover:text-gray-400 transition-colors" />
                    <span className="text-sm font-medium text-gray-900">{job.jobName}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-sm text-gray-600 font-medium">{job.client}</td>
                <td className="py-4 px-4 text-sm text-gray-600 font-medium">{job.driver}</td>
                <td className="py-4 px-4 text-sm text-gray-600">{job.startTime}</td>
                <td className="py-4 px-4 text-sm text-gray-600">{job.jobType}</td>
                <td className="py-4 px-4">
                  <span className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-full text-xs font-semibold shadow-sm">
                    {job.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-center">
        <button className="text-sm text-[#0f172a] hover:text-blue-600 font-semibold transition-colors">
          {t('active_jobs.see_all')}
        </button>
      </div>
    </div>
  );
}
