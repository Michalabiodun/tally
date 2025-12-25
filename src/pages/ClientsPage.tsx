import {
    Plus,
    Download,
    Search,
    X,
    ChevronDown,
    GripVertical,
    User,
    UserCheck,
    Clock,
    Mail,
    Phone,
    Trash2,
    DollarSign
} from 'lucide-react';
import { useState } from 'react';
import ActionMenu from '../components/ActionMenu';

interface Client {
    id: string;
    name: string;
    contactPerson: string;
    email: string;
    phone: string;
}

const mockClients: Client[] = [
    { id: '1', name: 'APC Grading & Hauling', contactPerson: 'Ajayi Micheal', email: 'zannujulius14@gmail.com', phone: '08102851218' },
    { id: '2', name: 'APC Grading & Hauling', contactPerson: '-', email: 'zannujulius14@gmail.com', phone: '08102851218' },
    { id: '3', name: 'APC Grading & Hauling', contactPerson: '-', email: 'zannujulius14@gmail.com', phone: '08102851218' },
    { id: '4', name: 'APC Grading & Hauling', contactPerson: '-', email: 'zannujulius14@gmail.com', phone: '08102851218' },
    { id: '5', name: 'APC Grading & Hauling', contactPerson: '-', email: 'zannujulius14@gmail.com', phone: '08102851218' },
];

const CLIENT_METRICS = [
    { label: 'Total Clients', value: '445,356', icon: User, color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
    { label: 'Active Jobs', value: '4,453', icon: UserCheck, color: 'text-green-600', bgColor: 'bg-green-50' },
    { label: 'Pending Jobs', value: '765', icon: Clock, color: 'text-yellow-600', bgColor: 'bg-yellow-50' },
    { label: 'Total Revenue', value: '$128,430', icon: DollarSign, color: 'text-sky-600', bgColor: 'bg-sky-50' },
];

const ClientsPage = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const [materials, setMaterials] = useState([
        { id: 1, jobType: '', placementType: '', material: '', amount: '' }
    ]);


    const addMaterialRow = () => {
        setMaterials([
            ...materials,
            { id: Date.now(), jobType: '', placementType: '', material: '', amount: '' }
        ]);
    };

    const removeMaterialRow = (id: number) => {
        if (materials.length > 1) {
            setMaterials(materials.filter(m => m.id !== id));
        }
    };

    return (
        <div className="p-4 md:p-6 max-w-[1240px] mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-none">Clients</h1>
                    <p className="text-[12px] text-gray-500 mt-1">Manage your client database and project assignments</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search Clients..."
                            className="pl-9 pr-4 py-1.5 bg-white border border-gray-200 rounded-full text-xs outline-none focus:ring-2 focus:ring-blue-100 transition-all w-48 sm:w-64"
                        />
                    </div>
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="flex items-center gap-2 px-4 py-1.5 bg-[#0f172a] text-white rounded-full text-xs font-semibold hover:bg-slate-800 transition-colors shadow-sm whitespace-nowrap"
                    >
                        <span>Add Client</span>
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
                {CLIENT_METRICS.map((metric, i) => (
                    <div key={i} className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm flex items-start justify-between">
                        <div>
                            <div className="text-[9px] md:text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 md:mb-3 leading-none">{metric.label}</div>
                            <div className="text-lg md:text-2xl font-bold text-gray-900 leading-none">{metric.value}</div>
                        </div>
                        <div className={`p-2 md:p-3 rounded-lg md:rounded-xl ${metric.bgColor} ${metric.color} shadow-sm border border-black/5`}>
                            <metric.icon size={18} className="md:w-6 md:h-6" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[900px]">
                        <thead>
                            <tr className="bg-white border-b border-gray-100">
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider w-1/4">Client</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider w-1/4">Contact Person</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider w-1/4">Email</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider w-1/4 text-center">Phone</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {mockClients.map((client) => (
                                <tr key={client.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <GripVertical size={14} className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab shrink-0" />
                                            <span className="text-xs font-medium text-gray-600">{client.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-xs font-medium text-gray-600">{client.contactPerson}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 text-gray-400">
                                            <Mail size={14} className="shrink-0" />
                                            <span className="text-xs font-medium text-gray-500">{client.email}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center gap-2 text-gray-400">
                                            <Phone size={14} className="shrink-0" />
                                            <span className="text-xs font-bold text-gray-600">{client.phone}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <ActionMenu
                                            onView={() => console.log('View client', client.id)}
                                            onDelete={() => console.log('Delete client', client.id)}
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
                        1-10 of 187 Users
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

            {/* Add New Client Modal */}
            {isAddModalOpen && (
                <div className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-[2px] z-[60] flex items-center justify-center p-4">
                    <div className="bg-white rounded-[24px] w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-300">
                        {/* Modal Header */}
                        <div className="p-6 pb-4 flex justify-between items-start border-b border-gray-50">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">Add New Client</h2>
                                <p className="text-sm text-gray-500 mt-1">Create a new client profile with their contact information and optional material pricing.</p>
                            </div>
                            <button
                                onClick={() => setIsAddModalOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Modal Content - Scrollable */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar">
                            <div className="p-8 space-y-8">
                                {/* Section: Client Information */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-bold text-gray-900 tracking-tight">Client Information</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-gray-600 ml-1">Client Name *</label>
                                            <input
                                                type="text"
                                                placeholder="Enter client name"
                                                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-gray-600 ml-1">Contact Person</label>
                                            <input
                                                type="text"
                                                placeholder="Enter contact person"
                                                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-gray-600 ml-1">Phone Number</label>
                                            <input
                                                type="text"
                                                placeholder="Enter phone number"
                                                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-gray-600 ml-1">Email</label>
                                            <input
                                                type="email"
                                                placeholder="Enter email address"
                                                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-600 ml-1">Address</label>
                                        <input
                                            type="text"
                                            placeholder="Enter address"
                                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                                        />
                                    </div>
                                </div>

                                {/* Section: Materials & Pricing */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-sm font-bold text-gray-900 tracking-tight">Materials & Pricing</h3>
                                            <p className="text-[11px] text-gray-400">Optional - Add material costs for this client</p>
                                        </div>
                                        <button
                                            onClick={addMaterialRow}
                                            className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 text-[#0f172a] rounded-lg text-xs font-bold hover:bg-gray-50 transition-colors shadow-sm"
                                        >
                                            <span>Add Material Row</span>
                                            <Plus size={14} />
                                        </button>
                                    </div>

                                    <div className="space-y-3">
                                        {materials.map((m) => (
                                            <div key={m.id} className="grid grid-cols-12 gap-3 items-end bg-gray-50/50 p-4 rounded-[20px] border border-gray-100">
                                                <div className="col-span-3 space-y-1.5">
                                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Job Type</label>
                                                    <div className="relative">
                                                        <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs appearance-none outline-none focus:ring-2 focus:ring-blue-100 transition-all">
                                                            <option value="">Select</option>
                                                        </select>
                                                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                                    </div>
                                                </div>
                                                <div className="col-span-3 space-y-1.5">
                                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Placement Type</label>
                                                    <div className="relative">
                                                        <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs appearance-none outline-none focus:ring-2 focus:ring-blue-100 transition-all">
                                                            <option value="">Select</option>
                                                        </select>
                                                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                                    </div>
                                                </div>
                                                <div className="col-span-2 space-y-1.5">
                                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Material</label>
                                                    <div className="relative">
                                                        <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs appearance-none outline-none focus:ring-2 focus:ring-blue-100 transition-all">
                                                            <option value="">Select</option>
                                                        </select>
                                                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                                    </div>
                                                </div>
                                                <div className="col-span-2 space-y-1.5">
                                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Amount ($)</label>
                                                    <input
                                                        type="text"
                                                        placeholder="0.00"
                                                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                                                    />
                                                </div>
                                                <div className="col-span-2">
                                                    <button
                                                        onClick={() => removeMaterialRow(m.id)}
                                                        disabled={materials.length === 1}
                                                        className={`w-full flex items-center justify-center gap-2 py-2 border rounded-xl text-[10px] font-bold transition-all ${materials.length === 1 ? 'border-gray-100 text-gray-300' : 'border-red-100 text-red-500 hover:bg-red-50 hover:border-red-200'}`}
                                                    >
                                                        <span>Remove</span>
                                                        <Trash2 size={12} />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-6 pt-4 flex gap-3 border-t border-gray-50 bg-gray-50/20">
                            <button
                                onClick={() => setIsAddModalOpen(false)}
                                className="flex-1 px-6 py-3 bg-white border border-gray-200 text-gray-900 rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                className="flex-1 px-6 py-3 bg-[#0f172a] text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
                            >
                                Create Client
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ClientsPage;
