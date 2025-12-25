import { MoreHorizontal, Eye, Trash2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface ActionMenuProps {
    onView?: () => void;
    onDelete?: () => void;
    className?: string;
}

export default function ActionMenu({ onView, onDelete, className = "" }: ActionMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className={`relative inline-block ${className}`} ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-1 transition-colors rounded-md ${isOpen ? 'bg-gray-100 text-gray-600' : 'text-gray-300 hover:text-gray-600 hover:bg-gray-100'
                    }`}
            >
                <MoreHorizontal size={14} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-1 w-28 bg-white rounded-xl shadow-lg border border-gray-100 py-1.5 z-50 animate-in fade-in zoom-in duration-200 origin-top-right">
                    <button
                        onClick={() => {
                            onView?.();
                            setIsOpen(false);
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-1.5 text-[11px] font-bold text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                        <div className="p-1 bg-gray-50 rounded-lg group-hover:bg-white transition-colors">
                            <Eye size={12} className="text-gray-400" />
                        </div>
                        <span>View</span>
                    </button>

                    <button
                        onClick={() => {
                            onDelete?.();
                            setIsOpen(false);
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-1.5 text-[11px] font-bold text-red-500 hover:bg-red-50/50 transition-colors"
                    >
                        <div className="p-1 bg-red-50/50 rounded-lg group-hover:bg-red-100 transition-colors">
                            <Trash2 size={12} className="text-red-500" />
                        </div>
                        <span>Delete</span>
                    </button>
                </div>
            )}
        </div>
    );
}
