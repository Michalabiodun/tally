import {
    Plus,
    Download,
    X,
    GripVertical,
    ChevronDown,
    Mail,
    Phone,
    Users,
    UserCheck,
    Building2,
    UserPlus
} from 'lucide-react';
import { useState } from 'react';
import ActionMenu from '../components/ActionMenu';

interface Manager {
    id: string;
    companyName: string;
    status: 'Active' | 'Inactive';
    email: string;
    contact: string;
}

const mockManagers: Manager[] = [
    { id: '1', companyName: 'T&T Trucking', status: 'Active', email: 'zannujulius14@gmail.com', contact: '08102851218' },
    { id: '2', companyName: 'Zannu Julius', status: 'Active', email: 'zannujulius14@gmail.com', contact: '08102851218' },
    { id: '3', companyName: 'Zannu Julius', status: 'Active', email: 'zannujulius14@gmail.com', contact: '08102851218' },
    { id: '4', companyName: 'Zannu Julius', status: 'Active', email: 'zannujulius14@gmail.com', contact: '08102851218' },
];

const MANAGER_METRICS = [
    { label: 'Total Managers', value: '1,240', icon: Users, color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
    { label: 'Active Status', value: '482', icon: UserCheck, color: 'text-green-600', bgColor: 'bg-green-50' },
    { label: 'Total Companies', value: '$24,500', icon: Building2, color: 'text-yellow-600', bgColor: 'bg-yellow-50' },
    { label: 'New Requests', value: '12', icon: UserPlus, color: 'text-red-600', bgColor: 'bg-red-50' },
];

const ManagersPage = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);


    return (
        <div className="p-4 md:p-6 max-w-[1240px] mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-none">Managers</h1>
                    <p className="text-[12px] text-gray-500 mt-1">Manage partner managers and track their company status</p>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="flex items-center gap-2 px-4 py-1.5 bg-[#0f172a] text-white rounded-full text-xs font-semibold hover:bg-slate-800 transition-colors shadow-sm whitespace-nowrap"
                    >
                        <span>Add Manager</span>
                        <Plus size={14} />
                    </button>
                    <button className="flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-full text-xs font-semibold hover:bg-gray-50 transition-colors shadow-sm">
                        <span>Import</span>
                        <Download size={14} />
                    </button>
                </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {MANAGER_METRICS.map((metric, i) => (
                    <div key={i} className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm flex items-start justify-between min-h-0">
                        <div>
                            <div className="text-[9px] md:text-[11px] font-bold text-gray-400 uppercase tracking-tight mb-2 md:mb-3 leading-none">{metric.label}</div>
                            <div className="text-lg md:text-2xl font-bold text-gray-900 leading-none">{metric.value}</div>
                        </div>
                        <div className={`p-2 md:p-2.5 rounded-lg md:rounded-xl ${metric.bgColor} ${metric.color} shadow-sm border border-black/5`}>
                            <metric.icon size={18} className="md:w-[22px] md:h-[22px]" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-[24px] shadow-sm border border-gray-50/50 overflow-hidden">
                <div className="p-6 pb-2 flex items-center gap-4">
                    <div className="relative">
                        <select className="pl-4 pr-10 py-2 bg-white border border-gray-100 rounded-xl text-xs font-medium text-gray-600 outline-none hover:bg-gray-50 transition-all appearance-none min-w-[120px]">
                            <option>All Status</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                    <div className="relative">
                        <select className="pl-4 pr-10 py-2 bg-white border border-gray-100 rounded-xl text-xs font-medium text-gray-600 outline-none hover:bg-gray-50 transition-all appearance-none min-w-[120px]">
                            <option>Contractors</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="bg-white border-b border-gray-50">
                                <th className="px-6 py-5 text-[11px] font-bold text-gray-400 uppercase tracking-wider w-1/4">Company Name</th>
                                <th className="px-6 py-5 text-[11px] font-bold text-gray-400 uppercase tracking-wider w-[150px] text-center">Status</th>
                                <th className="px-6 py-5 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-5 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Contact</th>
                                <th className="px-6 py-5 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {mockManagers.map((manager) => (
                                <tr key={manager.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <GripVertical size={14} className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab shrink-0" />
                                            <span className="text-xs font-bold text-gray-700">{manager.companyName}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="px-4 py-1.5 bg-green-50/50 text-green-500 text-[10px] font-bold rounded-full border border-green-50 inline-block min-w-[90px]">
                                            {manager.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 text-gray-300">
                                            <Mail size={14} className="shrink-0" />
                                            <span className="text-[11px] font-medium text-gray-500">{manager.email}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center gap-2 text-gray-300">
                                            <Phone size={14} className="shrink-0" />
                                            <span className="text-[11px] font-bold text-gray-600">{manager.contact}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <ActionMenu
                                            onView={() => console.log('View manager', manager.id)}
                                            onDelete={() => console.log('Delete manager', manager.id)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-6 border-t border-gray-50 flex items-center justify-between">
                    <div className="text-[11px] font-bold text-gray-400 tracking-wider">
                        1-40 of 187 jobs
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                            <button className="w-8 h-8 flex items-center justify-center rounded-full text-xs text-gray-400 hover:bg-gray-50 transition-colors">‹</button>
                            {[1, 2, 3, 4, 5].map((page) => (
                                <button
                                    key={page}
                                    className={`w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold transition-all ${page === 1 ? 'bg-[#0f172a] text-white shadow-lg shadow-slate-200' : 'text-gray-400 hover:bg-gray-50'}`}
                                >
                                    {page}
                                </button>
                            ))}
                            <button className="w-8 h-8 flex items-center justify-center rounded-full text-xs text-gray-400 hover:bg-gray-50 transition-colors">›</button>
                        </div>
                        <div className="relative ml-2">
                            <select className="pl-4 pr-10 py-1.5 bg-white border border-gray-100 rounded-full text-[11px] font-bold text-gray-600 outline-none appearance-none hover:bg-gray-50 shadow-sm transition-all min-w-[120px]">
                                <option>100 / Page</option>
                            </select>
                            <ChevronDown size={12} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Add New Manager Modal */}
            {isAddModalOpen && (
                <div className="fixed inset-0 bg-[#0f172a]/30 backdrop-blur-[1px] z-[70] flex items-center justify-center p-4">
                    <div className="bg-white rounded-[24px] w-full max-w-lg shadow-2xl relative animate-in fade-in zoom-in duration-300 overflow-hidden">
                        {/* Close button top right */}
                        <button
                            onClick={() => setIsAddModalOpen(false)}
                            className="absolute right-6 top-6 p-1.5 text-gray-400 hover:bg-gray-100 rounded-full transition-all"
                        >
                            <X size={16} />
                        </button>

                        <div className="p-10 pt-12 space-y-8">
                            <div className="text-center">
                                <h2 className="text-[22px] font-bold text-gray-900 leading-none">Add New Manager</h2>
                                <p className="text-sm text-gray-500 mt-2">Add a new manager to the system.</p>
                            </div>

                            <div className="space-y-5">
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold text-gray-600 ml-1">Manager Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 bg-white border border-gray-100 rounded-2xl text-[13px] outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold text-gray-600 ml-1">Company</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 bg-white border border-gray-100 rounded-2xl text-[13px] outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold text-gray-600 ml-1">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 bg-white border border-gray-100 rounded-2xl text-[13px] outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold text-gray-600 ml-1">Phone Number</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 bg-white border border-gray-100 rounded-2xl text-[13px] outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button
                                    onClick={() => setIsAddModalOpen(false)}
                                    className="flex-1 px-8 py-3.5 bg-white border border-gray-100 text-gray-900 rounded-2xl text-xs font-bold hover:bg-gray-50 transition-colors shadow-sm"
                                >
                                    Cancel
                                </button>
                                <button
                                    className="flex-1 px-8 py-3.5 bg-[#1e293b] text-white rounded-2xl text-xs font-bold hover:bg-[#0f172a] transition-all shadow-xl shadow-slate-200"
                                >
                                    Create Manager
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManagersPage;
