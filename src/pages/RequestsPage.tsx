import {
    ArrowUpDown
} from 'lucide-react';

interface TimeOffRequest {
    id: string;
    dateCreated: string;
    name: string;
    request: string;
    status: 'Pending' | 'Accepted' | 'Rejected';
    decisionBy: string;
    decisionDate: string;
}

const mockPendingRequests: TimeOffRequest[] = [
    { id: '1', dateCreated: '09/08/25 07:49', name: "Adam's Electric", request: 'Demo-job', status: 'Pending', decisionBy: 'NK.Denver', decisionDate: '09/08/25' },
    { id: '2', dateCreated: '09/08/25 07:49', name: "Adam's Electric", request: 'Demo-job', status: 'Pending', decisionBy: 'NK.Denver', decisionDate: '09/08/25' },
    { id: '3', dateCreated: '09/08/25 07:49', name: "Adam's Electric", request: 'Demo-job', status: 'Pending', decisionBy: 'NK.Denver', decisionDate: '09/08/25' },
    { id: '4', dateCreated: '09/08/25 07:49', name: "Adam's Electric", request: 'Demo-job', status: 'Pending', decisionBy: 'NK.Denver', decisionDate: '09/08/25' },
    { id: '5', dateCreated: '09/08/25 07:49', name: "Adam's Electric", request: 'Demo-job', status: 'Pending', decisionBy: 'NK.Denver', decisionDate: '09/08/25' },
    { id: '6', dateCreated: '09/08/25 07:49', name: "Adam's Electric", request: 'Demo-job', status: 'Pending', decisionBy: 'NK.Denver', decisionDate: '09/08/25' },
    { id: '7', dateCreated: '09/08/25 07:49', name: "Adam's Electric", request: 'Demo-job', status: 'Pending', decisionBy: 'NK.Denver', decisionDate: '09/08/25' },
];

const RequestsPage = () => {
    return (
        <div className="p-4 md:p-6 max-w-[1240px] mx-auto space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-xl font-bold text-gray-900 leading-none">Time Off Requests</h1>
                <p className="text-[12px] text-gray-500 mt-1">Review and manage driver time off requests</p>
            </div>

            {/* Section 1: Pending Requests */}
            <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 pb-4 border-b border-gray-50 flex items-center gap-3">
                    <h2 className="text-sm font-bold text-gray-900 leading-none">Pending Requests</h2>
                    <span className="bg-[#4fb1b1] text-white text-[11px] font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-sm">
                        {mockPendingRequests.length}
                    </span>
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
                                    <div className="flex items-center gap-1">Name <ArrowUpDown size={10} /></div>
                                </th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                    <div className="flex items-center gap-1">Request <ArrowUpDown size={10} /></div>
                                </th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Decision by</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Decision Date</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {mockPendingRequests.length > 0 ? (
                                mockPendingRequests.map((request) => (
                                    <tr key={request.id} className="hover:bg-gray-50/50 transition-colors group">
                                        <td className="px-6 py-3">
                                            <input type="checkbox" className="w-3.5 h-3.5 rounded-md border-gray-200 text-blue-600 focus:ring-blue-100" />
                                        </td>
                                        <td className="px-6 py-3 text-[10px] font-medium text-gray-800">{request.dateCreated}</td>
                                        <td className="px-6 py-3 text-[10px] font-bold text-gray-700">{request.name}</td>
                                        <td className="px-6 py-3 text-[10px] font-medium text-gray-600">{request.request}</td>
                                        <td className="px-6 py-3">
                                            <span className="px-2 py-0.5 bg-amber-50 text-amber-500 text-[8px] font-bold rounded-full border border-amber-100 min-w-[50px] inline-block text-center lowercase">
                                                {request.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-3 text-[10px] font-bold text-gray-900">{request.decisionBy}</td>
                                        <td className="px-6 py-3 text-[10px] font-medium text-gray-600">{request.decisionDate}</td>
                                        <td className="px-6 py-3">
                                            <div className="flex items-center justify-center gap-2">
                                                <button className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-lg border border-green-100 hover:bg-green-100 transition-colors">
                                                    Accept
                                                </button>
                                                <button className="px-3 py-1 bg-red-50 text-red-600 text-[10px] font-bold rounded-lg border border-red-100 hover:bg-red-100 transition-colors">
                                                    Reject
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={8} className="px-6 py-20 text-center">
                                        <p className="text-xs font-medium text-gray-400">No data to show</p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
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
                                    className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold transition-all ${page === 1 ? 'bg-[#0f172a] text-white shadow-md shadow-slate-200' : 'text-gray-400 hover:bg-gray-50'}`}
                                >
                                    {page}
                                </button>
                            ))}
                            <button className="w-7 h-7 flex items-center justify-center rounded-full text-xs text-gray-400 hover:bg-gray-50">›</button>
                        </div>
                        <select className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-[10px] font-bold text-gray-600 outline-none">
                            <option>10/Page</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Section 2: Reviewed Requests */}
            <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 pb-4 border-b border-gray-50 flex items-center gap-3">
                    <h2 className="text-sm font-bold text-gray-900 leading-none">Reviewed Requests</h2>
                    <span className="bg-[#4fb1b1] text-white text-[11px] font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-sm">
                        0
                    </span>
                </div>

                <div className="py-20 text-center border-b border-gray-50">
                    <p className="text-xs font-medium text-gray-400">No data to show</p>
                </div>
            </div>
        </div>
    );
};

export default RequestsPage;
