interface FooterSections {
    product: string[];
    company: string[];
    resources: string[];
}

export default function Footer() {
    const footerSections: FooterSections = {
        product: ['Features', 'Pricing', 'Demo', 'App'],
        company: ['About', 'Contact', 'Careers', 'Partners'],
        resources: ['FAQ', 'Help', 'Support', 'Privacy'],
    };

    return (
        <footer className="bg-linear-to-b from-[#FFFDFD_40.97%] to-[#F4F4F4_67.96%] py-[60px] px-20 max-md:py-10 max-md:px-5">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-10">
                <div className="grid grid-cols-[auto_1fr] gap-[200px] items-start max-lg:grid-cols-1 max-lg:gap-[60px] max-md:gap-10">
                    <div className="flex flex-col gap-[15px]">
                        <div className="w-[200px]">
                            <img className="w-200" src="/assets/Frame 6.svg" alt="LoadTally Logo" />
                        </div>
                        <p className="text-base font-medium text-dark-gray">Hauling Runs on LoadTally</p>
                    </div>

                    <div className="grid grid-cols-3 gap-20 max-lg:grid-cols-2 max-lg:gap-10 max-md:grid-cols-3 max-md:gap-[30px]">
                        <div>
                            <h4 className="text-xl font-normal text-dark-gray mb-[15px]">Product</h4>
                            <ul className="list-none flex flex-col gap-3">
                                {footerSections.product.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-sm text-[#6E706F] transition-colors duration-300 hover:text-dark-gray">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xl font-normal text-dark-gray mb-[15px]">Company</h4>
                            <ul className="list-none flex flex-col gap-3">
                                {footerSections.company.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-sm text-[#6E706F] transition-colors duration-300 hover:text-dark-gray">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xl font-normal text-dark-gray mb-[15px]">Resources</h4>
                            <ul className="list-none flex flex-col gap-3">
                                {footerSections.resources.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-sm text-[#6E706F] transition-colors duration-300 hover:text-dark-gray">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center pt-[30px] border-t border-black/10 max-md:flex-col max-md:gap-5 max-md:text-center">
                    <p className="text-sm font-bold text-dark-gray">
                        © {new Date().getFullYear()} LoadTally. All rights reserved.
                    </p>
                    <div className="flex gap-5 max-md:justify-center">
                        <a href="#" className="flex items-center justify-center w-10 h-10 bg-transparent text-dark-gray text-sm font-semibold transition-all duration-300 hover:bg-dark-gray hover:text-white hover:-translate-y-[3px]">
                            <img src="/assets/linkedin.svg" alt="linkedIn" />
                        </a>
                        <a href="#" className="flex items-center justify-center w-10 h-10 bg-transparent text-dark-gray text-sm font-semibold transition-all duration-300 hover:bg-dark-gray hover:text-white hover:-translate-y-[3px]">
                            <img src="/assets/instagram.svg" alt="instagram" />
                        </a>
                        <a href="#" className="flex items-center justify-center w-10 h-10 bg-transparent text-dark-gray text-sm font-semibold transition-all duration-300 hover:bg-dark-gray hover:text-white hover:-translate-y-[3px]">
                            <img src="/assets/facebook.svg" alt="facebook" />
                        </a>
                        <a href="#" className="flex items-center justify-center w-10 h-10 bg-transparent text-dark-gray text-sm font-semibold transition-all duration-300 hover:bg-dark-gray hover:text-white hover:-translate-y-[3px]">
                            <img src="/assets/x.svg" alt="x" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
