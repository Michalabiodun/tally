import RevenueMetrics from '../components/RevenueMetrics';
import FinancialOverview from '../components/FinancialOverview';
import ActiveDispatch from '../components/ActiveDispatch';
import ActiveJobs from '../components/ActiveJobs';
import MaintenanceSchedule from '../components/MaintenanceSchedule';
import CompletedMaintenance from '../components/CompletedMaintenance';

const Dashboard = () => {
    return (
        <div className="p-4 md:p-6 max-w-[1240px] mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-1">Dashboard</h1>
                    <p className="text-sm text-gray-500">Revenue metrics and fleet overview</p>
                </div>
                <div className="flex items-center gap-2">
                    <label className="text-sm text-gray-500 mr-2 hidden sm:block">Revenue Period:</label>
                    <select className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 shadow-sm w-full sm:w-auto">
                        <option>December 2025</option>
                        <option>November 2025</option>
                        <option>October 2025</option>
                    </select>
                </div>
            </div>

            <RevenueMetrics />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <FinancialOverview />
                <ActiveDispatch />
            </div>

            <div className="space-y-6">
                <ActiveJobs />
                <MaintenanceSchedule />
                <CompletedMaintenance />
            </div>
        </div>
    );
};

export default Dashboard;
