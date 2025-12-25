import {
    Plus,
    Download,
    RotateCcw,
    Search,
    MoreHorizontal,
    ArrowUpRight,
    Clock,
    Fuel,
    MapPin,
    CheckCircle2,
    AlertCircle,
    Truck,
    Eye,
    Pencil,
    Trash2
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';


const FleetManagement = () => {
    const [openMenuId, setOpenMenuId] = useState<number | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);

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

    const fleetData = [
        { id: 'S-2401', type: 'Dump Truck', vin: '1NKZPTX8RJ376759', status: 'On Job', driver: 'Unassigned', mileage: '67,249mi', engineHours: '3163 hrs', fuel: 65, location: 'View on map' },
        { id: 'S-2401', type: 'Dump Truck', vin: '1NKZPTX8RJ376759', status: 'Available', driver: 'Unassigned', mileage: '67,249mi', engineHours: '3163 hrs', fuel: 65, location: 'View on map' },
        { id: 'S-2401', type: 'Dump Truck', vin: '1NKZPTX8RJ376759', status: 'In Transit', driver: 'Unassigned', mileage: '67,249mi', engineHours: '3163 hrs', fuel: 65, location: 'View on map' },
        { id: 'S-2401', type: 'Dump Truck', vin: '1NKZPTX8RJ376759', status: 'In Shed', driver: 'Unassigned', mileage: '67,249mi', engineHours: '3163 hrs', fuel: 65, location: 'View on map' },
    ];

    const utilizationData = [
        { id: 'S-2301', type: 'Dump Truck', percentage: 65 },
        { id: 'S-2201', type: 'Tri-Axle', percentage: 80 },
        { id: 'S-2301', type: 'Dump Truck', percentage: 37 },
        { id: 'S-2301', type: 'Dump Truck', percentage: 49 },
        { id: 'S-2301', type: 'Dump Truck', percentage: 68 },
    ];

    const completedMaintenance = [
        { vehicle: '1701', type: 'Flatbed', service: 'Oil Change', date: '11/05/2025', technician: 'Jonathan', details: 'Oil Change - Oil change', mileage: '155,567 mi' },
        { vehicle: '1701', type: 'Flatbed', service: 'Oil Change', date: '11/05/2025', technician: 'Jonathan', details: 'Oil Change - Oil change', mileage: '155,567 mi' },
        { vehicle: '1701', type: 'Flatbed', service: 'Oil Change', date: '11/05/2025', technician: 'Jonathan', details: 'Oil Change - Oil change', mileage: '155,567 mi' },
        { vehicle: '1701', type: 'Flatbed', service: 'Oil Change', date: '11/05/2025', technician: 'Jonathan', details: 'Oil Change - Oil change', mileage: '155,567 mi' },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'On Job': return 'bg-emerald-50 text-emerald-700 border-emerald-100';
            case 'Available': return 'bg-blue-50 text-blue-700 border-blue-100';
            case 'In Transit': return 'bg-orange-50 text-orange-700 border-orange-100';
            case 'In Shed': return 'bg-amber-50 text-amber-700 border-amber-100';
            default: return 'bg-gray-50 text-gray-700 border-gray-100';
        }
    };

    return (
        <div className="p-4 md:p-6 max-w-[1240px] mx-auto space-y-6">
            {/* Header section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-1">Fleet Management</h1>
                    <p className="text-sm text-gray-500">Real-time tracking and management of 10 trucks</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#0f172a] text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm">
                        <Plus size={16} />
                        <span>Add Truck</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
                        <Download size={16} />
                        <span>Import</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors">
                        <span className="text-sm font-medium">Refresh</span>
                        <RotateCcw size={16} />
                    </button>
                </div>
            </div>

            {/* Fleet Overview section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 md:p-5 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-slate-50 p-2 rounded-lg">
                            <Truck size={20} className="text-slate-600" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Fleet Overview</h2>
                            <p className="text-sm text-gray-500">Real-time tracking and management of 10 trucks</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                            <input
                                type="text"
                                placeholder="Search trucks..."
                                className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all w-full sm:w-64"
                            />
                        </div>
                        <select className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 shadow-sm flex-1 sm:flex-none min-w-[120px]">
                            <option>All Status</option>
                            <option>On Job</option>
                            <option>Available</option>
                            <option>In Transit</option>
                        </select>
                        <div className="flex border border-gray-200 rounded-lg overflow-hidden shadow-sm shrink-0">
                            <button className="px-3 py-2 bg-gray-50 text-gray-900 text-sm font-medium border-r border-gray-200 whitespace-nowrap">List View</button>
                            <button className="px-3 py-2 bg-white text-gray-500 text-sm font-medium hover:bg-gray-50 transition-colors whitespace-nowrap">Map View</button>
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">ID & Type</th>
                                <th className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Status</th>
                                <th className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Driver</th>
                                <th className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Mileage</th>
                                <th className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Engine Hours</th>
                                <th className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Fuel Level</th>
                                <th className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Last Location</th>
                                <th className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {fleetData.map((truck, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <MoreHorizontal className="rotate-90" size={16} />
                                            </div>
                                            <div>
                                                <div className="text-xs font-semibold text-gray-900">{truck.id}</div>
                                                <div className="text-[10px] text-gray-500">{truck.type}</div>
                                                <div className="text-[10px] text-gray-400 mt-0.5">VIN: {truck.vin}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2">
                                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${getStatusColor(truck.status)}`}>
                                            {truck.status.toUpperCase()}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{truck.driver}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">{truck.mileage}</td>
                                    <td className="px-4 py-2">
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <Clock size={14} className="text-gray-400" />
                                            <span>{truck.engineHours}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 min-w-[140px]">
                                        <div className="flex items-center gap-3">
                                            <Fuel size={14} className="text-gray-400" />
                                            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${truck.fuel}%` }}></div>
                                            </div>
                                            <span className="text-xs font-semibold text-gray-600">{truck.fuel}%</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2">
                                        <button className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-blue-600 transition-colors">
                                            <MapPin size={14} />
                                            {truck.location}
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 relative">
                                        <button
                                            onClick={() => setOpenMenuId(openMenuId === idx ? null : idx)}
                                            className={`p-1 transition-colors rounded-md ${openMenuId === idx ? 'bg-gray-100 text-gray-900' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'}`}
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
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Maintenance Schedule section */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col min-h-[400px]">
                    <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-amber-50 p-2 rounded-lg text-amber-600">
                                <AlertCircle size={20} />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900">Maintenance Schedule</h2>
                                <p className="text-sm text-gray-500">Upcoming and overdue maintenance for your fleet</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="px-3 py-1.5 bg-[#a3b11a] text-white rounded-lg text-xs font-bold hover:bg-[#8e9a16] transition-colors shadow-sm flex items-center gap-1.5">
                                <Plus size={14} /> Add Record
                            </button>
                            <button className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-lg text-xs font-bold hover:bg-gray-50 transition-colors shadow-sm flex items-center gap-1.5">
                                Schedule <Clock size={14} />
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-gray-50/50">
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-4 text-gray-300">
                            <RotateCcw size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-base font-semibold text-gray-900 mb-1">Scheduled Maintenance Shows Here</h3>
                        <p className="text-sm text-gray-400">No data to show</p>
                    </div>
                </div>

                {/* Fleet Utilization section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col min-h-[400px]">
                    <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                                <ArrowUpRight size={20} />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900">Fleet Utilization</h2>
                                <p className="text-xs text-gray-500">Current utilization rates based on Samsara data</p>
                            </div>
                        </div>
                        <select className="px-2 py-1 bg-white border border-gray-200 rounded text-[10px] font-bold text-gray-500 outline-none">
                            <option>Last 7 Days</option>
                        </select>
                    </div>
                    <div className="p-6 flex-1 space-y-5">
                        {utilizationData.map((item, idx) => (
                            <div key={idx} className="space-y-1.5">
                                <div className="flex justify-between text-xs font-bold">
                                    <span className="text-gray-500">{item.id} <span className="font-medium text-gray-400">({item.type})</span></span>
                                    <span className="text-gray-900">{item.percentage}%</span>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-teal-500 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 bg-gray-50/50 border-t border-gray-100 text-center">
                        <button className="text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors py-1.5 px-6 bg-white border border-gray-200 rounded-full shadow-sm">
                            View full Utilization report
                        </button>
                    </div>
                </div>
            </div>

            {/* Completed Maintenance section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="bg-emerald-50 p-2 rounded-lg text-emerald-600">
                            <CheckCircle2 size={20} />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Completed Maintenance</h2>
                            <p className="text-sm text-gray-500">Historical maintenance records for your fleet</p>
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[800px]">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Vehicle</th>
                                <th className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Service Type</th>
                                <th className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Technician</th>
                                <th className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Details</th>
                                <th className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-right">Mileage</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {completedMaintenance.map((record, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-4 py-2">
                                        <div className="text-xs font-bold text-gray-900">{record.vehicle}</div>
                                        <div className="text-[10px] text-gray-500">{record.type}</div>
                                    </td>
                                    <td className="px-4 py-2">
                                        <div className="text-xs font-bold text-gray-800">{record.service}</div>
                                        <div className="text-[10px] text-blue-600 font-medium">{record.date}</div>
                                    </td>
                                    <td className="px-4 py-2">
                                        <div className="text-xs font-bold text-slate-800">{record.technician}</div>
                                    </td>
                                    <td className="px-4 py-2">
                                        <div className="text-xs text-slate-700">{record.details}</div>
                                    </td>
                                    <td className="px-4 py-2 text-right">
                                        <div className="text-xs text-gray-500">{record.mileage}</div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default FleetManagement;
