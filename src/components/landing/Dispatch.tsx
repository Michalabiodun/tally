export default function Dispatch() {
    return (
        <section className="py-20 px-20 bg-white max-md:py-[60px] max-md:px-5 max-sm:py-10 max-sm:px-[15px]">
            <div className="max-w-[1400px] mx-auto text-center">
                <h2 className="text-[40px] font-bold text-dark-gray mb-5 max-lg:text-[32px] max-md:text-[28px] max-sm:text-2xl">
                    Dispatch & Job Management
                </h2>
                <p className="text-xl text-dark-gray max-w-[900px] mx-auto mb-[50px] leading-[1.6] max-md:text-base max-md:mb-[30px]">
                    Create and manage sand, gravel, and material hauling jobs with full visibility from quarry to jobsite —
                    all in one streamlined dashboard
                </p>
                <div className="grid grid-cols-3 gap-2.5 items-center max-lg:grid-cols-2 max-lg:gap-5 max-md:grid-cols-1">
                    <div className="row-span-2">
                        <img
                            src="assets/Frame 427320587 (1).svg"
                            alt="Dashboard"
                            className="w-full rounded-[40px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] max-sm:rounded-[20px]"
                        />
                    </div>
                    <div className="flex flex-col gap-[30px]">
                        <img
                            src="assets/Frame 427320391.svg"
                            alt="Interface"
                            className="w-full rounded-[40px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] max-sm:rounded-[20px]"
                        />
                        <img
                            src="assets/Frame 427320387.svg"
                            alt="Interface"
                            className="w-full rounded-[40px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] max-sm:rounded-[20px]"
                        />
                    </div>
                    <div className="col-start-3 max-lg:col-span-2 max-md:col-auto">
                        <img
                            src="assets/Frame 427320628 (1).svg"
                            alt="Details"
                            className="w-full rounded-[40px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] max-sm:rounded-[20px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
