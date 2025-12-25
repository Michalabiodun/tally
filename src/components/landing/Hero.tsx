export default function Hero() {
    return (
        <section className="flex items-center pl-[100px] bg-[rgba(246,245,255,0.95)] min-h-screen overflow-hidden max-xl:pl-[60px] max-lg:pl-10 max-lg:pt-[60px] max-md:flex-col max-md:pl-0 max-md:pt-[60px] max-md:text-center max-md:min-h-auto max-sm:pt-10">
            <div className="flex-1 flex flex-col gap-[30px] max-w-[750px] max-md:max-w-[90%] max-md:mx-auto max-md:mb-10 max-md:px-5 max-md:items-center">
                <h1 className="text-[56px] leading-[1.3] font-normal text-dark-gray fade-in-up max-xl:text-5xl max-lg:text-[40px] max-md:text-4xl max-sm:text-[28px]">
                    Run Your Sand Hauling & Material Placement <span className="font-bold text-primary-blue">Business Smarter</span>
                </h1>
                <p className="text-xl leading-[1.6] text-dark-gray fade-in-up delay-1 max-lg:text-lg max-sm:text-base">
                    LoadTally helps dump truck fleets, sand haulers, subcontractors, and material placement companies track
                    loads, drivers, dispatches, subcontractors, inspections, and client billing — <span className="font-semibold">all in one simple platform</span>.
                </p>
                <div className="flex gap-5 items-center justify-center fade-in-up delay-2 max-md:justify-center max-md:w-full max-sm:flex-col max-sm:gap-[15px]">
                    <a
                        href="https://forms.gle/3Th96mRsznqgUxQ4A"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold bg-primary-blue text-white w-[150px] h-[50px] flex items-center justify-center rounded-full text-lg transition-all duration-300 hover:bg-[#0f1d3a] hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(26,45,84,0.3)] max-sm:w-full max-sm:h-auto max-sm:py-4 max-sm:px-8"
                    >
                        Join Waitlist
                    </a>
                </div>
            </div>
            <div className="flex-1 flex justify-end items-center h-full mr-0 pr-0 fade-in-right delay-3 max-md:w-full max-md:h-auto max-md:mr-0">
                <img
                    src="assets/view-modern-construction-site 1.svg"
                    alt="Modern construction site with a sand hauling truck"
                    className="w-full h-full object-cover block max-md:w-full max-md:h-auto max-md:object-contain"
                />
            </div>
        </section>
    );
}
