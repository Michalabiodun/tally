import {
    Search,
    Plus,
    Download,
    MoreHorizontal,
    ChevronLeft,
    ChevronRight,
    ArrowUpDown,
    Eye,
    Pencil,
    Trash2,
    Calendar,
    Clock,
    Users,
    Truck,
    FileText,
    Copy,
    Share2,
    ArrowLeft,
    X,
    ChevronDown
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const DispatchManagement = () => {
    const [openMenuId, setOpenMenuId] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        job: '',
        client: 'Demo-job',
        dumpSite: 'NK, Denver',
        quarry: '',
        materials: '67',
        useSubcontractor: false,
        driver: '',
        truck: 'T-2501',
        notes: ''
    });
    const menuRef = useRef<HTMLDivElement>(null);

    const isStep1Valid = () => {
        return !!(formData.job && formData.driver && formData.truck);
    };

    const handleNext = () => {
        if (currentStep === 1 && isStep1Valid()) {
            setCurrentStep(2);
        } else if (currentStep === 2) {
            setCurrentStep(3);
        } else if (currentStep === 3) {
            setIsCreateModalOpen(false);
            setCurrentStep(1);
        }
    };

    // Mock data generation for 5 pages
    const allDispatchData = Array.from({ length: 45 }, (_, i) => ({
        id: i,
        dateCreated: '09/08/25 07:49',
        jobName: i % 3 === 0 ? "Adam's Electric" : i % 3 === 1 ? "Baker Construction" : "City Utilities",
        client: 'Demo-job',
        location: 'NK, Denver',
        type: 'Tonnage',
        dumpedSlung: 'Dumped',
        material: '67',
        status: i % 5 === 0 ? 'attention' : i % 5 === 1 ? 'invoice' : i % 5 === 2 ? 'reviewed' : i % 5 === 3 ? 'check' : 'default'
    }));

    const itemsPerPage = 7;
    const totalPages = Math.ceil(allDispatchData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = allDispatchData.slice(startIndex, startIndex + itemsPerPage);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpenMenuId(null);
            }
        };

        if (openMenuId !== null) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openMenuId]);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'attention': return 'bg-red-500';
            case 'invoice': return 'bg-emerald-500';
            case 'reviewed': return 'bg-slate-800';
            case 'check': return 'bg-amber-500';
            default: return 'bg-gray-200';
        }
    };

    return (
        <div className="p-4 md:p-6 max-w-[1240px] mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-none">Dispatch Management</h1>
                    <p className="text-[12px] text-gray-500 mt-1">Create and manage client jobs</p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    <div className="relative flex-1 sm:flex-none">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-9 pr-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all w-full sm:w-48"
                        />
                    </div>

                    <select className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs text-gray-600 outline-none">
                        <option>All Types</option>
                    </select>

                    <select className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs text-gray-600 outline-none">
                        <option>All Status</option>
                    </select>

                    <button
                        onClick={() => {
                            setIsCreateModalOpen(true);
                            setCurrentStep(1);
                        }}
                        className="flex items-center gap-2 px-4 py-1.5 bg-[#0f172a] text-white rounded-full text-xs font-semibold hover:bg-slate-800 transition-colors"
                    >
                        <span>Create Dispatch</span>
                        <Plus size={16} />
                    </button>

                    <button className="flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-full text-xs font-semibold hover:bg-gray-50 transition-colors">
                        <span>Import</span>
                        <Download size={16} />
                    </button>
                </div>
            </div>

            {/* Status Legend */}
            <div className="flex flex-nowrap items-center justify-start sm:justify-end gap-4 px-4 py-1.5 text-[9px] font-bold uppercase tracking-wider text-gray-400 overflow-x-auto custom-scrollbar whitespace-nowrap">
                <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full border border-gray-300"></div>
                    <span>Default</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <span>Attention</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                    <span>Invoice Created</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                    <span>Reviewed & Billed</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                    <span>Check Back</span>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                    <div className="flex items-center gap-2 cursor-pointer hover:text-gray-600 transition-colors">
                                        Date Created <ArrowUpDown size={14} />
                                    </div>
                                </th>
                                <th className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                    <div className="flex items-center gap-2 cursor-pointer hover:text-gray-600 transition-colors">
                                        Job Name <ArrowUpDown size={14} />
                                    </div>
                                </th>
                                <th className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                    <div className="flex items-center gap-2 cursor-pointer hover:text-gray-600 transition-colors">
                                        Client <ArrowUpDown size={14} />
                                    </div>
                                </th>
                                <th className="px-6 py-5">Quarry Location</th>
                                <th className="px-6 py-5">Type</th>
                                <th className="px-6 py-5">Dumped/Slung</th>
                                <th className="px-6 py-5">Material</th>
                                <th className="px-6 py-5 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {currentData.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-4 py-2 text-xs text-gray-600">
                                        <div className="flex items-center gap-3">
                                            <div className="p-1 text-gray-300">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10-16a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" /></svg>
                                            </div>
                                            <span className="text-xs text-gray-600">{item.dateCreated}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 text-xs text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full ${getStatusColor(item.status)}`}></div>
                                            <span className="text-xs font-semibold text-gray-900">{item.jobName}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-sm text-gray-600">{item.client}</td>
                                    <td className="px-6 py-5 text-sm text-gray-600">{item.location}</td>
                                    <td className="px-4 py-2 text-xs text-gray-600">
                                        <span className="px-2 py-0.5 bg-blue-50 text-blue-400 text-[9px] font-bold rounded-full uppercase border border-blue-100/50">
                                            {item.type}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2 text-xs text-gray-600">
                                        <span className="px-2 py-0.5 bg-indigo-50 text-indigo-400 text-[9px] font-bold rounded-full uppercase border border-indigo-100/50">
                                            {item.dumpedSlung}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-sm text-gray-600 font-medium">{item.material}</td>
                                    <td className="px-6 py-5 text-center relative">
                                        <button
                                            onClick={() => setOpenMenuId(openMenuId === item.id ? null : item.id)}
                                            className={`p-1 transition-colors rounded-md ${openMenuId === item.id ? 'bg-gray-100 text-gray-600' : 'text-gray-300 hover:text-gray-600 hover:bg-gray-100'}`}
                                        >
                                            <MoreHorizontal size={16} />
                                        </button>

                                        {openMenuId === item.id && (
                                            <div
                                                ref={menuRef}
                                                className="absolute right-full mr-2 top-1/2 -translate-y-1/2 w-36 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 z-50 animate-in fade-in zoom-in duration-200"
                                            >
                                                <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                                                    <Eye size={16} className="text-gray-400" />
                                                    <span className="font-medium">View</span>
                                                </button>
                                                <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                                                    <Pencil size={16} className="text-gray-400" />
                                                    <span className="font-medium">Edit</span>
                                                </button>
                                                <div className="my-1 border-t border-gray-50"></div>
                                                <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">
                                                    <Trash2 size={16} className="text-red-400" />
                                                    <span className="font-medium">Delete</span>
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500 font-medium">
                        {startIndex + 1}-{Math.min(startIndex + itemsPerPage, allDispatchData.length)} of {allDispatchData.length} dispatches
                    </p>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className={`p-2 rounded-full transition-colors ${currentPage === 1 ? 'text-gray-200 cursor-not-allowed' : 'text-gray-400 hover:bg-gray-100'}`}
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-bold transition-all ${page === currentPage ? 'bg-white border border-gray-200 text-gray-900 shadow-sm' : 'text-gray-400 hover:bg-gray-100'}`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className={`p-2 rounded-full transition-colors ${currentPage === totalPages ? 'text-gray-200 cursor-not-allowed' : 'text-gray-400 hover:bg-gray-100'}`}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    <div className="flex items-center gap-2">
                        <select className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 outline-none">
                            <option>10 / Page</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Create Dispatch Modal */}
            {isCreateModalOpen && (
                <div className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-[2px] z-[60] flex items-center justify-center p-4 overflow-y-auto">
                    <div className={`bg-white rounded-[24px] w-full ${currentStep === 2 ? 'max-w-3xl' : 'max-w-xl'} max-h-[90vh] flex flex-col overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-300`}>
                        {/* Modal Header */}
                        <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                            <div className="flex items-center gap-4 flex-1">
                                {currentStep > 1 && (
                                    <button
                                        onClick={() => setCurrentStep(prev => prev - 1)}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
                                    >
                                        <ArrowLeft size={20} />
                                    </button>
                                )}
                                <div className="flex-1">
                                    <div className="flex items-center justify-between w-full">
                                        <h2 className="text-xl font-bold text-gray-900">
                                            {currentStep === 1 ? 'Create New Dispatch' :
                                                currentStep === 2 ? 'Dispatch Details' : 'Ticket Verification - Load #1'}
                                        </h2>
                                        {currentStep === 2 && (
                                            <div className="flex items-center gap-3">
                                                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Created 12/11/2025</span>
                                                <button
                                                    onClick={() => console.log('Status clicked')}
                                                    className="px-2 py-0.5 bg-emerald-500 text-white text-[9px] font-bold rounded-full uppercase tracking-wider hover:bg-emerald-600 transition-colors shadow-sm"
                                                >
                                                    Completed
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                    {currentStep === 1 && <p className="text-xs text-gray-500 mt-0.5 font-medium">Assign a driver to a job and schedule the work</p>}
                                </div>
                            </div>
                            <button
                                onClick={() => setIsCreateModalOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar">
                            <div className="px-6 pb-6 pt-8">
                                {currentStep === 1 && (
                                    <div className="space-y-5">
                                        <div className="space-y-1.5">
                                            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">Job *</label>
                                            <div className="relative">
                                                <select
                                                    value={formData.job}
                                                    onChange={(e) => setFormData({ ...formData, job: e.target.value })}
                                                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm appearance-none outline-none focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer shadow-sm"
                                                >
                                                    <option value="">Select a job</option>
                                                    <option value="Adam's Electric">Adam's Electric</option>
                                                    <option value="Baker Construction">Baker Construction</option>
                                                </select>
                                                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">Client</label>
                                                <input
                                                    type="text"
                                                    value={formData.client}
                                                    disabled
                                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-500 outline-none shadow-sm"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">Dump Site</label>
                                                <input
                                                    type="text"
                                                    value={formData.dumpSite}
                                                    disabled
                                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-500 outline-none shadow-sm"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">Quarry</label>
                                                <div className="relative">
                                                    <select
                                                        value={formData.quarry}
                                                        onChange={(e) => setFormData({ ...formData, quarry: e.target.value })}
                                                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm appearance-none outline-none focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer shadow-sm"
                                                    >
                                                        <option value="">Select a quarry</option>
                                                        <option value="NK, Denver">NK, Denver</option>
                                                    </select>
                                                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                                </div>
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">Materials</label>
                                                <input
                                                    type="text"
                                                    value={formData.materials}
                                                    disabled
                                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-500 outline-none shadow-sm"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between p-4 bg-blue-50/30 rounded-2xl border border-blue-100/50">
                                            <div>
                                                <h4 className="text-sm font-bold text-gray-900">Use Subcontractor</h4>
                                                <p className="text-[10px] text-gray-500 font-medium">Check this if you want to use a subcontractor instead of internal drivers</p>
                                            </div>
                                            <button
                                                onClick={() => setFormData({ ...formData, useSubcontractor: !formData.useSubcontractor })}
                                                className={`w-10 h-5 rounded-full transition-colors relative ${formData.useSubcontractor ? 'bg-[#0f172a]' : 'bg-gray-200'}`}
                                            >
                                                <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${formData.useSubcontractor ? 'right-1' : 'left-1'}`}></div>
                                            </button>
                                        </div>

                                        <div className="space-y-4 pt-2 border-t border-gray-100">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Driver & Truck Assignment</h3>
                                                <button className="flex items-center gap-1.5 px-3 py-1 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
                                                    <span className="text-[9px] font-bold text-gray-600">Add Truck Driver Pair</span>
                                                    <Clock size={12} className="text-gray-400" />
                                                </button>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50/50 rounded-2xl border border-gray-100">
                                                <div className="space-y-1.5">
                                                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider ml-1">* Driver 1</label>
                                                    <div className="relative">
                                                        <select
                                                            value={formData.driver}
                                                            onChange={(e) => setFormData({ ...formData, driver: e.target.value })}
                                                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm appearance-none outline-none focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer"
                                                        >
                                                            <option value="">Select a driver</option>
                                                            <option value="John Doe">John Doe</option>
                                                            <option value="Jane Smith">Jane Smith</option>
                                                        </select>
                                                        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                                    </div>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider ml-1">* Truck 1 (Auto-assigned)</label>
                                                    <input
                                                        type="text"
                                                        value={formData.truck}
                                                        disabled
                                                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-500 outline-none"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">Additional Notes</label>
                                            <textarea
                                                placeholder="Write notes here"
                                                value={formData.notes}
                                                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all resize-none h-24 shadow-sm"
                                            ></textarea>
                                        </div>
                                    </div>
                                )}

                                {currentStep === 2 && (
                                    <div className="space-y-6 py-2">
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="p-4 bg-gray-50/50 rounded-2xl border border-gray-100 flex items-center gap-3">
                                                <div className="p-2 bg-white rounded-xl shadow-sm"><Users size={16} className="text-gray-400" /></div>
                                                <div>
                                                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Sub</p>
                                                    <p className="text-xs font-bold text-gray-900">T&T Trucking</p>
                                                </div>
                                            </div>
                                            <div className="p-4 bg-gray-50/50 rounded-2xl border border-gray-100 flex items-center gap-3">
                                                <div className="p-2 bg-white rounded-xl shadow-sm"><Truck size={16} className="text-gray-400" /></div>
                                                <div>
                                                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Truck</p>
                                                    <p className="text-xs font-bold text-gray-900">T-2501</p>
                                                </div>
                                            </div>
                                            <div className="p-4 bg-gray-50/50 rounded-2xl border border-gray-100 flex items-center gap-3">
                                                <div className="p-2 bg-white rounded-xl shadow-sm"><Calendar size={16} className="text-gray-400" /></div>
                                                <div>
                                                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Scheduled</p>
                                                    <p className="text-xs font-bold text-gray-900">12/11/2025</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="flex-1 p-5 border border-gray-100 rounded-3xl bg-gray-50/30">
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Summary</p>
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <span className="text-2xl font-black text-gray-900">5</span>
                                                        <span className="text-[10px] font-bold text-gray-400 ml-2 uppercase">Total Loads</span>
                                                    </div>
                                                    <div className="px-4 py-2 bg-amber-50 rounded-xl border border-amber-100">
                                                        <span className="text-lg font-black text-amber-600">100</span>
                                                        <span className="text-[9px] font-bold text-amber-500 ml-2 uppercase">Total Loads</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest pl-1">Dispatch Duration</h3>
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="p-4 bg-yellow-50/50 rounded-2xl border border-yellow-100">
                                                    <p className="text-[10px] font-bold text-yellow-600 uppercase mb-1">Started At</p>
                                                    <p className="text-sm font-black text-gray-900">12:04 AM</p>
                                                </div>
                                                <div className="p-4 bg-red-50/50 rounded-2xl border border-red-100">
                                                    <p className="text-[10px] font-bold text-red-600 uppercase mb-1">Completed At</p>
                                                    <p className="text-sm font-black text-gray-900">12:08 AM</p>
                                                </div>
                                                <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100">
                                                    <p className="text-[10px] font-bold text-blue-600 uppercase mb-1">Total Duration</p>
                                                    <p className="text-sm font-black text-gray-900">3m 30s</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest pl-1">Contractor Access</h3>
                                            <div className="p-5 border border-gray-100 rounded-3xl space-y-3">
                                                <h4 className="text-xs font-bold text-gray-900">Public Dispatch Link</h4>
                                                <p className="text-[10px] text-gray-500 font-medium">Share this link with the contractor (Malik) to allow them to submit tickets</p>
                                                <div className="flex items-center gap-2 p-3 bg-gray-50 border border-gray-100 rounded-2xl">
                                                    <input
                                                        type="text"
                                                        value="www.loadtally.com/public/dispatch/27534455845473-accsjqwo"
                                                        readOnly
                                                        className="flex-1 bg-transparent text-[10px] font-medium text-gray-500 outline-none"
                                                    />
                                                    <button className="p-1.5 text-gray-400 hover:text-[#0f172a] transition-colors"><Share2 size={16} /></button>
                                                    <button className="p-1.5 text-gray-400 hover:text-[#0f172a] transition-colors"><Copy size={16} /></button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest pl-1">Load Tickets (5)</h3>
                                            <div className="border border-gray-100 rounded-3xl overflow-hidden">
                                                <table className="w-full text-left text-[11px]">
                                                    <thead className="bg-gray-50 border-b border-gray-100">
                                                        <tr>
                                                            <th className="px-4 py-3 font-bold text-gray-500 uppercase">Load #</th>
                                                            <th className="px-4 py-3 font-bold text-gray-500 uppercase">Material</th>
                                                            <th className="px-4 py-3 font-bold text-gray-500 uppercase">Tonnage</th>
                                                            <th className="px-4 py-3 font-bold text-gray-500 uppercase">Quarry</th>
                                                            <th className="px-4 py-3 font-bold text-gray-500 uppercase">Date/Time</th>
                                                            <th className="px-4 py-3 font-bold text-gray-500 uppercase text-center">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-50">
                                                        {[1, 2, 3, 4, 5].map((i) => (
                                                            <tr key={i} className="hover:bg-gray-50/30 transition-colors">
                                                                <td className="px-4 py-4 font-bold text-gray-900"># {i}</td>
                                                                <td className="px-4 py-4 text-gray-500 font-medium">Unknown</td>
                                                                <td className="px-4 py-4 text-gray-500 font-medium">19.84 tons</td>
                                                                <td className="px-4 py-4 text-gray-500 font-medium">Unknown</td>
                                                                <td className="px-4 py-4 text-gray-400 leading-tight">12/12/2025<br />12:08 AM</td>
                                                                <td className="px-4 py-4 text-center">
                                                                    <button
                                                                        onClick={() => setCurrentStep(3)}
                                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-[9px] font-bold text-gray-400 hover:text-gray-900 hover:border-gray-900 transition-all shadow-sm"
                                                                    >
                                                                        <Eye size={12} /> View Ticket
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {currentStep === 3 && (
                                    <div className="space-y-6 py-2">
                                        <div className="grid grid-cols-3 gap-y-6 gap-x-4">
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Driver Name</p>
                                                <p className="text-xs font-bold text-gray-900">John</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Truck Number</p>
                                                <p className="text-xs font-bold text-gray-900">U-2301</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Job Name</p>
                                                <p className="text-xs font-bold text-gray-900">(Bio) Camden Spec Warehouse (DD-T)</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Material Type</p>
                                                <p className="text-xs font-bold text-gray-900">Bio-pond Materials</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Load</p>
                                                <p className="text-xs font-bold text-gray-900">1</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Tonnage</p>
                                                <p className="text-xs font-bold text-gray-900">19.84 tons</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Quarry</p>
                                                <p className="text-xs font-bold text-gray-900">Wade Moore Equip</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Current Status</p>
                                                <span className="px-3 py-1 bg-gray-100 text-gray-400 text-[9px] font-bold rounded-full uppercase">Pending</span>
                                            </div>
                                            <div className="col-span-3 h-px bg-gray-100 my-2"></div>
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Created</p>
                                                <p className="text-[11px] font-medium text-gray-500">12/12/2025, 12:08:14 AM</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Trip Started at</p>
                                                <p className="text-[11px] font-medium text-gray-500">12/12/2025, 12:08:14 AM</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Trip Ended at</p>
                                                <p className="text-[11px] font-medium text-gray-500">12/12/2025, 12:08:14 AM</p>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest pl-1">Ticket Images: (1)</h3>
                                            <div className="w-48 h-32 rounded-3xl bg-gray-50 border border-gray-200 overflow-hidden group relative cursor-pointer">
                                                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                                                    <FileText size={32} className="text-gray-300" />
                                                </div>
                                                <div className="absolute inset-0 bg-[#0f172a]/0 group-hover:bg-[#0f172a]/10 transition-colors"></div>
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">Additional Notes</label>
                                            <textarea
                                                placeholder="Write notes here"
                                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all resize-none h-24 shadow-sm"
                                            ></textarea>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-5 border-t border-gray-50 flex gap-3">
                            {currentStep !== 2 && (
                                <button
                                    onClick={() => setIsCreateModalOpen(false)}
                                    className="flex-1 py-3 px-4 border border-gray-200 text-gray-600 rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors shadow-sm"
                                >
                                    Cancel
                                </button>
                            )}
                            {currentStep === 1 && (
                                <button
                                    disabled={!isStep1Valid()}
                                    onClick={handleNext}
                                    className={`flex-1 py-3 px-4 text-white rounded-xl text-sm font-bold transition-all shadow-lg ${isStep1Valid() ? 'bg-[#0f172a] hover:bg-slate-800 shadow-slate-200' : 'bg-gray-200 cursor-not-allowed shadow-none'}`}
                                >
                                    Create Dispatch
                                </button>
                            )}
                            {currentStep === 3 && (
                                <>
                                    <button className="flex-1 py-3 px-4 bg-red-600 text-white rounded-xl text-sm font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-200">
                                        Reject
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="flex-1 py-3 px-4 bg-[#0f172a] text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
                                    >
                                        Verify
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DispatchManagement;
