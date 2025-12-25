import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { login } from '../services/api';

const slider1 = '/assets/loginpage-slider-1.svg';
const slider2 = '/assets/loginpage-slider-2.svg';

export default function LoginPage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [slider1, slider2];

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setPasswordError(false);

        if (!email.trim() || !password.trim()) {
            setError('Please enter both email and password');
            return;
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordError(true);
            return;
        }

        setIsLoading(true);

        try {
            const credentials = { email, password };
            const data = await login(credentials);

            console.log('Login successful:', data);
            alert(`Welcome back, ${data.user.email}!`);
        } catch (err) {
            setError((err as Error).message || 'An unexpected error occurred during login.');
            console.error('Login failed:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleLogin = () => {
        setIsLoading(true);
        console.log('Continue with Google clicked');

        setTimeout(() => {
            setIsLoading(false);
            alert('Google login would be implemented here');
        }, 1500);
    };

    const handleAppleLogin = () => {
        setIsLoading(true);
        console.log('Continue with Apple clicked');

        setTimeout(() => {
            setIsLoading(false);
            alert('Apple login would be implemented here');
        }, 1500);
    };

    const handleForgotPassword = () => {
        alert('Password reset functionality would be implemented here');
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="grid grid-cols-2 bg-primary-blue h-screen max-lg:grid-cols-1 max-md:grid-cols-1">
            {/* Image Container with Slider */}
            <div className="hidden lg:flex flex-col items-center justify-center p-[50px] overflow-hidden order-first">
                <div className="m-5 z-10">
                    <img src="/assets/Frame 6.svg" alt="LoadTally Logo" className="w-[150px] mb-5 bg-white rounded-[30px] p-2.5" />
                    <h2 className="text-xl font-medium text-white mb-2">
                        Dump truck fleets, sand haulers, and
                        Subcontractors track loads, drivers,
                        dispatches, inspections, and client billing
                        efficiently.
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

                {/* Manual Dots Control */}
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

            <div className="p-10 flex justify-center items-center flex-1 max-md:p-5 max-lg:p-8">
                <div className="max-w-[500px] bg-white rounded-[16px] shadow-[0_10px_25px_rgba(0,0,0,0.05),0_20px_48px_rgba(0,0,0,0.05)] p-8 transition-transform duration-300 hover:-translate-y-[5px] max-md:p-6">
                    <div className="flex flex-col items-center mb-6 max-w-[400px] mx-auto">
                        <img src="/assets/Frame 6.svg" alt="LoadTally Logo" className="w-[150px] mb-4" />
                        <h1 className="text-xl font-medium text-primary-blue text-center">Welcome! We are thrilled to have you back</h1>
                    </div>

                    <form className="mb-5" onSubmit={handleSubmit}>
                        <div className="max-w-[400px] mx-auto flex flex-col gap-5">
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-[#1a1a1a] mb-1.5">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="min-w-[320px] max-w-[400px] py-3.5 px-6 text-sm border-[1.5px] border-[#e2e8f0] rounded-[30px] bg-white transition-all duration-200 text-black placeholder:text-[#cbd5e1] focus:outline-none focus:border-teal focus:shadow-[0_0_0_3px_rgba(58,166,163,0.1)]"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="relative mb-1">
                                <label htmlFor="password" className="block text-sm font-semibold text-[#1a1a1a] mb-1.5">Password</label>
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    id="password"
                                    className="min-w-[320px] max-w-[400px] py-3.5 px-6 pr-12 text-sm border-[1.5px] border-[#e2e8f0] rounded-[30px] bg-white transition-all duration-200 text-black placeholder:text-[#cbd5e1] focus:outline-none focus:border-teal focus:shadow-[0_0_0_3px_rgba(58,166,163,0.1)]"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute top-[48px] right-[30px] -translate-y-1/2 bg-none border-none cursor-pointer text-[#94a3b8] outline-none hover:text-teal"
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

                            <div className="flex justify-between items-center px-1">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="remember"
                                        checked={rememberPassword}
                                        onChange={() => setRememberPassword(!rememberPassword)}
                                        className="appearance-none w-[18px] h-[18px] mr-2 border-[1.5px] border-[#cbd5e1] rounded cursor-pointer relative outline-none checked:bg-teal checked:border-teal checked:bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22white%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M16.707%205.293a1%201%200%20010%201.414l-8%208a1%201%200%2001-1.414%200l-4-4a1%201%200%20011.414-1.414L8%2012.586l7.293-7.293a1%201%200%20011.414%200z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] checked:bg-center checked:bg-no-repeat"
                                    />
                                    <label htmlFor="remember" className="text-sm text-[#64748b] cursor-pointer">Remember Password</label>
                                </div>
                                <button
                                    type="button"
                                    className="bg-none border-none text-[#1a1a1a] text-sm font-medium cursor-pointer transition-colors duration-200 hover:text-teal"
                                    onClick={handleForgotPassword}
                                >
                                    Forgot Password
                                </button>
                            </div>

                            {error && <p className="text-[#ef4444] text-xs text-center">{error}</p>}

                            <button
                                type="submit"
                                className="min-w-[320px] max-w-[400px] h-[52px] flex items-center justify-center bg-teal text-white border-none rounded-[30px] text-base font-semibold cursor-pointer transition-all duration-300 shadow-[0_4px_12px_rgba(58,166,163,0.25)] hover:bg-[#30938f] hover:-translate-y-0.5"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Logging in...' : 'Login'}
                            </button>
                        </div>
                    </form>

                    <div className="flex flex-row gap-4 mb-6 max-w-[400px] mx-auto">
                        <button
                            className="flex-1 h-[52px] flex items-center justify-center rounded-[30px] text-[13px] font-semibold cursor-pointer transition-all duration-200 bg-[#f4f4f4] text-[#475569] border border-transparent hover:border-[#e2e8f0] hover:bg-white hover:-translate-y-0.5"
                            onClick={handleAppleLogin}
                            disabled={isLoading}
                        >
                            <img src="/assets/apple-logo.svg" alt="Apple logo" className="mr-2 w-5 h-5" />
                            Continue with Apple
                        </button>
                        <button
                            className="flex-1 h-[52px] flex items-center justify-center rounded-[30px] text-[13px] font-semibold cursor-pointer transition-all duration-200 bg-[#f4f4f4] text-[#475569] border border-transparent hover:border-[#e2e8f0] hover:bg-white hover:-translate-y-0.5"
                            onClick={handleGoogleLogin}
                            disabled={isLoading}
                        >
                            <img src="/assets/google-logo.svg" alt="Google logo" className="mr-2 w-5 h-5" />
                            Continue with Google
                        </button>
                    </div>

                    <div className="text-center pt-6 border-t border-[#f1f5f9] max-w-[400px] mx-auto">
                        <p className="text-[14px] text-[#64748b]">
                            Don't have an Account?
                            <Link
                                to="/signup"
                                className="bg-none border-none text-[#1a1a1a] font-bold text-[14px] ml-2 cursor-pointer transition-colors duration-200 hover:text-teal"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
