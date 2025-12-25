import { useState } from 'react';
import {
    Search,
    MoreHorizontal,
    ChevronLeft,
    ChevronRight,
    ArrowUpDown,
    Filter,
    Calendar,
    ChevronDown,
    Share2,
    Ticket,
    ShieldCheck,
    Package,
    Eye,
    Trash2,
} from 'lucide-react';

interface TicketData {
    id: string;
    dateCreated: string;
    jobName: string;
    client: string;
    quarryLocation: string;
    type: string;
    status: 'Pending' | 'Dumped';
    material: string;
}

const mockTickets: TicketData[] = [
    ...Array(7).fill(0).map((_, i) => ({
        id: (i + 1).toString(),
        dateCreated: '09/08/25 07:49',
        jobName: "Adam's Electric",
        client: 'Demo-job',
        quarryLocation: 'NK,Denver',
        type: 'Tonnage',
        status: (i < 4 ? 'Pending' : 'Dumped') as 'Pending' | 'Dumped',
        material: '67',
    }))
];

const METRICS = [
    {
        label: 'Total Tickets',
        value: '56',
        subValue: 'All recorded load ticket',
        icon: Ticket,
        color: 'text-sky-500',
        bgColor: 'bg-sky-50'
    },
    {
        label: 'Verified Tickets',
        value: '56',
        subValue: 'All recorded load ticket',
        icon: ShieldCheck,
        color: 'text-lime-500',
        bgColor: 'bg-lime-50'
    },
    {
        label: 'Total Tonnage',
        value: '1280.7',
        subValue: 'Tons delivered across all tickets',
        icon: Package,
        color: 'text-emerald-500',
        bgColor: 'bg-emerald-50'
    },
];

export default function TicketsPage() {
    const [activeTab, setActiveTab] = useState('This Week');
    const [openMenuId, setOpenMenuId] = useState<string | null>(null);

    return (
        <div className="p-4 md:p-6 max-w-[1240px] mx-auto space-y-6" onClick={() => setOpenMenuId(null)}>
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-none">Tickets</h1>
                    <p className="text-[12px] text-gray-500 mt-1">View and manage all load tickets</p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    <div className="relative flex-1 sm:flex-none">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                        <input
                            type="text"
                            placeholder="Search by ticket No"
                            className="pl-9 pr-3 py-1.5 bg-white border border-gray-100 rounded-full text-xs w-full sm:w-48 focus:ring-2 focus:ring-[#0f172a] focus:border-transparent transition-all shadow-sm"
                        />
                    </div>

                    <div className="relative">
                        <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-100 rounded-full text-xs font-medium text-gray-700 hover:bg-gray-50 transition-all shadow-sm">
                            All Tickets
                            <ChevronDown size={16} className="text-gray-400" />
                        </button>
                    </div>

                    <div className="relative">
                        <button
                            onClick={() => setActiveTab(activeTab === 'This Week' ? 'This Month' : 'This Week')}
                            className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-100 rounded-full text-xs font-medium text-gray-700 hover:bg-gray-50 transition-all shadow-sm"
                        >
                            {activeTab}
                            <Calendar size={16} className="text-gray-400" />
                        </button>
                    </div>

                    <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#0f172a] rounded-full text-xs font-bold text-gray-900 hover:bg-gray-50 transition-all shadow-sm">
                        Share Ticket
                        <Share2 size={16} />
                    </button>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                {METRICS.map((metric, i) => (
                    <div key={i} className="bg-white p-2.5 rounded-xl border border-gray-100 shadow-sm flex items-start justify-between hover:shadow-md transition-shadow">
                        <div>
                            <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2 leading-none">
                                {metric.label}
                            </div>
                            <div className="text-base font-bold text-gray-900 leading-none">
                                {metric.value}
                            </div>
                        </div>
                        <div className={`p-1.5 rounded-lg shrink-0 ${metric.bgColor} ${metric.color}`}>
                            <metric.icon size={14} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[1000px]">
                        <thead>
                            <tr className="bg-white border-b border-gray-50">
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                                    <div className="flex items-center gap-2 cursor-pointer hover:text-gray-600 transition-colors">
                                        Date Created <ArrowUpDown size={14} className="text-gray-300" />
                                    </div>
                                </th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                                    <div className="flex items-center gap-2 cursor-pointer hover:text-gray-600 transition-colors">
                                        Job Name <ArrowUpDown size={14} className="text-gray-300" />
                                    </div>
                                </th>
                                <th className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                    <div className="flex items-center gap-2 cursor-pointer hover:text-gray-600 transition-colors">
                                        Client <ArrowUpDown size={14} className="text-gray-300" />
                                    </div>
                                </th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Quarry Location</th>
                                <th className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                    <div className="flex items-center gap-2">
                                        Type <Filter size={14} className="text-gray-300" />
                                    </div>
                                </th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Status</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Material</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {mockTickets.map((ticket) => (
                                <tr key={ticket.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-4 py-2">
                                        <div className="flex items-center gap-3">
                                            <div className="flex flex-col gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab">
                                                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                                                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                                                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                                            </div>
                                            <span className="text-xs font-medium text-gray-600">{ticket.dateCreated}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2">
                                        <span className="text-xs font-bold text-gray-900">{ticket.jobName}</span>
                                    </td>
                                    <td className="px-4 py-2 font-medium text-gray-600 text-xs">
                                        {ticket.client}
                                    </td>
                                    <td className="px-4 py-2 text-xs text-gray-600">
                                        {ticket.quarryLocation}
                                    </td>
                                    <td className="px-4 py-2">
                                        <span className="px-3 py-1 bg-gray-50 text-gray-500 text-[10px] font-bold rounded-full uppercase tracking-wider border border-gray-100">
                                            {ticket.type}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2 text-center">
                                        <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${ticket.status === 'Pending'
                                            ? 'bg-orange-50 text-orange-400 border border-orange-100/50'
                                            : 'bg-sky-50 text-sky-500 border border-sky-100/50'
                                            }`}>
                                            {ticket.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2 text-center">
                                        <span className="text-xs font-bold text-gray-900">{ticket.material}</span>
                                    </td>
                                    <td className="px-4 py-2 text-right relative">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setOpenMenuId(openMenuId === ticket.id ? null : ticket.id);
                                            }}
                                            className={`p-1 rounded-md transition-all border shadow-sm ${openMenuId === ticket.id
                                                ? 'bg-white border-gray-100 text-gray-900 ring-2 ring-gray-50'
                                                : 'hover:bg-white border-transparent hover:border-gray-100 text-gray-400 hover:text-gray-900'
                                                }`}
                                        >
                                            <MoreHorizontal size={16} />
                                        </button>

                                        {openMenuId === ticket.id && (
                                            <div
                                                className="absolute right-6 top-[70%] mt-2 w-40 bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-50 z-50 py-2 animate-in fade-in zoom-in duration-200 origin-top-right"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                                                    <Eye size={18} className="text-gray-300" />
                                                    <span>View</span>
                                                </button>
                                                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50/50 transition-colors">
                                                    <Trash2 size={18} />
                                                    <span>Delete</span>
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer / Pagination */}
                <div className="px-6 py-4 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-4 bg-gray-50/10">
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
                                        ? 'bg-white text-gray-900 shadow-sm border border-gray-100'
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

                        <div className="ml-4">
                            <select className="bg-white border-gray-100 text-gray-700 text-sm font-bold py-2 px-3 rounded-xl shadow-sm focus:ring-[#0f172a] focus:border-[#0f172a] border transition-all cursor-pointer outline-none">
                                <option>10/Page</option>
                                <option>20/Page</option>
                                <option>50/Page</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
