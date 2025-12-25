export default function DriverApp() {
    const features: string[] = [
        'Clock in / Clock-out tracking',
        'Upload load ticket images',
        'Record material, tonnage, and local counts',
        'GPS location updates',
        'Onsite notes & inspection documentation',
    ];

    return (
        <section className="py-20 px-20 bg-white max-md:py-[60px] max-md:px-5 max-sm:py-10 max-sm:px-[15px]">
            <div className="max-w-[1400px] mx-auto grid grid-cols-2 gap-20 items-start max-lg:grid-cols-1 max-lg:gap-[60px]">
                <div className="flex flex-col gap-[30px] max-md:text-center max-md:items-center">
                    <h2 className="text-[40px] font-bold text-dark-gray max-md:text-[28px] max-sm:text-2xl">
                        Driver Mobile App
                    </h2>
                    <p className="text-lg leading-[1.6] text-dark-gray max-md:text-base">
                        Empower your drivers with a simple mobile app that handles
                        everything from clock-in to load documentation.
                    </p>

                    <div className="inline-flex items-center gap-2.5 bg-[rgba(56,166,163,0.08)] py-3 px-6 rounded-full w-fit">
                        <img src="/assets/fi-rr-magic-wand.svg" alt="Core use-case icon" className="text-lg" />
                        <span className="text-sm font-bold text-teal">Core use-case</span>
                    </div>

                    <div className="bg-[rgba(249,249,249,0.47)] rounded-[20px] p-[30px] w-full max-md:w-full overflow-hidden">
                        <div className="flex flex-col gap-5 max-md:items-start max-md:text-left">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-[15px] text-lg text-dark-gray">
                                    <span className="material-symbols-outlined text-primary-blue text-2xl shrink-0">check_circle</span>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center max-lg:hidden">
                    <img
                        src="/assets/Frame 427320599 (3).svg"
                        alt="Driver Mobile App"
                        className="max-w-full rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
                    />
                </div>
            </div>
        </section>
    );
}
