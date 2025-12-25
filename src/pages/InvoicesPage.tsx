import { useState } from 'react';
import {
    Search,
    Plus,
    MoreHorizontal,
    ChevronLeft,
    ChevronRight,
    ArrowUpDown,
    Filter,
    Calendar,
    FileSpreadsheet,
    X,
} from 'lucide-react';

interface Invoice {
    id: string;
    dateCreated: string;
    status: 'Sent' | 'Not Sent';
    jobName: string;
    client: string;
    jobType: string;
    startDate: string;
    endDate: string;
}

const mockInvoices: Invoice[] = [
    {
        id: '1',
        dateCreated: '09/08/25 07:49',
        status: 'Not Sent',
        jobName: 'Demo-job',
        client: 'Fred Smith Company',
        jobType: 'Tonnage',
        startDate: '-',
        endDate: '-',
    },
    {
        id: '2',
        dateCreated: '09/08/25 07:49',
        status: 'Sent',
        jobName: 'Demo-job',
        client: 'Fred Smith Company',
        jobType: 'Tonnage',
        startDate: '-',
        endDate: '-',
    },
    // Adding more mock data for scrolling
    ...Array(10).fill(0).map((_, i) => ({
        id: (i + 3).toString(),
        dateCreated: '09/08/25 07:49',
        status: 'Not Sent' as const,
        jobName: 'Demo-job',
        client: 'Fred Smith Company',
        jobType: i % 2 === 0 ? 'Tonnage' : 'Tunnage',
        startDate: '-',
        endDate: '-',
    }))
];

const METRICS = [
    { label: 'Total Revenue', value: '$18,396.83' },
    { label: 'COGS', value: '$9,327.73' },
    { label: 'Net Revenue', value: '$9,069.09' },
    { label: 'Avg / Job', value: '56' },
    { label: 'Jobs Done', value: '56' },
    { label: 'Paid / Unpaid', value: '56' },
];

export default function InvoicesPage() {
    const [isGenerateModalOpen, setIsGenerateModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('This week');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    return (
        <div className="p-4 md:p-6 max-w-[1240px] mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-none">Invoices</h1>
                    <p className="text-[12px] text-gray-500 mt-1">View and manage all load tickets across dispatches</p>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
                {METRICS.map((metric, i) => (
                    <div key={i} className="bg-white p-2.5 rounded-xl border border-gray-100 shadow-sm flex flex-col hover:shadow-md transition-shadow">
                        <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1 leading-none">{metric.label}</div>
                        <div className="text-base font-bold text-gray-900 leading-none">{metric.value}</div>
                    </div>
                ))}
            </div>

            {/* Content Area */}
            <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
                {/* Filter Bar */}
                <div className="p-4 md:p-6 border-b border-gray-50 flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                    <div className="flex p-1 bg-gray-50 rounded-xl w-fit overflow-x-auto">
                        {['This week', 'This Month', 'Custom Range'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === tab
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-400 hover:text-gray-600'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <div className="relative flex-1 md:w-64">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search by invoices"
                                className="w-full pl-11 pr-4 py-2.5 bg-gray-50 rounded-xl text-sm border-none focus:ring-2 focus:ring-[#0f172a] transition-all"
                            />
                        </div>
                        <button
                            onClick={() => setIsGenerateModalOpen(true)}
                            className="bg-[#0f172a] text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-[#1e293b] transition-all shadow-sm active:scale-95"
                        >
                            <span>Generate Invoice</span>
                            <Plus size={18} />
                        </button>
                        <button className="px-5 py-2.5 border border-gray-200 text-gray-700 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-gray-50 transition-all shadow-sm">
                            <span>Import</span>
                            <FileSpreadsheet size={18} className="text-gray-400" />
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[1000px]">
                        <thead>
                            <tr className="bg-white border-b border-gray-50">
                                <th className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                    <div className="flex items-center gap-2">
                                        Date Created <ArrowUpDown size={14} className="text-gray-300" />
                                    </div>
                                </th>
                                <th className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                    <div className="flex items-center gap-2">
                                        Status <ArrowUpDown size={14} className="text-gray-300" />
                                    </div>
                                </th>
                                <th className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                    <div className="flex items-center gap-2">
                                        Job Name <ArrowUpDown size={14} className="text-gray-300" />
                                    </div>
                                </th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Client</th>
                                <th className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                    <div className="flex items-center gap-2">
                                        Job Type <Filter size={14} className="text-gray-300" />
                                    </div>
                                </th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Start Date</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">End Date</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {mockInvoices.map((invoice) => (
                                <tr key={invoice.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-4 py-2 text-xs">
                                        <div className="flex items-center gap-3">
                                            <div className="flex flex-col gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                                                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                                                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                                            </div>
                                            <span className="text-xs font-medium text-gray-600">{invoice.dateCreated}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 text-xs">
                                        {invoice.status === 'Sent' ? (
                                            <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[9px] font-bold rounded-full uppercase tracking-wider border border-emerald-100/50">
                                                Sent
                                            </span>
                                        ) : (
                                            <span className="px-2 py-0.5 text-gray-400 text-[9px] font-bold uppercase tracking-wider">
                                                Not Sent
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-4 py-2 text-xs">
                                        <span className="text-xs font-bold text-gray-900">{invoice.jobName}</span>
                                    </td>
                                    <td className="px-4 py-2 text-xs">
                                        <span className="text-sm text-gray-600">{invoice.client}</span>
                                    </td>
                                    <td className="px-4 py-2 text-xs">
                                        <span className="px-2 py-0.5 bg-gray-50 text-gray-500 text-[9px] font-bold rounded-full uppercase tracking-wider border border-gray-100">
                                            {invoice.jobType}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 uppercase">
                                        <span className="text-sm text-gray-900">{invoice.startDate}</span>
                                    </td>
                                    <td className="px-6 py-5 uppercase">
                                        <span className="text-sm text-gray-900">{invoice.endDate}</span>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <button className="p-1 hover:bg-white rounded-md transition-colors border border-transparent hover:border-gray-100 shadow-sm text-gray-400 hover:text-gray-900">
                                            <MoreHorizontal size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Table Footer / Pagination */}
                <div className="px-6 py-5 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-4 bg-gray-50/30">
                    <p className="text-sm text-gray-500 font-medium">1-40 of 187 jobs</p>
                    <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-white rounded-lg transition-all text-gray-400 hover:text-gray-900 disabled:opacity-30 border border-transparent hover:border-gray-100 shadow-sm">
                            <ChevronLeft size={20} />
                        </button>
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((page) => (
                                <button
                                    key={page}
                                    className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-bold transition-all ${page === 1
                                        ? 'bg-white text-gray-900 shadow-sm border border-gray-100 scale-105'
                                        : 'text-gray-400 hover:bg-white hover:text-gray-900 hover:border-gray-100'
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                        <button className="p-2 hover:bg-white rounded-lg transition-all text-gray-400 hover:text-gray-900 border border-transparent hover:border-gray-100 shadow-sm">
                            <ChevronRight size={20} />
                        </button>

                        <div className="ml-4 flex items-center gap-2">
                            <select className="bg-white border-gray-100 text-gray-700 text-sm font-bold py-2 px-3 rounded-xl shadow-sm focus:ring-[#0f172a] focus:border-[#0f172a] border transition-all cursor-pointer outline-none">
                                <option>10/Page</option>
                                <option>20/Page</option>
                                <option>50/Page</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Generate Invoice Modal */}
            {isGenerateModalOpen && (
                <div className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-[2px] z-[60] flex items-center justify-center p-4">
                    <div className="bg-white rounded-[24px] w-full max-w-xl shadow-2xl relative animate-in fade-in zoom-in duration-300">
                        {/* Modal Header */}
                        <div className="p-6 flex justify-between items-center border-b border-gray-50">
                            <h2 className="text-xl font-bold text-gray-900">Generate Invoice</h2>
                            <button
                                onClick={() => setIsGenerateModalOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-8 space-y-6">
                            <div className="space-y-2">
                                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider ml-1">Client</label>
                                <div className="relative">
                                    <select className="w-full pl-4 pr-10 py-3 bg-gray-50 rounded-xl text-sm border-none appearance-none focus:ring-2 focus:ring-[#0f172a] transition-all cursor-pointer font-medium text-gray-700">
                                        <option value="">Client</option>
                                        <option value="1">Fred Smith Company</option>
                                        <option value="2">ABC Construction</option>
                                    </select>
                                    <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 rotate-90" size={18} />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider ml-1">Start Date</label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                            className="w-full pl-4 pr-10 py-3 bg-gray-50 rounded-xl text-sm border-none focus:ring-2 focus:ring-[#0f172a] transition-all"
                                        />
                                        <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider ml-1">End Date</label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            value={endDate}
                                            onChange={(e) => setEndDate(e.target.value)}
                                            className="w-full pl-4 pr-10 py-3 bg-gray-50 rounded-xl text-sm border-none focus:ring-2 focus:ring-[#0f172a] transition-all"
                                        />
                                        <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end pt-4">
                                <button className="bg-[#0f172a] text-white px-8 py-3 rounded-xl text-sm font-bold hover:bg-[#1e293b] transition-all shadow-lg shadow-gray-200 active:scale-95">
                                    Preview Invoice
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
