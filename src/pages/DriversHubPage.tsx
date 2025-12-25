import {
    Plus,
    Download,
    Search,
    X,
    ChevronDown,
    GripVertical,
    Phone,
    Mail,
    Eye,
    EyeOff,
    Info,
    Truck,
    CheckCircle2,
    Clock,
    UserX,
    Settings,
    ShieldCheck
} from 'lucide-react';
import { useState } from 'react';
import ActionMenu from '../components/ActionMenu';

interface Driver {
    id: string;
    name: string;
    status: 'On Job' | 'Available' | 'Off Duty' | 'Maintenance' | 'Registered' | 'Pending';
    assignedTruck: string;
    phone: string;
    email: string;
}

const mockDrivers: Driver[] = [
    { id: '1', name: 'Zannu Julius', status: 'Available', assignedTruck: 'S-2301', phone: '08102851218', email: 'zannujulius14@gmail.com' },
    { id: '2', name: 'Zannu Julius', status: 'Off Duty', assignedTruck: 'S-2301', phone: '08102851218', email: 'zannujulius14@gmail.com' },
    { id: '3', name: 'Zannu Julius', status: 'Off Duty', assignedTruck: 'S-2301', phone: '08102851218', email: 'zannujulius14@gmail.com' },
    { id: '4', name: 'Zannu Julius', status: 'Off Duty', assignedTruck: 'S-2301', phone: '08102851218', email: 'zannujulius14@gmail.com' },
];

const STATUS_METRICS = [
    { label: 'On Job', value: '56', icon: Truck, color: 'text-green-500', bgColor: 'bg-green-50' },
    { label: 'Available', value: '445356', icon: CheckCircle2, color: 'text-indigo-500', bgColor: 'bg-indigo-50' },
    { label: 'Off Duty', value: '56', icon: UserX, color: 'text-yellow-500', bgColor: 'bg-yellow-50' },
    { label: 'Maintenance', value: '56', icon: Settings, color: 'text-orange-500', bgColor: 'bg-orange-50' },
    { label: 'Registered', value: '56', icon: ShieldCheck, color: 'text-teal-500', bgColor: 'bg-teal-50' },
    { label: 'Pending', value: '56', icon: Clock, color: 'text-amber-500', bgColor: 'bg-amber-50' },
];

const SYNC_METRICS = [
    { label: 'Synced', value: '56', color: 'text-gray-400' },
    { label: 'Out of sync', value: '56', color: 'text-gray-400' },
    { label: 'Error', value: '56', color: 'text-gray-400' },
];

const DriversHubPage = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);


    const getStatusStyles = (status: string) => {
        switch (status) {
            case 'On Job': return 'bg-green-50 text-green-600 border-green-100';
            case 'Available': return 'bg-green-50 text-green-600 border-green-100'; // Design shows available as green light
            case 'Off Duty': return 'bg-gray-100 text-gray-500 border-gray-100';
            case 'Maintenance': return 'bg-orange-50 text-orange-600 border-orange-100';
            case 'Registered': return 'bg-teal-50 text-teal-600 border-teal-100';
            case 'Pending': return 'bg-amber-50 text-amber-600 border-amber-100';
            default: return 'bg-gray-50 text-gray-600 border-gray-100';
        }
    };

    return (
        <div className="p-4 md:p-6 max-w-[1240px] mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-none">Driver's hub</h1>
                    <p className="text-[12px] text-gray-500 mt-1">Manage your drivers here</p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="flex items-center gap-2 px-4 py-1.5 bg-[#0f172a] text-white rounded-full text-xs font-semibold hover:bg-slate-800 transition-colors shadow-sm"
                    >
                        <span>Add Driver</span>
                        <Plus size={14} />
                    </button>
                    <button className="flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-full text-xs font-semibold hover:bg-gray-50 transition-colors shadow-sm">
                        <span>Import</span>
                        <Download size={14} />
                    </button>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-3">
                {STATUS_METRICS.map((metric, i) => (
                    <div key={i} className="bg-white p-3.5 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center">
                        <div className="flex items-center gap-1.5 mb-2">
                            <metric.icon size={12} className={metric.color} />
                            <span className={`text-[9px] font-bold uppercase tracking-wider ${metric.color}`}>{metric.label}</span>
                        </div>
                        <div className="text-sm font-bold text-gray-900">{metric.value}</div>
                    </div>
                ))}

                {/* Sync Summary Card */}
                <div className="lg:col-span-3 bg-white p-3.5 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between h-full">
                        {SYNC_METRICS.map((sync, i) => (
                            <div key={i} className="flex flex-col items-center flex-1 px-4 relative">
                                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2">{sync.label}</span>
                                <span className="text-sm font-bold text-gray-900">{sync.value}</span>
                                {i < SYNC_METRICS.length - 1 && (
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-6 bg-gray-100" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h2 className="text-sm font-bold text-gray-900">Driver Management</h2>

                    <div className="flex flex-wrap items-center gap-2">
                        <div className="relative">
                            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search Drivers..."
                                className="pl-9 pr-4 py-1.5 bg-gray-50 border border-transparent rounded-full text-xs outline-none focus:bg-white focus:border-gray-200 transition-all w-56"
                            />
                        </div>
                        <div className="relative">
                            <select className="pl-4 pr-9 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 appearance-none outline-none cursor-pointer hover:bg-gray-50 transition-colors">
                                <option>All Status</option>
                            </select>
                            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                        <div className="relative">
                            <select className="pl-4 pr-9 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 appearance-none outline-none cursor-pointer hover:bg-gray-50 transition-colors">
                                <option>Drivers</option>
                            </select>
                            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[900px]">
                        <thead>
                            <tr className="bg-white border-y border-gray-100">
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Driver</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Status</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Assigned Truck</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Contact</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {mockDrivers.map((driver) => (
                                <tr key={driver.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-6 py-3">
                                        <div className="flex items-center gap-3">
                                            <GripVertical size={14} className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab" />
                                            <span className="text-xs font-medium text-gray-600">{driver.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-3 text-center">
                                        <span className={`px-2.5 py-0.5 text-[9px] font-bold rounded-full border ${getStatusStyles(driver.status)} inline-block min-w-[70px]`}>
                                            {driver.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-3 text-xs font-bold text-gray-900 text-center">{driver.assignedTruck}</td>
                                    <td className="px-6 py-3">
                                        <div className="flex flex-col gap-0.5">
                                            <div className="flex items-center gap-1.5 text-gray-600">
                                                <Phone size={10} className="text-gray-400" />
                                                <span className="text-[10px] font-bold">{driver.phone}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-gray-400">
                                                <Mail size={10} className="text-gray-400" />
                                                <span className="text-[10px]">{driver.email}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-3 text-center">
                                        <ActionMenu
                                            onView={() => console.log('View driver', driver.id)}
                                            onDelete={() => console.log('Delete driver', driver.id)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-4 border-t border-gray-50 flex items-center justify-between">
                    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                        1-10 of 187 Drivers
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((page) => (
                                <button
                                    key={page}
                                    className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold transition-all ${page === 1 ? 'bg-[#0f172a] text-white shadow-md shadow-slate-200' : 'text-gray-400 hover:bg-gray-50'}`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                        <select className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-[10px] font-bold text-gray-600 outline-none">
                            <option>100 / Page</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Invite Driver Modal */}
            {isAddModalOpen && (
                <div className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-[2px] z-[60] flex items-center justify-center p-4">
                    <div className="bg-white rounded-[24px] w-full max-w-xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-300">
                        {/* Modal Header */}
                        <div className="p-6 pb-4 flex justify-between items-start">
                            <div className="flex-1 text-center">
                                <h2 className="text-xl font-bold text-gray-900">Invite a new driver</h2>
                                <p className="text-sm text-gray-500 mt-1">Enter the driver's details below to send them an invitation to join the platform.</p>
                            </div>
                            <button
                                onClick={() => setIsAddModalOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="px-8 py-6 space-y-4">
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-600 ml-1">Driver Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter driver's name"
                                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-gray-600 ml-1">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter email address"
                                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-gray-600 ml-1">Default Password</label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Enter password"
                                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                                        />
                                        <button
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-sky-50 p-4 rounded-xl border border-sky-100 flex gap-3">
                                <div className="p-1 bg-white rounded-full h-fit border border-sky-200 mt-0.5">
                                    <Info size={14} className="text-sky-500" />
                                </div>
                                <p className="text-[11px] text-sky-700 leading-relaxed">
                                    The driver will receive an email with a registration code and instructions to register on the LoadTally platform.
                                </p>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-6 pt-4 flex gap-3">
                            <button
                                onClick={() => setIsAddModalOpen(false)}
                                className="flex-1 px-6 py-3 border border-gray-200 text-gray-900 rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                className="flex-1 px-6 py-3 bg-[#0f172a] text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
                            >
                                Send Invitation
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DriversHubPage;
