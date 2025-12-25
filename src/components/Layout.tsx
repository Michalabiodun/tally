import { ReactNode, useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Mic } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    // Determine active item based on current path
    const getActiveItem = () => {
        const path = location.pathname;
        if (path === '/') return 'Dashboard';
        if (path === '/fleet-management') return 'Fleet Management';
        if (path === '/jobs') return 'Jobs';
        if (path === '/dispatch') return 'Dispatch';
        if (path === '/tickets') return 'Tickets';
        if (path === '/invoices') return 'Invoices';
        if (path === '/users') return 'Users';
        if (path === '/driver-hub') return "Driver's Hub";
        if (path === '/clients') return 'Clients';
        if (path === '/materials') return 'Materials';
        if (path === '/requests') return 'Requests';
        if (path === '/sub-contractors') return 'Sub Contractors';
        if (path === '/managers') return 'Managers';
        if (path === '/quarry') return 'Quarry';
        if (path === '/settings') return 'Settings';
        return 'Dashboard';
    };


    return (
        <div className="flex h-screen flex-col bg-gray-50 font-sans">
            {/* Header - Full Width */}
            <Header onMenuClick={() => setSidebarOpen(prev => !prev)} />

            {/* Main Container */}
            <div className="flex flex-1 overflow-hidden relative">
                {/* Mobile Sidebar Overlay */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-20 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* Sidebar */}
                <div className={`fixed inset-y-0 left-0 z-30 lg:relative transition-transform duration-300 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                    <Sidebar activeItem={getActiveItem()} onClose={() => setSidebarOpen(false)} />
                </div>

                {/* Main Content */}
                <div className="flex-1 w-full overflow-y-auto">
                    {children}
                </div>
            </div>

            <button className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-[#0f172a] hover:bg-[#1e293b] text-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 z-40">
                <Mic size={24} />
            </button>
        </div>
    );
};

export default Layout;
