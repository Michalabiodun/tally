import {
    Plus,
    Download,
    X,
    ChevronDown,
    GripVertical
} from 'lucide-react';
import { useState } from 'react';
import ActionMenu from '../components/ActionMenu';

interface User {
    id: string;
    name: string;
    username: string;
    email: string;
    role: 'Admin' | 'Dispatcher' | 'Financial';
    status: 'Invited';
    lastLogin: string;
    created: string;
}

const mockUsers: User[] = [
    { id: '1', name: 'Michael A', username: 'ajayidare99', email: 'rivedrive@gmail.com', role: 'Admin', status: 'Invited', lastLogin: 'Dumped', created: '-' },
    { id: '2', name: 'Michael A', username: 'ajayidare99', email: 'rivedrive@gmail.com', role: 'Dispatcher', status: 'Invited', lastLogin: 'Dumped', created: '-' },
    { id: '3', name: 'Michael A', username: 'ajayidare99', email: 'rivedrive@gmail.com', role: 'Financial', status: 'Invited', lastLogin: 'Dumped', created: '-' },
    { id: '4', name: 'Michael A', username: 'ajayidare99', email: 'rivedrive@gmail.com', role: 'Admin', status: 'Invited', lastLogin: 'Dumped', created: '-' },
    { id: '5', name: 'Michael A', username: 'ajayidare99', email: 'rivedrive@gmail.com', role: 'Admin', status: 'Invited', lastLogin: 'Dumped', created: '-' },
    { id: '6', name: 'Michael A', username: 'ajayidare99', email: 'rivedrive@gmail.com', role: 'Admin', status: 'Invited', lastLogin: 'Dumped', created: '-' },
    { id: '7', name: 'Michael A', username: 'ajayidare99', email: 'rivedrive@gmail.com', role: 'Admin', status: 'Invited', lastLogin: 'Dumped', created: '-' },
];

const UsersPage = () => {
    const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);



    const getRoleStyles = (role: string) => {
        switch (role) {
            case 'Admin': return 'bg-red-50 text-red-600 border-red-100';
            case 'Dispatcher': return 'bg-amber-50 text-amber-600 border-amber-100';
            case 'Financial': return 'bg-purple-50 text-purple-600 border-purple-100';
            default: return 'bg-gray-50 text-gray-600 border-gray-100';
        }
    };

    return (
        <div className="p-4 md:p-6 max-w-[1240px] mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-none">Users</h1>
                    <p className="text-[12px] text-gray-500 mt-1">Manage admin panel users and send invitations</p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setIsInviteModalOpen(true)}
                        className="flex items-center gap-2 px-4 py-1.5 bg-[#0f172a] text-white rounded-full text-xs font-semibold hover:bg-slate-800 transition-colors shadow-sm"
                    >
                        <span>Invite User</span>
                        <Plus size={14} />
                    </button>
                    <button className="flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-full text-xs font-semibold hover:bg-gray-50 transition-colors shadow-sm">
                        <span>Import</span>
                        <Download size={14} />
                    </button>
                </div>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 md:p-6 border-b border-gray-50">
                    <h2 className="text-sm font-bold text-gray-900 leading-none">Admin Panel Users</h2>
                    <p className="text-[11px] text-gray-400 mt-1">Users with access to the administrative dashboard</p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[1000px]">
                        <thead>
                            <tr className="bg-white border-b border-gray-50">
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Username</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Role</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Last Login</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Created</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {mockUsers.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-6 py-3">
                                        <div className="flex items-center gap-3">
                                            <GripVertical size={14} className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab" />
                                            <span className="text-xs font-medium text-gray-600">{user.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-3 text-xs font-bold text-gray-900">{user.username}</td>
                                    <td className="px-6 py-3 text-xs text-gray-600">{user.email}</td>
                                    <td className="px-6 py-3">
                                        <span className={`px-2.5 py-0.5 text-[9px] font-bold rounded-full border ${getRoleStyles(user.role)}`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-3">
                                        <span className="px-2.5 py-0.5 bg-gray-50 text-gray-400 text-[9px] font-bold rounded-full border border-gray-100">
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-3 text-xs text-gray-400 text-center">{user.lastLogin}</td>
                                    <td className="px-6 py-3 text-xs text-gray-400 text-center">{user.created}</td>
                                    <td className="px-6 py-3 text-center">
                                        <ActionMenu
                                            onView={() => console.log('View user', user.id)}
                                            onDelete={() => console.log('Delete user', user.id)}
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

            {/* Invite User Modal */}
            {isInviteModalOpen && (
                <div className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-[2px] z-[60] flex items-center justify-center p-4">
                    <div className="bg-white rounded-[24px] w-full max-w-xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-300">
                        {/* Modal Header */}
                        <div className="p-6 pb-4 flex justify-between items-start">
                            <div className="flex-1 text-center">
                                <h2 className="text-xl font-bold text-gray-900">Invite User</h2>
                                <p className="text-sm text-gray-500 mt-1">Send an invitation email to grant admin panel access</p>
                            </div>
                            <button
                                onClick={() => setIsInviteModalOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="px-8 py-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-gray-600 ml-1">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter first name"
                                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-gray-600 ml-1">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter last name"
                                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-600 ml-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter email address"
                                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-600 ml-1">Role</label>
                                <div className="relative">
                                    <select
                                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm appearance-none outline-none focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer shadow-sm"
                                    >
                                        <option value="">Select role</option>
                                        <option value="Admin">Admin</option>
                                        <option value="Dispatcher">Dispatcher</option>
                                        <option value="Financial">Financial</option>
                                    </select>
                                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-6 pt-4 flex gap-3">
                            <button
                                onClick={() => setIsInviteModalOpen(false)}
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

export default UsersPage;
