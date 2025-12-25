interface Company {
    name: string;
    logo: string;
}

export default function Trusted() {
    const companies: Company[] = [
        { name: 'Rhino', logo: '/assets/rhino 1.svg' },
        { name: 'All Pro', logo: '/assets/all pro 1.svg' },
        { name: 'Bird', logo: '/assets/bird 1.svg' },
        { name: 'Helo', logo: '/assets/helo 1.svg' },
        { name: 'ERA', logo: '/assets/era 1.svg' },
    ];

    return (
        <section className="bg-dark-gray text-white py-20 px-5 ml-[100px] mr-32 rounded-[30px] mt-10 max-lg:mx-10 max-md:py-10 max-md:px-[15px] max-md:mx-5 max-md:mt-[30px] max-md:rounded-[20px]">
            <div className="max-w-[1500px] mx-auto text-center flex flex-col items-center gap-10">
                <h2 className="text-[30px] leading-[1.3] font-light max-w-[1000px] max-lg:text-[28px] max-md:text-2xl max-sm:text-xl">
                    Trusted by <span className="font-semibold">Hauling Fleets</span> <span>and </span>
                    <span className="font-semibold">Material Placement Companies</span>
                </h2>
                <p className="text-xl text-white/80 max-w-[800px] max-md:text-base">
                    Join over 1000+ trusting our platform for seamless collaboration and quality of service
                </p>

                <div className="flex flex-col items-center gap-[30px] w-full">
                    <div className="flex justify-center items-center gap-[30px] flex-wrap max-w-[1000px] max-md:gap-[15px]">
                        {companies.map((company) => (
                            <div
                                key={company.name}
                                className="bg-white rounded-[20px] p-[15px] flex justify-center items-center min-w-[130px] min-h-[100px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_12px_24px_rgba(0,0,0,0.2)] max-md:min-w-[110px] max-md:min-h-[80px] max-sm:min-w-[80px] max-sm:min-h-[60px] max-sm:p-2.5 overflow-hidden"
                            >
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    className="max-w-[90%] max-h-[90%] object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
