import {
    Plus,
    Download,
    Search,
    X,
    GripVertical,
    Database,
    DollarSign,
    Calculator,
    ArrowUpDown,
    Truck
} from 'lucide-react';
import { useState } from 'react';
import ActionMenu from '../components/ActionMenu';

interface Material {
    id: string;
    name: string;
    code: string;
    description: string;
}

interface Payable {
    id: string;
    dateCreated: string;
    jobName: string;
    client: string;
    poNumber: string;
    quarry: string;
    materials: string;
    load: string;
}

const mockMaterials: Material[] = [
    { id: '1', name: 'APC Grading & Hauling', code: '#45677', description: 'Large railroad ballast-sized stone' },
    { id: '2', name: 'APC Grading & Hauling', code: '#45677', description: 'Large railroad ballast-sized stone' },
    { id: '3', name: 'APC Grading & Hauling', code: '#45677', description: 'Large railroad ballast-sized stone' },
    { id: '4', name: 'APC Grading & Hauling', code: '#45677', description: 'Large railroad ballast-sized stone' },
    { id: '5', name: 'APC Grading & Hauling', code: '#45677', description: 'Large railroad ballast-sized stone' },
];

const mockPayables: Payable[] = [
    { id: '1', dateCreated: '09/08/25 07:49', jobName: "Adam's Electric", client: 'Demo-job', poNumber: 'NK.Denver', quarry: 'Tonnage', materials: 'Dumped', load: '67' },
    { id: '2', dateCreated: '09/08/25 07:49', jobName: "Adam's Electric", client: 'Demo-job', poNumber: 'NK.Denver', quarry: 'Tonnage', materials: 'Dumped', load: '67' },
    { id: '3', dateCreated: '09/08/25 07:49', jobName: "Adam's Electric", client: 'Demo-job', poNumber: 'NK.Denver', quarry: 'Tonnage', materials: 'Dumped', load: '67' },
    { id: '4', dateCreated: '09/08/25 07:49', jobName: "Adam's Electric", client: 'Demo-job', poNumber: 'NK.Denver', quarry: 'Tonnage', materials: 'Dumped', load: '67' },
];

const MATERIAL_METRICS = [
    { label: 'Total Materials', value: '187', icon: Database, color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
    { label: 'Total material Cost 2026', value: '$84,200', icon: Calculator, color: 'text-green-600', bgColor: 'bg-green-50' },
    { label: 'Total Amount Payable', value: '$42,350', icon: DollarSign, color: 'text-yellow-600', bgColor: 'bg-yellow-50' },
    { label: 'Total Tons Distributed', value: '45,670', icon: Truck, color: 'text-sky-600', bgColor: 'bg-sky-50' },
];

const MaterialsPage = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const [quarrySearch, setQuarrySearch] = useState('');
    const quarries = [
        'Heidelberg Princeton', 'American Stone', 'American Stone',
        'Heidelberg Princeton', 'American Stone', 'American Stone',
        'Heidelberg Princeton', 'American Stone', 'American Stone',
        'Heidelberg Princeton', 'American Stone', 'American Stone',
        'Heidelberg Princeton', 'American Stone', 'American Stone',
    ];

    const [payableTab, setPayableTab] = useState<'Default' | 'Paid'>('Default');

    return (
        <div className="p-4 md:p-6 max-w-[1240px] mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-none">Materials</h1>
                    <p className="text-[12px] text-gray-500 mt-1">Manage materials and track material payables</p>
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
                        <span>Add Materials</span>
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
                {MATERIAL_METRICS.map((metric, i) => (
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

            {/* Table 1: Materials */}
            <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[900px]">
                        <thead>
                            <tr className="bg-white border-b border-gray-100">
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider w-1/4">Name</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider w-1/4">Code</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider w-1/3">Description</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {mockMaterials.map((material) => (
                                <tr key={material.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <GripVertical size={14} className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab shrink-0" />
                                            <span className="text-xs font-medium text-gray-600">{material.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-xs font-bold text-gray-900 leading-none">{material.code}</td>
                                    <td className="px-6 py-4 text-[11px] text-gray-500">{material.description}</td>
                                    <td className="px-6 py-4 text-center">
                                        <ActionMenu
                                            onView={() => console.log('View material', material.id)}
                                            onDelete={() => console.log('Delete material', material.id)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Materials */}
                <div className="p-4 border-t border-gray-50 flex items-center justify-between">
                    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                        1-40 of 187 jobs
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                            <button className="w-7 h-7 flex items-center justify-center rounded-full text-xs text-gray-400 hover:bg-gray-50">‹</button>
                            {[1, 2, 3, 4, 5].map((page) => (
                                <button
                                    key={page}
                                    className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold transition-all ${page === 1 ? 'bg-[#0f172a] text-white' : 'text-gray-400 hover:bg-gray-50'}`}
                                >
                                    {page}
                                </button>
                            ))}
                            <button className="w-7 h-7 flex items-center justify-center rounded-full text-xs text-gray-400 hover:bg-gray-50">›</button>
                        </div>
                        <select className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-[10px] font-bold text-gray-600 outline-none">
                            <option>100 / Page</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Table 2: Material Payable Table */}
            <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                    <h2 className="text-sm font-bold text-gray-900">Material Payable Table</h2>
                    <div className="flex items-center gap-2 p-1 bg-gray-50 rounded-full">
                        <button
                            onClick={() => setPayableTab('Default')}
                            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold transition-all ${payableTab === 'Default' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-400'}`}
                        >
                            <div className={`w-2.5 h-2.5 rounded-full border-2 ${payableTab === 'Default' ? 'border-gray-200 bg-white' : 'border-gray-300 bg-transparent'}`} />
                            Default
                        </button>
                        <button
                            onClick={() => setPayableTab('Paid')}
                            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold transition-all ${payableTab === 'Paid' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-400'}`}
                        >
                            <div className={`w-2.5 h-2.5 rounded-full border-2 ${payableTab === 'Paid' ? 'border-green-400 bg-green-400' : 'border-gray-300 bg-transparent'}`} />
                            Paid
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[1000px]">
                        <thead>
                            <tr className="bg-white border-b border-gray-100">
                                <th className="px-6 py-4 w-10">
                                    <input type="checkbox" className="w-3.5 h-3.5 rounded-md border-gray-300 text-blue-600 focus:ring-blue-100" />
                                </th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                    <div className="flex items-center gap-1">Date Created <ArrowUpDown size={10} /></div>
                                </th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                    <div className="flex items-center gap-1">Job Name <ArrowUpDown size={10} /></div>
                                </th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                    <div className="flex items-center gap-1">Client <ArrowUpDown size={10} /></div>
                                </th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">PO Number</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                    <div className="flex items-center gap-1">Quarry <ArrowUpDown size={10} /></div>
                                </th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Materials</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Load</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {mockPayables.map((payable) => (
                                <tr key={payable.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-3">
                                        <input type="checkbox" className="w-3.5 h-3.5 rounded-md border-gray-200 text-blue-600 focus:ring-blue-100" />
                                    </td>
                                    <td className="px-6 py-3 text-[10px] font-medium text-gray-800">{payable.dateCreated}</td>
                                    <td className="px-6 py-3 text-[10px] font-bold text-gray-700">{payable.jobName}</td>
                                    <td className="px-6 py-3 text-[10px] font-medium text-gray-600">{payable.client}</td>
                                    <td className="px-6 py-3 text-[10px] font-bold text-gray-900">{payable.poNumber}</td>
                                    <td className="px-6 py-3">
                                        <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[9px] font-bold rounded-full border border-blue-100 min-w-[60px] inline-block text-center uppercase">
                                            {payable.quarry}
                                        </span>
                                    </td>
                                    <td className="px-6 py-3 text-center">
                                        <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[9px] font-bold rounded-full border border-indigo-100 min-w-[60px] inline-block text-center uppercase">
                                            {payable.materials}
                                        </span>
                                    </td>
                                    <td className="px-6 py-3 text-[11px] font-bold text-gray-900 text-center">{payable.load}</td>
                                    <td className="px-6 py-3 text-center">
                                        <ActionMenu
                                            onView={() => console.log('View payable', payable.id)}
                                            onDelete={() => console.log('Delete payable', payable.id)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Payables */}
                <div className="p-4 border-t border-gray-50 flex items-center justify-between">
                    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                        1-40 of 187 jobs
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                            <button className="w-7 h-7 flex items-center justify-center rounded-full text-xs text-gray-400 hover:bg-gray-50">‹</button>
                            {[1, 2, 3, 4, 5].map((page) => (
                                <button
                                    key={page}
                                    className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold transition-all ${page === 1 ? 'bg-[#0f172a] text-white' : 'text-gray-400 hover:bg-gray-50'}`}
                                >
                                    {page}
                                </button>
                            ))}
                            <button className="w-7 h-7 flex items-center justify-center rounded-full text-xs text-gray-400 hover:bg-gray-50">›</button>
                        </div>
                        <select className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-[10px] font-bold text-gray-600 outline-none">
                            <option>10Page</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Add New Material Modal */}
            {isAddModalOpen && (
                <div className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-[2px] z-[60] flex items-center justify-center p-4">
                    <div className="bg-white rounded-[24px] w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-300">
                        {/* Modal Header */}
                        <div className="p-6 pb-4 flex justify-between items-start border-b border-gray-50">
                            <div className="flex-1 text-center">
                                <h2 className="text-xl font-bold text-gray-900">Add New Material</h2>
                                <p className="text-sm text-gray-500 mt-1">Create a new material bla bla</p>
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
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-600 ml-1">Name *</label>
                                        <input
                                            type="text"
                                            placeholder="Enter material name"
                                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-600 ml-1">Code</label>
                                        <input
                                            type="text"
                                            placeholder="Enter code"
                                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-gray-600 ml-1">Description</label>
                                    <textarea
                                        placeholder="Write description notes here"
                                        rows={4}
                                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm resize-none"
                                    />
                                </div>

                                {/* Quarries Section */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-sm font-bold text-gray-900 tracking-tight">Quarries (Optional)</h3>
                                            <p className="text-[11px] text-gray-400">Optional - Add material costs for this client</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button className="px-3 py-1 bg-white border border-gray-200 text-[#0f172a] rounded-lg text-[10px] font-bold hover:bg-gray-50 transition-colors shadow-sm">Select All</button>
                                            <button className="px-3 py-1 bg-white border border-gray-200 text-[#0f172a] rounded-lg text-[10px] font-bold hover:bg-gray-50 transition-colors shadow-sm">Clear All</button>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Search quarries..."
                                            value={quarrySearch}
                                            onChange={(e) => setQuarrySearch(e.target.value)}
                                            className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                                        />
                                    </div>

                                    <div className="grid grid-cols-3 gap-y-3 gap-x-6 max-h-[200px] overflow-y-auto custom-scrollbar p-1">
                                        {quarries.map((quarry, idx) => (
                                            <label key={idx} className="flex items-center gap-2 cursor-pointer group">
                                                <div className="relative flex items-center">
                                                    <input type="checkbox" className="peer w-4 h-4 rounded border-gray-200 text-blue-600 focus:ring-blue-100" />
                                                </div>
                                                <span className="text-[11px] text-gray-500 font-medium group-hover:text-gray-900 transition-colors">{quarry}</span>
                                            </label>
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
                                Create Material
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MaterialsPage;
