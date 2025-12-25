import { useState } from 'react';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    rating: number;
    image: string;
    text: string;
}

export default function Testimonials() {
    const [currentPage, setCurrentPage] = useState(1);

    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: 'Mrs Bola Abiodun',
            role: 'Subcontractor Operator',
            rating: 4.5,
            image: '/assets/out-now 1.svg',
            text: 'The subcontractor portal gives us complete visibility into job assignments and earnings. Load tracking and payout calculations are now automatic.',
        },
        {
            id: 2,
            name: 'Mr. Brian Adam',
            role: 'Founder of TPC Trucking',
            rating: 4.2,
            image: '/assets/out-now 1 (1).svg',
            text: 'LoadTally transformed how we manage our 25-truck hauling operation. Dispatch is smoother, our admin workload dropped, and drivers love the mobile app.',
        },
        {
            id: 3,
            name: 'Mr. Solomon Luke',
            role: 'Founder of Tran Slinger',
            rating: 4.2,
            image: '/assets/out-now 1 (1).svg',
            text: 'Our slinger truck operations are more efficient than ever. Load tracking, ticket uploads, and client reporting all happen automatically.',
        },
        {
            id: 4,
            name: 'Mr. John Doe',
            role: 'Fleet Manager',
            rating: 4.8,
            image: 'https://via.placeholder.com/90x90?text=John',
            text: 'The best platform for managing our fleet. The real-time GPS tracking is a game-changer for our logistics.',
        },
        {
            id: 5,
            name: 'Ms. Jane Smith',
            role: 'Independent Driver',
            rating: 4.6,
            image: 'https://via.placeholder.com/90x90?text=Jane',
            text: 'Using LoadTally has simplified my daily work. I can easily see my jobs and earnings without any hassle.',
        },
        {
            id: 6,
            name: 'Mr. Alex Johnson',
            role: 'CEO of Haulage Inc.',
            rating: 4.9,
            image: 'https://via.placeholder.com/90x90?text=Alex',
            text: 'We have seen a 30% increase in efficiency since adopting LoadTally. The automated billing is flawless.',
        },
        {
            id: 7,
            name: 'Mrs. Emily White',
            role: 'Subcontractor Operator',
            rating: 4.4,
            image: 'https://via.placeholder.com/90x90?text=Emily',
            text: 'The subcontractor portal is incredibly user-friendly. It gives us complete visibility into job assignments and earnings.',
        },
        {
            id: 8,
            name: 'Mr. Michael Brown',
            role: 'Founder of Rock Solid Trucking',
            rating: 4.7,
            image: 'https://via.placeholder.com/90x90?text=Michael',
            text: 'LoadTally has been a pivotal tool for our growth. The dispatch system is robust and easy to use.',
        },
        {
            id: 9,
            name: 'Ms. Sarah Green',
            role: 'Logistics Coordinator',
            rating: 4.5,
            image: 'https://via.placeholder.com/90x90?text=Sarah',
            text: 'Managing subcontractors has never been easier. The automated payouts save us hours of administrative work.',
        },
        {
            id: 10,
            name: 'Mr. David Black',
            role: 'Slinger Operator',
            rating: 4.3,
            image: 'https://via.placeholder.com/90x90?text=David',
            text: 'The mobile app is fantastic. Uploading tickets and logging hours is quick and straightforward.',
        },
        {
            id: 11,
            name: 'Ms. Olivia Blue',
            role: 'Client',
            rating: 4.8,
            image: 'https://via.placeholder.com/90x90?text=Olivia',
            text: 'The client portal is a great feature. I can track the progress of my materials in real-time.',
        },
        {
            id: 12,
            name: 'Mr. Chris Yellow',
            role: 'Driver',
            rating: 4.6,
            image: 'https://via.placeholder.com/90x90?text=Chris',
            text: 'I love the LoadTally app. It makes my job so much easier and keeps everything organized in one place.',
        },
    ];

    const itemsPerPage = 3;
    const totalPages = Math.ceil(testimonials.length / itemsPerPage);
    const startIdx = (currentPage - 1) * itemsPerPage;
    const displayedTestimonials = testimonials.slice(startIdx, startIdx + itemsPerPage);

    return (
        <section className="py-20 px-20 bg-[rgba(249,249,249,0.47)] max-md:py-[60px] max-md:px-5">
            <div className="max-w-[1400px] mx-auto relative">
                <h2 className="text-[40px] font-bold text-center text-[#1a1a1a] mb-[60px] max-lg:text-[32px] max-md:text-[28px] max-md:mb-10">
                    Success Stories from our satisfied Customers
                </h2>

                <div className="grid grid-cols-3 gap-[30px] mb-[60px] max-lg:grid-cols-2 max-md:flex max-md:overflow-x-auto max-md:snap-x max-md:snap-mandatory max-md:gap-5 max-md:pb-5 max-md:scrollbar-hide">
                    {displayedTestimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white p-5 min-h-[200px] rounded-[20px] flex gap-[25px] transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] max-md:p-5 max-md:flex-col max-md:gap-5 max-md:flex-[0_0_80%] max-md:snap-start overflow-hidden"
                        >
                            <div className="flex flex-col items-center gap-3 min-w-[120px] border-r-2 border-[#E0E0E0] max-md:min-w-auto">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-[90px] h-[90px] rounded-full object-cover"
                                />
                                <h4 className="text-sm font-semibold text-[#1a1a1a] m-0 text-center">
                                    {testimonial.name}
                                </h4>
                                <p className="text-xs text-[#B5B3B3] m-0 text-center leading-[1.3]">
                                    {testimonial.role}
                                </p>
                            </div>
                            <div className="flex-1 flex flex-col gap-[15px]">
                                <div className="flex justify-between items-start">
                                    <span className="text-5xl font-bold text-[#1a1a1a] leading-none font-serif">"</span>
                                    <div className="flex items-center gap-1">
                                        <span className="text-xl text-[#E7BF1E]">★</span>
                                        <span className="text-base font-medium text-[#1a1a1a]">{testimonial.rating}</span>
                                    </div>
                                </div>
                                <p className="text-sm leading-[1.6] text-[#1a1a1a] m-0 wrap-break-word">{testimonial.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center items-center gap-[15px] flex-wrap">
                    {[...Array(totalPages)].map((_, idx) => (
                        <button
                            key={idx + 1}
                            className={`w-[50px] h-[50px] border-[1.5px] border-[#B5B3B3] bg-transparent rounded-full text-base font-normal text-[#6E706F] cursor-pointer transition-all duration-300 hover:border-[#1a1a1a] hover:text-[#1a1a1a] max-md:w-10 max-md:h-10 max-md:text-sm ${currentPage === idx + 1 ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]' : ''
                                }`}
                            onClick={() => setCurrentPage(idx + 1)}
                        >
                            {idx + 1}
                        </button>
                    ))}
                    <button
                        className="w-[90px] h-[50px] bg-[#1a1a1a] text-white border-2 border-[#1a1a1a] rounded-full text-base font-normal cursor-pointer transition-all duration-300 hover:bg-[#0f0f0f] hover:border-[#0f0f0f] hover:-translate-y-0.5 max-md:w-20 max-md:h-10 max-md:text-sm"
                        onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
}
