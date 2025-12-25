import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    animation?: 'reveal-up' | 'reveal-down' | 'reveal-left' | 'reveal-right';
}

export default function ScrollReveal({
    children,
    className = '',
    animation = 'reveal-up'
}: ScrollRevealProps) {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, []);

    return (
        <div ref={elementRef} className={`reveal ${animation} ${className}`}>
            {children}
        </div>
    );
}
