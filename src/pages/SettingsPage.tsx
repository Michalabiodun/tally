import {
    Building2,
    Bell,
    Settings as SettingsIcon,
    ChevronDown,
    Database,
    RefreshCw,
    Check
} from 'lucide-react';
import { useState } from 'react';

type SettingsTab = 'Company' | 'Notification' | 'System';

const Toggle = ({ active, onToggle }: { active: boolean; onToggle: () => void }) => (
    <button
        onClick={onToggle}
        className={`w-10 h-6 rounded-full relative p-1 transition-all duration-300 ${active ? 'bg-[#1e293b]' : 'bg-gray-200'}`}
    >
        <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all duration-300 shadow-sm ${active ? 'left-5' : 'left-1'}`} />
    </button>
);

const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState<SettingsTab>('Company');
    const [isSaving, setIsSaving] = useState(false);
    const [showSavedMsg, setShowSavedMsg] = useState(false);

    // Notification States
    const [notifications, setNotifications] = useState({
        email: true,
        sms: false,
        newWorkOrders: true,
        jobCompletions: true,
        maintenanceAlerts: false
    });

    // System States
    const [system, setSystem] = useState({
        autoRefresh: true,
        dateFormat: 'MM/DD/YYYY',
        timeFormat: '12-hour (AM/PM)',
        currency: 'USD ($)',
        refreshInterval: '5 minutes'
    });

    const handleToggle = (key: keyof typeof notifications) => {
        setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
            setShowSavedMsg(true);
            setTimeout(() => setShowSavedMsg(false), 3000);
        }, 1200);
    };

    return (
        <div className="p-4 md:p-6 max-w-[1240px] mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-none">Settings</h1>
                    <p className="text-[12px] text-gray-500 mt-1">Manage your application preferences and configuration</p>
                </div>
                {showSavedMsg && (
                    <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl text-xs font-bold animate-in fade-in slide-in-from-top-2 duration-300">
                        <Check size={14} />
                        Preferences updated successfully
                    </div>
                )}
            </div>

            {/* Tab Switcher */}
            <div className="inline-flex p-1 bg-gray-100/50 border border-gray-100 rounded-xl">
                {(['Company', 'Notification', 'System'] as SettingsTab[]).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex items-center gap-2 px-8 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === tab
                            ? 'bg-[#1e293b] text-white shadow-md shadow-slate-200'
                            : 'text-gray-400 hover:text-gray-600'
                            }`}
                    >
                        {tab === 'Company' && <Building2 size={14} />}
                        {tab === 'Notification' && <Bell size={14} />}
                        {tab === 'System' && <SettingsIcon size={14} />}
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-[24px] shadow-sm border border-gray-50 overflow-hidden min-h-[500px]">
                <div className="p-8">
                    {activeTab === 'Company' && (
                        <div className="space-y-8 animate-in fade-in duration-300">
                            <div>
                                <h2 className="text-[18px] font-bold text-gray-900 leading-none">Company Information</h2>
                                <p className="text-[12px] text-gray-500 mt-2">Manage your company details and contact information.</p>
                            </div>

                            <div className="flex flex-col lg:flex-row gap-12">
                                <div className="flex-1 space-y-6">
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold text-gray-600 ml-1 uppercase tracking-wider">Company Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter company name"
                                            className="w-full px-5 py-3.5 bg-gray-50/30 border border-gray-100 rounded-2xl text-[13px] outline-none focus:ring-2 focus:ring-slate-100 focus:bg-white transition-all"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <label className="text-[11px] font-bold text-gray-600 ml-1 uppercase tracking-wider">Phone Number</label>
                                            <input
                                                type="text"
                                                placeholder="+1 (555) 000-0000"
                                                className="w-full px-5 py-3.5 bg-gray-50/30 border border-gray-100 rounded-2xl text-[13px] outline-none focus:ring-2 focus:ring-slate-100 focus:bg-white transition-all"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[11px] font-bold text-gray-600 ml-1 uppercase tracking-wider">Email Address</label>
                                            <input
                                                type="email"
                                                placeholder="email@company.com"
                                                className="w-full px-5 py-3.5 bg-gray-50/30 border border-gray-100 rounded-2xl text-[13px] outline-none focus:ring-2 focus:ring-slate-100 focus:bg-white transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold text-gray-600 ml-1 uppercase tracking-wider">Business Address</label>
                                        <input
                                            type="text"
                                            placeholder="123 Business Way, Suite 100"
                                            className="w-full px-5 py-3.5 bg-gray-50/30 border border-gray-100 rounded-2xl text-[13px] outline-none focus:ring-2 focus:ring-slate-100 focus:bg-white transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="w-full lg:w-[300px] flex flex-col items-center">
                                    <label className="text-[11px] font-bold text-gray-600 mb-4 self-center lg:self-start uppercase tracking-wider">Company Logo</label>
                                    <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-full lg:aspect-square bg-slate-50 rounded-[24px] sm:rounded-[32px] border-2 border-dashed border-slate-100 flex items-center justify-center mb-6 overflow-hidden group hover:border-slate-200 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-xl sm:rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-2 text-slate-300">
                                                <Building2 className="w-4 h-4 sm:w-6 sm:h-6" />
                                            </div>
                                            <span className="text-gray-400 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest">No logo set</span>
                                        </div>
                                    </div>
                                    <button className="flex items-center gap-2 px-6 py-2 sm:px-8 sm:py-3 bg-white border border-slate-200 text-slate-900 rounded-full text-[10px] sm:text-xs font-bold hover:bg-slate-50 transition-all shadow-sm">
                                        Upload New logo
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Notification' && (
                        <div className="space-y-10 animate-in fade-in duration-300">
                            <div>
                                <h2 className="text-[18px] font-bold text-gray-900 leading-none">Notification Preferences</h2>
                                <p className="text-[12px] text-gray-500 mt-2">Manage how and when you receive notifications.</p>
                            </div>

                            <section className="space-y-6">
                                <h3 className="text-[13px] font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                                    Notification Methods
                                </h3>
                                <div className="space-y-4 max-w-2xl">
                                    <div className="flex items-center justify-between p-5 bg-slate-50/50 rounded-2xl border border-slate-100/50 hover:bg-slate-50 transition-colors">
                                        <div>
                                            <div className="text-[13px] font-bold text-gray-800">Email Notification</div>
                                            <p className="text-[11px] text-gray-400 mt-0.5">Receive notifications via email</p>
                                        </div>
                                        <Toggle active={notifications.email} onToggle={() => handleToggle('email')} />
                                    </div>
                                    <div className="flex items-center justify-between p-5 bg-slate-50/50 rounded-2xl border border-slate-100/50 hover:bg-slate-50 transition-colors">
                                        <div>
                                            <div className="text-[13px] font-bold text-gray-800">SMS Notifications</div>
                                            <p className="text-[11px] text-gray-400 mt-0.5">Receive notifications via text message</p>
                                        </div>
                                        <Toggle active={notifications.sms} onToggle={() => handleToggle('sms')} />
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h3 className="text-[13px] font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                                    Notification Events
                                </h3>
                                <div className="space-y-4 max-w-2xl">
                                    {[
                                        { id: 'newWorkOrders', title: 'New Work Orders', desc: 'Notify when a new work order is created' },
                                        { id: 'jobCompletions', title: 'Job Completions', desc: 'Notify when a job is marked as completed' },
                                        { id: 'maintenanceAlerts', title: 'Maintenance Alerts', desc: 'Notify for scheduled and required maintenance' }
                                    ].map((event) => (
                                        <div key={event.id} className="flex items-center justify-between p-5 bg-slate-50/50 rounded-2xl border border-slate-100/50 hover:bg-slate-50 transition-colors">
                                            <div>
                                                <div className="text-[13px] font-bold text-gray-800">{event.title}</div>
                                                <p className="text-[11px] text-gray-400 mt-0.5">{event.desc}</p>
                                            </div>
                                            <Toggle
                                                active={notifications[event.id as keyof typeof notifications]}
                                                onToggle={() => handleToggle(event.id as keyof typeof notifications)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    )}

                    {activeTab === 'System' && (
                        <div className="space-y-10 animate-in fade-in duration-300">
                            <div>
                                <h2 className="text-[18px] font-bold text-gray-900 leading-none">System Preferences</h2>
                                <p className="text-[12px] text-gray-500 mt-2">Configure system-wide settings and defaults</p>
                            </div>

                            <section className="space-y-6">
                                <h3 className="text-[13px] font-bold text-slate-900 uppercase tracking-wider">
                                    Display Settings
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold text-gray-600 ml-1 uppercase tracking-wider">Date Format</label>
                                        <div className="relative">
                                            <select
                                                value={system.dateFormat}
                                                onChange={(e) => setSystem(prev => ({ ...prev, dateFormat: e.target.value }))}
                                                className="w-full px-5 py-3 bg-slate-50/50 border border-slate-100 rounded-2xl text-[13px] outline-none appearance-none hover:bg-white transition-all cursor-pointer shadow-sm pr-10"
                                            >
                                                <option>MM/DD/YYYY</option>
                                                <option>DD/MM/YYYY</option>
                                            </select>
                                            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold text-gray-600 ml-1 uppercase tracking-wider">Time Format</label>
                                        <div className="relative">
                                            <select
                                                value={system.timeFormat}
                                                onChange={(e) => setSystem(prev => ({ ...prev, timeFormat: e.target.value }))}
                                                className="w-full px-5 py-3 bg-slate-50/50 border border-slate-100 rounded-2xl text-[13px] outline-none appearance-none hover:bg-white transition-all cursor-pointer shadow-sm pr-10"
                                            >
                                                <option>12-hour (AM/PM)</option>
                                                <option>24-hour</option>
                                            </select>
                                            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold text-gray-600 ml-1 uppercase tracking-wider">Default Currency</label>
                                        <div className="relative">
                                            <select
                                                value={system.currency}
                                                onChange={(e) => setSystem(prev => ({ ...prev, currency: e.target.value }))}
                                                className="w-full px-5 py-3 bg-slate-50/50 border border-slate-100 rounded-2xl text-[13px] outline-none appearance-none hover:bg-white transition-all cursor-pointer shadow-sm pr-10"
                                            >
                                                <option>USD ($)</option>
                                                <option>EUR (€)</option>
                                            </select>
                                            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h3 className="text-[13px] font-bold text-slate-900 uppercase tracking-wider">
                                    Data & Performance
                                </h3>
                                <div className="space-y-4 max-w-4xl">
                                    <div className="flex items-center justify-between p-5 bg-slate-50/50 rounded-2xl border border-slate-100/50 hover:bg-slate-50 transition-colors">
                                        <div>
                                            <div className="text-[13px] font-bold text-gray-800">Auto-refresh Dashboard</div>
                                            <p className="text-[11px] text-gray-400 mt-0.5">Automatically refresh dashboard data</p>
                                        </div>
                                        <Toggle
                                            active={system.autoRefresh}
                                            onToggle={() => setSystem(prev => ({ ...prev, autoRefresh: !prev.autoRefresh }))}
                                        />
                                    </div>

                                    <div className={`space-y-1.5 max-w-sm transition-all duration-300 ${system.autoRefresh ? 'opacity-100 translate-y-0' : 'opacity-40 pointer-events-none -translate-y-1'}`}>
                                        <label className="text-[11px] font-bold text-gray-600 ml-1 uppercase tracking-wider">Refresh Interval (minutes)</label>
                                        <div className="relative">
                                            <select
                                                value={system.refreshInterval}
                                                onChange={(e) => setSystem(prev => ({ ...prev, refreshInterval: e.target.value }))}
                                                className="w-full px-5 py-3 bg-slate-50/50 border border-slate-100 rounded-2xl text-[13px] outline-none appearance-none hover:bg-white transition-all cursor-pointer shadow-sm pr-10"
                                            >
                                                <option>5 minutes</option>
                                                <option>15 minutes</option>
                                                <option>30 minutes</option>
                                            </select>
                                            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>

                                    <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 bg-slate-50/30 rounded-[32px] border border-slate-100 mt-6 gap-4">
                                        <div>
                                            <div className="text-[13px] font-bold text-slate-800">Clear Data Cache</div>
                                            <p className="text-[11px] text-slate-500 mt-1 font-medium">Clear locally stored data to resolve any display issues</p>
                                        </div>
                                        <button className="flex items-center gap-2 px-8 py-3 bg-white border border-slate-200 text-slate-900 rounded-full text-xs font-bold hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-all shadow-sm shrink-0">
                                            <Database size={14} />
                                            Clear Cache
                                        </button>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}
                </div>

                {/* Footer Save Button */}
                <div className="px-8 py-6 bg-slate-50/30 border-t border-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[11px] text-slate-400 font-medium italic">All changes are stored locally for this session.</p>
                    <button
                        onClick={handleSave}
                        disabled={isSaving}
                        className={`flex items-center gap-2 px-10 py-3 rounded-full text-xs font-bold transition-all shadow-xl shadow-slate-200 ${isSaving
                            ? 'bg-slate-400 cursor-not-allowed text-white'
                            : 'bg-[#1e293b] text-white hover:bg-[#0f172a] hover:scale-[1.02] active:scale-[0.98]'
                            }`}
                    >
                        {isSaving ? (
                            <RefreshCw size={14} className="animate-spin" />
                        ) : (
                            <RefreshCw size={14} />
                        )}
                        {isSaving ? 'Saving Changes...' : 'Save Changes'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
