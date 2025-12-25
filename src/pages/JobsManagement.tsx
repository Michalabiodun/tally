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
    X,
    ChevronDown
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const JobsManagement = () => {
    const [openMenuId, setOpenMenuId] = useState<number | null>(null);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const menuRef = useRef<HTMLDivElement>(null);

    // Form State
    const [formData, setFormData] = useState({
        // Step 1
        client: '',
        jobName: '',
        scheduledDate: '',
        poNumber: '',
        dumpSite: '',
        status: '',
        email: '',
        contactPhone: '',
        onSiteContact: '',
        notes: '',
        // Step 2 & 3
        paymentJobType: 'Tonnage',
        paymentPlacementType: 'Slung',
        paymentAmount: '',
        materialLoadSite: 'Wake Stone',
        materialType: 'Slung',
        materialAmount: '',
        whoPays: 'Client',
        expectedLoad: '',
        expectedTonne: '',
        clientPrice: '',
        materialPrice: '',
        subPrice: '',
        grossProfit: ''
    });

    const isStep1Valid = () => {
        return !!(formData.client && formData.jobName && formData.scheduledDate && formData.dumpSite && formData.status);
    };

    const isStep2Valid = () => {
        return !!(formData.paymentAmount && formData.materialAmount);
    };

    const handleNext = () => {
        if (currentStep === 1 && isStep1Valid()) {
            setCurrentStep(2);
        } else if (currentStep === 2 && isStep2Valid()) {
            setCurrentStep(3);
        } else if (currentStep === 3) {
            // Submit form
            setIsCreateModalOpen(false);
            setCurrentStep(1);
            // Reset form
        }
    };

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

    const jobsData = Array(7).fill({

        dateCreated: '09/08/25 07:49',
        jobName: "Adam's Electric",
        client: 'Demo-job',
        location: 'NK, Denver',
        type: 'Tonnage',
        dumpedSlung: 'Dumped',
        material: '67'
    });

    return (
        <div className="p-4 md:p-6 max-w-[1240px] mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-none">Jobs Management</h1>
                    <p className="text-[12px] text-gray-500 mt-1">Create and manage client jobs</p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    <div className="relative flex-1 sm:flex-none">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                        <input
                            type="text"
                            placeholder="Search jobs..."
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
                        onClick={() => setIsCreateModalOpen(true)}
                        className="flex items-center gap-2 px-4 py-1.5 bg-[#0f172a] text-white rounded-full text-xs font-semibold hover:bg-slate-800 transition-colors"
                    >
                        <span>Create New Job</span>
                        <Plus size={16} />
                    </button>

                    <button className="flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-full text-xs font-semibold hover:bg-gray-50 transition-colors">
                        <span>Import</span>
                        <Download size={16} />
                    </button>
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
                            {jobsData.map((job, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-4 py-2 text-xs text-gray-600">
                                        <div className="flex items-center gap-3">
                                            <div className="p-1 text-gray-300">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10-16a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" /></svg>
                                            </div>
                                            <span className="text-xs text-gray-600">{job.dateCreated}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 text-xs font-semibold text-gray-900">{job.jobName}</td>
                                    <td className="px-6 py-5 text-sm text-gray-600">{job.client}</td>
                                    <td className="px-6 py-5 text-sm text-gray-600">{job.location}</td>
                                    <td className="px-4 py-2 text-xs text-gray-600">
                                        <span className="px-2 py-0.5 bg-blue-50/50 text-blue-400 text-[9px] font-bold rounded-full uppercase border border-blue-100/50">
                                            {job.type}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2 text-xs text-gray-600">
                                        <span className="px-2 py-0.5 bg-indigo-50/50 text-indigo-400 text-[9px] font-bold rounded-full uppercase border border-indigo-100/50">
                                            {job.dumpedSlung}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-sm text-gray-600 font-medium">{job.material}</td>
                                    <td className="px-6 py-5 text-center relative">
                                        <button
                                            onClick={() => setOpenMenuId(openMenuId === idx ? null : idx)}
                                            className={`p-1 transition-colors rounded-md ${openMenuId === idx ? 'bg-gray-100 text-gray-600' : 'text-gray-300 hover:text-gray-600 hover:bg-gray-100'}`}
                                        >
                                            <MoreHorizontal size={16} />
                                        </button>

                                        {openMenuId === idx && (
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
                    <p className="text-sm text-gray-500 font-medium">1-40 of 187 jobs</p>

                    <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-full transition-colors">
                            <ChevronLeft size={20} />
                        </button>

                        {[1, 2, 3, 4, 5].map((page) => (
                            <button
                                key={page}
                                className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-bold transition-all ${page === 1 ? 'bg-white border border-gray-200 text-gray-900 shadow-sm' : 'text-gray-400 hover:bg-gray-100'}`}
                            >
                                {page}
                            </button>
                        ))}

                        <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-full transition-colors">
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    <div className="flex items-center gap-2">
                        <select className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 outline-none">
                            <option>100 / Page</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* Create Job Modal */}
            {isCreateModalOpen && (
                <div className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-[2px] z-[60] flex items-center justify-center p-4">
                    <div className="bg-white rounded-[24px] w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-300">
                        {/* Modal Header */}
                        <div className="p-6 pb-4 flex justify-between items-start">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">Create New Job</h2>
                                <p className="text-sm text-gray-500 mt-1">Fill in the details to create a new job for a client</p>
                            </div>
                            <button
                                onClick={() => setIsCreateModalOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Step Indicator */}
                        <div className="px-6 mb-6">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Step {currentStep} of 3</span>
                                <div className="flex gap-1.5 ml-2">
                                    {[1, 2, 3].map(step => (
                                        <div
                                            key={step}
                                            className={`h-1.5 w-8 rounded-full transition-all duration-300 ${step <= currentStep ? 'bg-[#0f172a]' : 'bg-gray-200'}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center bg-gray-50/80 p-1 rounded-xl border border-gray-100">
                                {['Basic Info', 'Pricing & Type', 'Progress Tracking'].map((label, idx) => (
                                    <button
                                        key={idx}
                                        disabled={idx + 1 > currentStep && !(idx === 1 && isStep1Valid())}
                                        onClick={() => {
                                            if (idx + 1 <= currentStep) setCurrentStep(idx + 1);
                                            else if (idx === 1 && isStep1Valid()) setCurrentStep(2);
                                        }}
                                        className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${idx + 1 === currentStep ? 'bg-white text-gray-900 shadow-sm border border-gray-100' : 'text-gray-400 hover:text-gray-600'}`}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar">
                            <div className="px-8">
                                {currentStep === 1 && (
                                    <div className="space-y-4 py-2">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-gray-600 ml-1">Client</label>
                                            <div className="relative">
                                                <select
                                                    value={formData.client}
                                                    onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                                                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm appearance-none outline-none focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer shadow-sm"
                                                >
                                                    <option value="">Select client</option>
                                                    <option value="Demo-job">Demo-job</option>
                                                </select>
                                                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-gray-600 ml-1">Job Name</label>
                                                <input
                                                    type="text" placeholder="Enter Job Name"
                                                    value={formData.jobName}
                                                    onChange={(e) => setFormData({ ...formData, jobName: e.target.value })}
                                                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-gray-600 ml-1">Scheduled Date</label>
                                                <div className="relative">
                                                    <input
                                                        type="date"
                                                        value={formData.scheduledDate}
                                                        onChange={(e) => setFormData({ ...formData, scheduledDate: e.target.value })}
                                                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-gray-600 ml-1">PO Number</label>
                                                <div className="relative">
                                                    <select
                                                        value={formData.poNumber}
                                                        onChange={(e) => setFormData({ ...formData, poNumber: e.target.value })}
                                                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm appearance-none outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                                                    >
                                                        <option value="">Enter PO Number</option>
                                                        <option value="PO-1234">PO-1234</option>
                                                    </select>
                                                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                                </div>
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-gray-600 ml-1">Dump Site</label>
                                                <input
                                                    type="text" placeholder="Dump site Address"
                                                    value={formData.dumpSite}
                                                    onChange={(e) => setFormData({ ...formData, dumpSite: e.target.value })}
                                                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-gray-600 ml-1">Status</label>
                                                <div className="relative">
                                                    <select
                                                        value={formData.status}
                                                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm appearance-none outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                                                    >
                                                        <option value="">Select Status</option>
                                                        <option value="Active">Active</option>
                                                        <option value="Pending">Pending</option>
                                                    </select>
                                                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                                </div>
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-gray-600 ml-1">Email</label>
                                                <input
                                                    type="email" placeholder="Enter email"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-gray-600 ml-1">Contact Phone</label>
                                                <input
                                                    type="text" placeholder="Enter phone"
                                                    value={formData.contactPhone}
                                                    onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                                                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-gray-600 ml-1">On site contact Name</label>
                                                <input
                                                    type="text" placeholder="Enter contact name"
                                                    value={formData.onSiteContact}
                                                    onChange={(e) => setFormData({ ...formData, onSiteContact: e.target.value })}
                                                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5 pb-4">
                                            <label className="text-xs font-bold text-gray-600 ml-1">Additional Notes</label>
                                            <textarea
                                                placeholder="Write notes here"
                                                rows={2}
                                                value={formData.notes}
                                                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm resize-none"
                                            />
                                        </div>
                                    </div>
                                )}

                                {currentStep === 2 && (
                                    <div className="space-y-6 py-2 pb-6">
                                        <div className="p-5 border border-gray-100 rounded-[20px] bg-gray-50/30">
                                            <div className="flex justify-between items-center mb-4">
                                                <h3 className="text-sm font-bold text-gray-900 tracking-tight">Payment</h3>
                                                <button className="text-[10px] font-bold text-gray-500 hover:text-gray-700 bg-white border border-gray-200 px-3 py-1 rounded-lg shadow-sm">Add +</button>
                                            </div>
                                            <div className="grid grid-cols-3 gap-3">
                                                <div className="space-y-1">
                                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Job Type *</label>
                                                    <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs outline-none">
                                                        <option>Tonnage</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Placement Type *</label>
                                                    <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs outline-none">
                                                        <option>Slung</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Amount *</label>
                                                    <input
                                                        type="text" placeholder="Enter Amount"
                                                        value={formData.paymentAmount}
                                                        onChange={(e) => setFormData({ ...formData, paymentAmount: e.target.value })}
                                                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs outline-none"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-5 border border-gray-100 rounded-[20px] bg-gray-50/30">
                                            <div className="flex justify-between items-center mb-4">
                                                <h3 className="text-sm font-bold text-gray-900 tracking-tight">Material</h3>
                                                <button className="text-[10px] font-bold text-gray-500 hover:text-gray-700 bg-white border border-gray-200 px-3 py-1 rounded-lg shadow-sm">Add +</button>
                                            </div>
                                            <div className="grid grid-cols-3 gap-3">
                                                <div className="space-y-1">
                                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Load Site *</label>
                                                    <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs outline-none">
                                                        <option>Wake Stone</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Material *</label>
                                                    <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs outline-none">
                                                        <option>Slung</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Amount *</label>
                                                    <input
                                                        type="text" placeholder="Enter Amount"
                                                        value={formData.materialAmount}
                                                        onChange={(e) => setFormData({ ...formData, materialAmount: e.target.value })}
                                                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs outline-none"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="px-1">
                                            <h3 className="text-xs font-bold text-gray-600 mb-3">Who pays for material?</h3>
                                            <div className="flex items-center gap-8">
                                                {['Client', 'Sub Contractor', 'Saas User'].map((option) => (
                                                    <label key={option} className="flex items-center gap-2 cursor-pointer group">
                                                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${formData.whoPays === option ? 'border-[#0f172a] bg-[#0f172a]' : 'border-gray-300 group-hover:border-gray-400'}`}>
                                                            {formData.whoPays === option && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                                                        </div>
                                                        <input type="radio" value={option} checked={formData.whoPays === option} onChange={(e) => setFormData({ ...formData, whoPays: e.target.value })} className="hidden" />
                                                        <span className={`text-xs font-medium ${formData.whoPays === option ? 'text-gray-900' : 'text-gray-500'}`}>{option}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {currentStep === 3 && (
                                    <div className="space-y-6 py-2 pb-6">
                                        <div className="p-5 border border-gray-100 rounded-[20px] bg-gray-50/30">
                                            <div className="flex justify-between items-center mb-4">
                                                <h3 className="text-sm font-bold text-gray-900 tracking-tight">Sub Pay</h3>
                                                <button className="text-[10px] font-bold text-gray-500 hover:text-gray-700 bg-white border border-gray-200 px-3 py-1 rounded-lg shadow-sm">Add +</button>
                                            </div>
                                            <div className="grid grid-cols-3 gap-3">
                                                <div className="space-y-1">
                                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Job Type *</label>
                                                    <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs outline-none">
                                                        <option>Select Type</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Placement Type *</label>
                                                    <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs outline-none">
                                                        <option>Select Type</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Amount *</label>
                                                    <input type="text" placeholder="Enter amount" className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs outline-none" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-sm font-bold text-gray-900">Progress Tracking</h3>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-1.5">
                                                    <label className="text-xs font-bold text-gray-600 ml-1">Expected Load</label>
                                                    <input
                                                        type="text" placeholder="Enter Load"
                                                        value={formData.expectedLoad}
                                                        onChange={(e) => setFormData({ ...formData, expectedLoad: e.target.value })}
                                                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none shadow-sm"
                                                    />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="text-xs font-bold text-gray-600 ml-1">Expected Tonne</label>
                                                    <input
                                                        type="text" placeholder="Enter Tonne"
                                                        value={formData.expectedTonne}
                                                        onChange={(e) => setFormData({ ...formData, expectedTonne: e.target.value })}
                                                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none shadow-sm"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-4 gap-3">
                                                <div className="space-y-1.5">
                                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Client Price</label>
                                                    <input type="text" className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none" />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Material</label>
                                                    <input type="text" className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none" />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Sub</label>
                                                    <input type="text" className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none" />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Gross Profit</label>
                                                    <input type="text" className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-6 pt-4 flex gap-3">
                            <button
                                onClick={() => {
                                    if (currentStep === 1) setIsCreateModalOpen(false);
                                    else setCurrentStep(currentStep - 1);
                                }}
                                className="flex-1 px-6 py-3 border border-gray-200 text-gray-900 rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors"
                            >
                                {currentStep === 1 ? 'Cancel' : 'Back'}
                            </button>
                            {currentStep === 3 && (
                                <button className="flex-1 px-6 py-3 border border-teal-500 text-teal-600 rounded-xl text-sm font-bold hover:bg-teal-50 transition-colors">
                                    Send Quote
                                </button>
                            )}
                            <button
                                onClick={handleNext}
                                disabled={(currentStep === 1 && !isStep1Valid()) || (currentStep === 2 && !isStep2Valid())}
                                className={`flex-1 px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-lg ${(currentStep === 1 && isStep1Valid()) || (currentStep === 2 && isStep2Valid()) || currentStep === 3
                                    ? 'bg-[#0f172a] text-white hover:bg-slate-800 shadow-slate-200'
                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                {currentStep === 3 ? 'Create Job' : 'Next'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobsManagement;
