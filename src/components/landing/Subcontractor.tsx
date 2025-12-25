export default function Subcontractor() {
    return (
        <>
            <section className="py-20 px-20 bg-white text-dark-gray max-md:py-[60px] max-md:px-5 max-sm:py-10 max-sm:px-[15px]">
                <div className="max-w-[1400px] mx-auto flex flex-col gap-10 text-center">
                    <h2 className="text-[30px] font-bold max-md:text-[26px] max-sm:text-[22px]">
                        Subcontractor Management Made Simple
                    </h2>
                    <p className="text-xl leading-[1.6] max-w-[800px] mx-auto text-dark-gray max-md:text-base">
                        Onboard subcontractors, assign them jobs, track their loads and hours, and automate
                        payouts — all while maintaining clear visibility into performance, costs, and job history.
                    </p>

                    <div className="flex gap-10 items-stretch text-left mt-10 max-lg:flex-col max-lg:gap-10">
                        <div className="flex-1 flex flex-col gap-[30px]">
                            <div className="inline-flex items-center gap-2 bg-[rgba(223,255,230,1)] py-2 px-4 rounded-full w-fit">
                                <img src="/assets/fi-rr-magic-wand (1).svg" alt="Core use-case icon" className="w-6 h-6" />
                                <span className="text-base font-semibold text-[rgb(27,101,49)]">Core use-case</span>
                            </div>

                            <div className="flex flex-col gap-5 h-full">
                                <div className="bg-[rgba(1,59,17,1)] text-white p-[30px] pb-0 mb-0 rounded-[20px] flex-1 max-md:p-5 overflow-hidden">
                                    <h3 className="text-xl text-white mb-[15px]">Prime Company Dashboard</h3>
                                    <ul className="list-none p-0 flex flex-col gap-2.5">
                                        <li className="text-white text-base flex items-start">
                                            <span className="material-symbols-outlined text-white mr-2 shrink-0">check_circle</span>
                                            Add subcontractor fleets and operators instantly
                                        </li>
                                        <li className="text-white text-base flex items-start">
                                            <span className="material-symbols-outlined text-white mr-2 shrink-0">check_circle</span>
                                            Define rates per client, job type, or material
                                        </li>
                                        <li className="text-white text-base flex items-start">
                                            <span className="material-symbols-outlined text-white mr-2 shrink-0">check_circle</span>
                                            Dispatch subcontractors with one click
                                        </li>
                                        <li className="text-white text-base flex items-start">
                                            <span className="material-symbols-outlined text-white mr-2 shrink-0">check_circle</span>
                                            Automated payout calculations for accurate pay
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-[rgb(1,18,6)] text-white mb-0 p-5 rounded-[20px] flex-1 overflow-hidden">
                                    <h3 className="text-xl text-white mb-[15px]">Subcontractor Portal</h3>
                                    <ul className="list-none p-0 flex flex-col gap-2.5">
                                        <li className="text-white text-base flex items-start">
                                            <span className="material-symbols-outlined text-white mr-2 shrink-0">check_circle</span>
                                            Easy upload of load tickets, tons, and materials
                                        </li>
                                        <li className="text-white text-base flex items-start">
                                            <span className="material-symbols-outlined text-white mr-2 shrink-0">check_circle</span>
                                            Full visibility into completed loads and earnings
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 max-lg:hidden">
                            <img
                                src="assets/Frame 427320587 (1).svg"
                                alt="Subcontractor Interface"
                                className="w-full h-full object-cover rounded-[20px]"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
