import { useTranslation } from 'react-i18next';

interface MetricCardProps {
  title: string;
  subtitle: string;
  amount: string;
  accentColor?: string;
  hasProgress?: boolean;
}

function MetricCard({ title, subtitle, amount, accentColor, hasProgress }: MetricCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 flex overflow-hidden shadow-sm hover:shadow-md transition-shadow relative">
      {hasProgress && (
        <div className="absolute top-4 right-4 p-1 bg-green-50 rounded-full border border-green-100 shadow-sm">
          <div className="w-3 h-3 rounded-full border-2 border-green-500"></div>
        </div>
      )}
      <div className="flex-1 p-3.5">
        <div className="text-[9px] font-bold text-gray-500 mb-2 uppercase tracking-wide leading-none">{title}</div>
        <div className="flex flex-col gap-1">
          <div className="flex items-end justify-between relative z-10">
            <div>
              <div className="text-[9px] font-semibold text-gray-700 leading-none">{subtitle}</div>
              {hasProgress && (
                <div className="w-16 h-1 bg-gray-100 rounded-full mt-1.5">
                  <div className="h-full bg-green-500 rounded-full w-1/2"></div>
                </div>
              )}
            </div>
            <div className={`flex flex-col items-end ${hasProgress ? 'transform' : ''}`}>
              <div className={`text-xs font-bold text-gray-900 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg border border-gray-100 shadow-sm translate-x-2`}>
                {amount}
              </div>
            </div>
          </div>
        </div>
      </div>
      {accentColor && (
        <div className="flex gap-1">
          <div className={`w-2 ${accentColor}`}></div>
          <div className={`w-2 ${accentColor}`}></div>
        </div>
      )}
    </div>
  );
}

export default function RevenueMetrics() {
  const { t } = useTranslation();

  const metrics = [
    {
      title: t('revenue.revenue_to_date'),
      subtitle: t('revenue.stamped_cd'),
      amount: '$2,323,875.23',
      accentColor: 'bg-[#1e293b]', // Navy
    },
    {
      title: t('revenue.material_cost'),
      subtitle: 'December 2025',
      amount: '$2,323,875.23',
      accentColor: 'bg-[#a3e635]', // Lime/Green
    },
    {
      title: t('revenue.contractor_payable'),
      subtitle: 'Caleb Thomas',
      amount: '$2,323,875.23',
      accentColor: 'bg-[#06b6d4]', // Cyan
    },
    {
      title: t('revenue.progress_target'),
      subtitle: t('revenue.avg_per_day', { amount: '$1,297.382' }),
      amount: '$2,323,875.23',
      hasProgress: true,
      // No accent color for the last card
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
}
