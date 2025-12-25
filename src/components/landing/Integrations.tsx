interface Integration {
    name: string;
    logo: string;
}

export default function Integrations() {
    const integrations: Integration[] = [
        { name: 'Google Maps', logo: 'assets/googlemap.svg' },
        { name: 'Excel', logo: 'assets/excel.svg' },
        { name: 'Geotab', logo: 'assets/geotab-logo.svg' },
        { name: 'Samsara', logo: 'assets/samsara.svg' },
        { name: 'QuickBooks', logo: 'assets/quickbooks.svg' },
    ];

    return (
        <section className="py-20 px-20 bg-primary-blue text-white max-md:py-[60px] max-md:px-5 max-sm:py-10 max-sm:px-[15px]">
            <div className="max-w-[1400px] mx-auto grid grid-cols-2 gap-20 items-center max-lg:grid-cols-1 max-lg:gap-10 max-lg:text-center">
                <div className="flex flex-col gap-5">
                    <h2 className="text-[40px] font-bold max-md:text-[28px]">Seamless Integrations</h2>
                    <p className="text-lg leading-[1.6] text-white/90 max-md:text-base">
                        LoadTally integrates with Google Maps, Excel, Geotab, Samsara, and QuickBooks to
                        streamline your entire workflow.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-5 items-center max-md:grid-cols-3 max-md:gap-[15px] max-sm:grid-cols-2">
                    {integrations.map((integration) => (
                        <div
                            key={integration.name}
                            className="bg-white p-5 rounded-[20px] flex justify-center items-center min-h-[80px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_10px_24px_rgba(0,0,0,0.2)] max-sm:min-h-[60px] overflow-hidden"
                        >
                            <img
                                src={integration.logo}
                                alt={integration.name}
                                className="max-w-[90%] max-h-[90%] object-contain"
                            />
                        </div>
                    ))}
                    <a
                        href="https://forms.gle/3Th96mRsznqgUxQ4A"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold bg-white text-primary-blue py-3 px-6 rounded-full text-base transition-all duration-300 justify-self-end self-center max-lg:justify-self-center max-sm:w-full max-sm:py-3"
                    >
                        Join Waitlist
                    </a>
                </div>
            </div>
        </section>
    );
}
