import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { signup, SignupData } from '../services/api';

const slider1 = '/assets/loginpage-slider-1.svg';
const slider2 = '/assets/loginpage-slider-2.svg';

interface FormData {
    firstName: string;
    lastName: string;
    countryCode: string;
    number: string;
    email: string;
    businessName: string;
    countryState: string;
    city: string;
    password: string;
    confirmPassword: string;
}

export default function Signup() {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        countryCode: '+1',
        number: '',
        email: '',
        businessName: '',
        countryState: '',
        city: '',
        password: '',
        confirmPassword: '',
    });

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [slider1, slider2];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'countryCode') {
            const sanitizedValue = value.replace(/[^0-9+]/g, '');
            setFormData(prevState => ({ ...prevState, [name]: sanitizedValue }));
        } else if (name === 'number') {
            const sanitizedValue = value.replace(/[^0-9]/g, '');
            setFormData(prevState => ({ ...prevState, [name]: sanitizedValue }));
        } else {
            setFormData(prevState => ({ ...prevState, [name]: value }));
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setPasswordError(false);

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords don't match");
            return;
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/;
        if (!passwordRegex.test(formData.password)) {
            setPasswordError(true);
            return;
        }
        setIsLoading(true);

        try {
            const { confirmPassword, ...signupData } = formData;
            const fullPhoneNumber = `${signupData.countryCode}${signupData.number}`;

            const dataToSend: SignupData = {
                ...signupData,
                phoneNumber: fullPhoneNumber,
            };

            const data = await signup(dataToSend);

            console.log('Signup successful:', data);
            alert('Signup successful! Please log in.');
            // Navigate to login or just let the user click the link

        } catch (err) {
            setError((err as Error).message || 'An unexpected error occurred during signup.');
            console.error('Signup failed:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    return (
        <div className="grid grid-cols-2 bg-primary-blue h-screen max-lg:grid-cols-1 max-md:grid-cols-1">
            <div className="hidden lg:flex flex-col items-center justify-center p-[50px] overflow-hidden order-first">
                <div className="m-5 z-10">
                    <img src="/assets/Frame 6.svg" alt="LoadTally Logo" className="w-[150px] mb-5 bg-white rounded-[30px] p-2.5" />
                    <h2 className="text-xl font-medium text-white mb-1">
                        Dump truck fleets, sand haulers, and Subcontractors track loads, drivers, dispatches, inspections, and client billing efficiently.
                    </h2>
                </div>
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide}
                        alt={`Slide ${index + 1}`}
                        className={`max-w-[500px] h-auto object-contain transition-opacity duration-800 ${index === currentSlide ? 'opacity-100 block' : 'opacity-0 hidden'
                            }`}
                    />
                ))}
                <div className="flex gap-3 mt-5">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`w-[5px] h-[5px] rounded-full cursor-pointer transition-all duration-300 ${index === currentSlide ? 'bg-teal scale-[1.2]' : 'bg-[#94a3b8]'
                                }`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>
            <div className="p-5 flex justify-center items-center flex-1 max-md:p-5 max-lg:p-8">
                <div className="max-w-[600px] bg-white rounded-[16px] shadow-[0_10px_25px_rgba(0,0,0,0.05),0_20px_48px_rgba(0,0,0,0.05)] p-8 transition-transform duration-300 hover:-translate-y-[5px] max-md:p-6 max-lg:p-8">
                    <div className="flex flex-row items-center justify-center gap-4 mb-6">
                        <img src="/assets/Frame 6.svg" alt="LoadTally Logo" className="w-[120px]" />
                        <h1 className="text-xl font-medium text-primary-blue">Create a New Account</h1>
                    </div>

                    <form className="mb-4" onSubmit={handleSubmit}>
                        <div className="flex gap-4 max-md:flex-col max-md:gap-0">
                            <div className="flex-1 mb-4">
                                <label htmlFor="firstName" className="block text-sm font-semibold text-[#475569] mb-1">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className="min-w-[200px] max-w-[300px] py-1.5 px-4 pr-10 text-sm border-[1.5px] border-[#e2e8f0] rounded-[30px] bg-[#f8fafc] transition-all duration-200 text-black placeholder:text-[#94a3b8] focus:outline-none focus:border-[#3b82f6] focus:bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] max-md:text-sm max-md:py-3 max-md:px-[15px] max-md:pr-[35px]"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="flex-1 mb-4">
                                <label htmlFor="lastName" className="block text-sm font-semibold text-[#475569] mb-1">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className="min-w-[200px] max-w-[300px] py-1.5 px-4 pr-10 text-sm border-[1.5px] border-[#e2e8f0] rounded-[30px] bg-[#f8fafc] transition-all duration-200 text-black placeholder:text-[#94a3b8] focus:outline-none focus:border-[#3b82f6] focus:bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] max-md:text-sm max-md:py-3 max-md:px-[15px] max-md:pr-[35px]"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex gap-4 max-md:flex-col max-md:gap-0">
                            <div className="flex-1 mb-4">
                                <label htmlFor="number" className="block text-sm font-semibold text-[#475569] mb-1">Phone Number</label>
                                <div className="flex items-center">
                                    <input
                                        type="tel"
                                        id="countryCode"
                                        name="countryCode"
                                        value={formData.countryCode}
                                        onChange={handleChange}
                                        className="flex-[0_0_70px] w-[70px] py-1.5 px-4 text-sm border-[1.5px] border-[#e2e8f0] rounded-l-[30px] border-r-0 bg-[#f8fafc] transition-all duration-200 text-black placeholder:text-[#94a3b8] focus:outline-none focus:border-[#3b82f6] focus:bg-white"
                                        placeholder="+1"
                                    />
                                    <input
                                        type="tel"
                                        id="number"
                                        name="number"
                                        className="flex-1 py-1.5 px-4 text-sm border-[1.5px] border-[#e2e8f0] rounded-r-[30px] bg-[#f8fafc] transition-all duration-200 text-black placeholder:text-[#94a3b8] focus:outline-none focus:border-[#3b82f6] focus:bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
                                        placeholder="Phone number"
                                        value={formData.number}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex-1 mb-4">
                                <label htmlFor="email" className="block text-sm font-semibold text-[#475569] mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="min-w-[200px] max-w-[300px] py-1.5 px-4 pr-10 text-sm border-[1.5px] border-[#e2e8f0] rounded-[30px] bg-[#f8fafc] transition-all duration-200 text-black placeholder:text-[#94a3b8] focus:outline-none focus:border-[#3b82f6] focus:bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="businessName" className="block text-sm font-semibold text-[#475569] mb-1">Business Name</label>
                            <input
                                type="text"
                                id="businessName"
                                name="businessName"
                                className="w-full py-1.5 px-4 pr-10 text-sm border-[1.5px] border-[#e2e8f0] rounded-[30px] bg-[#f8fafc] transition-all duration-200 text-black placeholder:text-[#94a3b8] focus:outline-none focus:border-[#3b82f6] focus:bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
                                placeholder="Business Name"
                                value={formData.businessName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="flex gap-4 max-md:flex-col max-md:gap-0">
                            <div className="flex-1 mb-4">
                                <label htmlFor="countryState" className="block text-sm font-semibold text-[#475569] mb-1">Country/State</label>
                                <input
                                    type="text"
                                    id="countryState"
                                    name="countryState"
                                    className="min-w-[150px] max-w-[250px] py-1.5 px-4 pr-10 text-sm border-[1.5px] border-[#e2e8f0] rounded-[30px] bg-[#f8fafc] transition-all duration-200 text-black placeholder:text-[#94a3b8] focus:outline-none focus:border-[#3b82f6] focus:bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
                                    placeholder="Country/State"
                                    value={formData.countryState}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex-1 mb-4">
                                <label htmlFor="city" className="block text-sm font-semibold text-[#475569] mb-1">City</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    className="min-w-[150px] max-w-[250px] py-1.5 px-4 pr-10 text-sm border-[1.5px] border-[#e2e8f0] rounded-[30px] bg-[#f8fafc] transition-all duration-200 text-black placeholder:text-[#94a3b8] focus:outline-none focus:border-[#3b82f6] focus:bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
                                    placeholder="City"
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="mb-1 relative">
                            <label htmlFor="password" className="block text-sm font-semibold text-[#475569] mb-1">Password</label>
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                id="password"
                                name="password"
                                className="w-full py-1.5 px-4 pr-10 text-sm border-[1.5px] border-[#e2e8f0] rounded-[30px] bg-[#f8fafc] transition-all duration-200 text-black placeholder:text-[#94a3b8] focus:outline-none focus:border-[#3b82f6] focus:bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                className="absolute top-[68%] right-[15px] -translate-y-1/2 bg-none border-none cursor-pointer text-[#94a3b8] outline-none"
                                onClick={togglePasswordVisibility}
                            >
                                {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        {passwordError && (
                            <p className="text-[10px] text-[#ef4444] leading-tight mb-4 px-2">
                                Password must be at least 6 characters long and contain at least one uppercase letter, one number, and one special character
                            </p>
                        )}

                        <div className="mb-4 relative">
                            <label htmlFor="confirmPassword" className="block text-sm font-semibold text-[#475569] mb-1">Confirm Password</label>
                            <input
                                type={confirmPasswordVisible ? 'text' : 'password'}
                                id="confirmPassword"
                                name="confirmPassword"
                                className="w-full py-1.5 px-4 pr-10 text-sm border-[1.5px] border-[#e2e8f0] rounded-[30px] bg-[#f8fafc] transition-all duration-200 text-black placeholder:text-[#94a3b8] focus:outline-none focus:border-[#3b82f6] focus:bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                className="absolute top-[68%] right-[15px] -translate-y-1/2 bg-none border-none cursor-pointer text-[#94a3b8] outline-none"
                                onClick={toggleConfirmPasswordVisibility}
                            >
                                {confirmPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>

                        {error && <p className="text-[#ef4444] text-sm text-center mb-3">{error}</p>}

                        <button
                            type="submit"
                            className="w-full h-[50px] flex items-center justify-center bg-teal text-white border-none rounded-[30px] text-base font-semibold cursor-pointer transition-all duration-300 shadow-[0_4px_12px_rgba(59,130,246,0.25)] hover:bg-[#30938f] hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(59,130,246,0.35)] disabled:opacity-70 disabled:cursor-not-allowed max-md:text-sm max-md:h-[50px]"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Signing up...' : 'Sign Up'}
                        </button>
                    </form>

                    <div className="text-center pt-4 border-t border-[#f1f5f9]">
                        <p className="text-[14px] text-[#64748b] max-md:text-sm">
                            Already have an account?
                            <Link
                                to="/login"
                                className="bg-none border-none text-[#3b82f6] font-bold text-[14px] ml-2 cursor-pointer py-1 px-2 rounded transition-all duration-200 hover:text-[#2563eb] hover:bg-[#f1f5f9] max-md:text-sm"
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
