import {
    Plus,
    Download,
    X,
    GripVertical,
    Grid3X3,
    Phone,
    ChevronDown,
    Trash2
} from 'lucide-react';
import { useState } from 'react';
import ActionMenu from '../components/ActionMenu';

interface Quarry {
    id: string;
    name: string;
    address: string;
    company: string;
    phone: string;
    created: string;
}

interface MaterialCost {
    id: string;
    material: string;
    cost: string;
}

const mockQuarries: Quarry[] = [
    { id: '1', name: 'APC Grading & Hauling', address: '1807 NC 54, Carrboro, NC 27510', company: 'Martin Marietta', phone: '08102851218', created: '5/28/2025' },
    { id: '2', name: 'APC Grading & Hauling', address: '1807 NC 54, Carrboro, NC 27510', company: 'Martin Marietta', phone: '08102851218', created: '5/28/2025' },
    { id: '3', name: 'APC Grading & Hauling', address: '1807 NC 54, Carrboro, NC 27510', company: 'Martin Marietta', phone: '08102851218', created: '5/28/2025' },
    { id: '4', name: 'APC Grading & Hauling', address: '1807 NC 54, Carrboro, NC 27510', company: 'Martin Marietta', phone: '08102851218', created: '5/28/2025' },
];

const QUARRY_METRICS = [
    { label: 'Total Quarries', value: '124', icon: Grid3X3, color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
    { label: 'Active Locations', value: '42', icon: Grid3X3, color: 'text-teal-600', bgColor: 'bg-teal-50' },
    { label: 'Verified Partners', value: '86', icon: Grid3X3, color: 'text-yellow-600', bgColor: 'bg-yellow-50' },
    { label: 'Support Status', value: '98%', icon: Grid3X3, color: 'text-green-600', bgColor: 'bg-green-50' },
];

const QuarryPage = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [materialRows, setMaterialRows] = useState<MaterialCost[]>([{ id: '1', material: '', cost: '' }]);


    const addMaterialRow = () => {
        setMaterialRows([...materialRows, { id: Math.random().toString(), material: '', cost: '' }]);
    };

    const removeMaterialRow = (id: string) => {
        setMaterialRows(materialRows.filter(row => row.id !== id));
    };

    return (
        <div className="p-4 md:p-6 max-w-[1240px] mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-none">Quarry Overview</h1>
                    <p className="text-[12px] text-gray-500 mt-1">Quick summary of quarry information</p>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="flex items-center gap-2 px-4 py-1.5 bg-[#0f172a] text-white rounded-full text-xs font-semibold hover:bg-slate-800 transition-colors shadow-sm whitespace-nowrap"
                    >
                        <span>Add Quarry</span>
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
                {QUARRY_METRICS.map((metric, i) => (
                    <div key={i} className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm flex items-start justify-between min-h-0">
                        <div>
                            <div className="text-[9px] md:text-[11px] font-bold text-gray-400 uppercase tracking-tight mb-2 md:mb-3 leading-none">{metric.label}</div>
                            <div className="text-lg md:text-2xl font-bold text-gray-900 leading-none">{metric.value}</div>
                        </div>
                        <div className={`p-2 md:p-2.5 rounded-lg md:rounded-xl ${metric.bgColor} ${metric.color} shadow-sm border border-black/5`}>
                            <metric.icon size={18} className="md:w-6 md:h-6" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-[24px] shadow-sm border border-gray-50 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[900px]">
                        <thead>
                            <tr className="bg-white border-b border-gray-50">
                                <th className="px-6 py-5 text-[11px] font-bold text-gray-400 uppercase tracking-wider w-[200px]">Name</th>
                                <th className="px-6 py-5 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Address</th>
                                <th className="px-6 py-5 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Company</th>
                                <th className="px-6 py-5 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Phone</th>
                                <th className="px-6 py-5 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Created</th>
                                <th className="px-6 py-5 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {mockQuarries.map((quarry) => (
                                <tr key={quarry.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <GripVertical size={14} className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab shrink-0" />
                                            <span className="text-xs font-bold text-gray-700">{quarry.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-[11px] font-medium text-gray-600">{quarry.address}</td>
                                    <td className="px-6 py-4 text-[11px] font-bold text-gray-700">{quarry.company}</td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="flex items-center justify-center gap-2 text-gray-300">
                                            <Phone size={14} className="shrink-0" />
                                            <span className="text-[11px] font-bold text-gray-600">{quarry.phone}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-[11px] font-medium text-gray-500 text-center">{quarry.created}</td>
                                    <td className="px-6 py-4 text-center">
                                        <ActionMenu
                                            onView={() => console.log('View quarry', quarry.id)}
                                            onDelete={() => console.log('Delete quarry', quarry.id)}
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

            {/* Add New Quarry Modal */}
            {isAddModalOpen && (
                <div className="fixed inset-0 bg-[#0f172a]/30 backdrop-blur-[1px] z-[70] flex items-center justify-center p-4">
                    <div className="bg-white rounded-[24px] w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-300">
                        {/* Modal Header */}
                        <div className="p-6 pb-4 flex justify-between items-start border-b border-gray-50 relative">
                            <div className="flex-1 text-center">
                                <h2 className="text-xl font-bold text-gray-900 leading-none">Add New Quarry</h2>
                                <p className="text-[11px] text-gray-500 mt-2 font-medium uppercase tracking-tight">Enter the quarry details and optionally add materials with their costs.</p>
                            </div>
                            <button
                                onClick={() => setIsAddModalOpen(false)}
                                className="absolute right-6 top-6 p-1.5 hover:bg-gray-100 rounded-full transition-all text-gray-400"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Modal Scrollable Content */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                            <div className="space-y-8">
                                {/* Section: Quarry Details */}
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900 mb-6 flex items-center gap-2">
                                        Quarry Details
                                    </h3>
                                    <div className="grid grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <label className="text-[11px] font-bold text-gray-600 ml-1">Quarry Name *</label>
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
                                        <div className="space-y-1.5">
                                            <label className="text-[11px] font-bold text-gray-600 ml-1">Address</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 bg-white border border-gray-100 rounded-2xl text-[13px] outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[11px] font-bold text-gray-600 ml-1">Phone No</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 bg-white border border-gray-100 rounded-2xl text-[13px] outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Section: Materials & Costs */}
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <div>
                                            <h3 className="text-sm font-bold text-gray-900">Materials & Costs (Optional)</h3>
                                            <p className="text-[10px] text-gray-400 mt-1 font-medium">Optional - Add material costs for this client</p>
                                        </div>
                                        <button
                                            onClick={addMaterialRow}
                                            className="flex items-center gap-2 px-4 py-1.5 border border-gray-100 rounded-full text-[10px] font-bold text-gray-600 hover:bg-gray-50 transition-all shadow-sm"
                                        >
                                            Add Material Row <Plus size={10} />
                                        </button>
                                    </div>

                                    <div className="space-y-3">
                                        {materialRows.map((row) => (
                                            <div key={row.id} className="p-5 bg-blue-50/20 rounded-[24px] flex items-center gap-4 group transition-all hover:bg-blue-50/40 border border-blue-50/10">
                                                <div className="flex-1 grid grid-cols-2 gap-4">
                                                    <div className="space-y-1.5">
                                                        <label className="text-[9px] font-bold text-blue-900/60 uppercase tracking-wider ml-1">Material</label>
                                                        <div className="relative">
                                                            <select className="w-full px-4 py-2.5 bg-white border border-blue-100/30 rounded-xl text-xs font-medium text-gray-600 outline-none appearance-none cursor-pointer pr-10">
                                                                <option value="">Select Material</option>
                                                                <option>Sand</option>
                                                                <option>Gravel</option>
                                                            </select>
                                                            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400 pointer-events-none" />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <label className="text-[9px] font-bold text-blue-900/60 uppercase tracking-wider ml-1">Cost per Ton ($)</label>
                                                        <input
                                                            type="text"
                                                            placeholder="0.00"
                                                            className="w-full px-4 py-2.5 bg-white border border-blue-100/30 rounded-xl text-xs font-medium outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                                                        />
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => removeMaterialRow(row.id)}
                                                    className="p-3.5 bg-white border border-red-50 text-red-400 rounded-xl hover:bg-red-50 transition-all group-hover:shadow-md"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-[10px] font-bold uppercase tracking-wider">Remove</span>
                                                        <Trash2 size={14} />
                                                    </div>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-8 pt-4 flex gap-4 border-t border-gray-50 bg-gray-50/10">
                            <button
                                onClick={() => setIsAddModalOpen(false)}
                                className="flex-1 px-8 py-3.5 bg-white border border-gray-100 text-gray-900 rounded-2xl text-xs font-bold hover:bg-gray-50 transition-colors shadow-sm"
                            >
                                Cancel
                            </button>
                            <button
                                className="flex-1 px-8 py-3.5 bg-[#1e293b] text-white rounded-2xl text-xs font-bold hover:bg-[#0f172a] transition-all shadow-xl shadow-slate-200"
                            >
                                Create Quarry
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuarryPage;
