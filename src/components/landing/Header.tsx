import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node) && !(event.target as Element).closest('.hamburger')) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header className="bg-white py-5 fixed top-0 w-full z-50 shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-center max-w-[1500px] mx-auto px-10 gap-[100px] max-lg:gap-10 max-sm:px-4">
                <div className="shrink-0 w-40 max-sm:w-32">
                    <img className="w-full" src="assets/Frame 6.svg" alt="LoadTally Logo" />
                </div>
                <div className="flex gap-2.5">
                    <Link
                        to="/login"
                        className="font-bold bg-primary-blue text-white w-[120px] h-[40px] flex items-center justify-center rounded-full text-lg transition-all duration-300 hover:bg-[#0f1d3a] hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(26,45,84,0.3)] max-sm:h-auto max-sm:py-4 max-sm:px-8 max-md:rounded-[20px] max-sm:rounded-[20px]"
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="font-bold bg-primary-blue text-white w-[120px] h-[40px] flex items-center justify-center rounded-full text-lg transition-all duration-300 hover:bg-[#0f1d3a] hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(26,45,84,0.3)] max-sm:h-auto max-sm:py-4 max-sm:px-8 max-md:rounded-[20px] max-sm:rounded-[20px]"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </header>
    );
}
