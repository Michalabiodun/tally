interface UseCase {
    id: number;
    title: string;
    description: string;
    logo: string;
    color: string;
}

export default function UseCases() {
    const useCases: UseCase[] = [
        {
            id: 1,
            title: 'Smart Dispatching',
            description: 'Assign jobs to drivers or subcontractors instantly with pricing, routing, and quarry recommendations built in.',
            logo: '/assets/Frame 23 (4).svg',
            color: '#0DAA37',
        },
        {
            id: 2,
            title: 'Digital Load Tickets',
            description: 'Drivers upload photos of tickets, log loads/tons, materials, and job notes directly from the app',
            logo: '/assets/Frame 23 (5).svg',
            color: '#EFA506',
        },
        {
            id: 3,
            title: 'Subcontractor Management',
            description: 'Add subcontractor fleets, assign them jobs, track their loads and hours, and automate payouts with clear job history and rate rules.',
            logo: '/assets/Frame 23 (6).svg',
            color: '#8200B5',
        },
        {
            id: 4,
            title: 'Client Portal',
            description: 'Give clients real-time visibility into job progress, completed loads, ticket images, and billing summaries — all in one organized portal.',
            logo: '/assets/Frame 23 (7).svg',
            color: '#FF5D60',
        },
    ];

    return (
        <section className="bg-[rgba(249,249,249,0.47)] py-20 px-20 max-md:py-[60px] max-md:px-5 max-sm:py-10 max-sm:px-[15px]">
            <div className="max-w-[1400px] mx-auto grid grid-cols-[1fr_1.5fr] gap-20 items-start max-lg:grid-cols-1 max-lg:gap-10">
                <div className="flex flex-col gap-10 max-md:text-center max-md:items-center">
                    <h2 className="text-[30px] leading-[1.3] font-normal text-dark-gray max-lg:text-[28px] max-sm:text-[22px]">
                        LoadTally <span className="font-bold text-dark-gray">Core Use-cases</span>
                    </h2>
                    <p className="text-xl leading-[1.6] text-dark-gray max-sm:text-base">
                        LoadTally centralizes all your hauling workflows — dispatching, job setup, pricing,
                        routing, driver logs, subcontractor jobs, tickets, and billing — so your business can
                        scale smoothly with fewer admin bottlenecks.
                    </p>
                    <img
                        src="/assets/Vector.png"
                        alt="Decorative vector"
                        className="w-[60%] max-md:hidden"
                    />
                </div>

                <div className="grid grid-cols-2 gap-10 border-l-2 border-[#c0bcbc] pl-2.5 max-md:grid-cols-1 max-md:border-none max-md:pl-0">
                    {useCases.map((useCase) => (
                        <div
                            key={useCase.id}
                            className="p-[30px] bg-white rounded-[20px] flex flex-col gap-5 transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_16px_32px_rgba(0,0,0,0.1)] max-sm:p-5 overflow-hidden"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={useCase.logo}
                                    alt={`${useCase.title} icon`}
                                    className="w-[50px] h-[50px]"
                                />
                                <h3
                                    style={{ color: useCase.color }}
                                    className="text-[15px] font-bold leading-[1.3]"
                                >
                                    {useCase.title}
                                </h3>
                            </div>
                            <p className="text-base leading-[1.6] text-dark-gray wrap-break-word">{useCase.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
