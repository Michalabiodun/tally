export default function CTA() {
    return (
        <section className="py-20 px-20 bg-white max-md:py-[60px] max-md:px-5 max-sm:py-10 max-sm:px-5">
            <div className="max-w-[1400px] mx-auto grid grid-cols-2 gap-20 items-center bg-[#f3f3f3] rounded-[20px] p-[60px] max-lg:grid-cols-1 max-lg:gap-[60px] max-lg:p-10 max-md:grid-cols-[1fr_0.8fr] max-md:gap-[30px] max-md:p-[30px] max-sm:grid-cols-1 max-sm:text-center overflow-hidden">
                <div className="flex flex-col gap-[30px]">
                    <h2 className="text-[40px] font-bold text-dark-gray leading-[1.3] max-lg:text-[32px] max-md:text-2xl">
                        Start Running Your Hauling Operation on Autopilot.
                    </h2>
                    <p className="text-lg leading-[1.6] text-dark-gray max-md:text-base">
                        Hauling operations software for dispatching, routing, load tracking and automated
                        billing.
                    </p>
                </div>
                <div className="flex justify-center items-center max-md:justify-self-center">
                    <img
                        src="assets/Group 325.svg"
                        alt="Hauling Operations"
                        className="max-w-full rounded-[20px]"
                    />
                </div>
            </div>
        </section>
    );
}
