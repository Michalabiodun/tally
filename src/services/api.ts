// src/services/api.ts

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

interface User {
    email: string;
    id?: string;
    firstName?: string;
    lastName?: string;
}

interface LoginResponse {
    token: string;
    user: User;
}

interface SignupResponse {
    message: string;
    user?: User;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface SignupData {
    firstName: string;
    lastName: string;
    countryCode: string;
    number: string;
    email: string;
    businessName: string;
    countryState: string;
    city: string;
    password: string;
    phoneNumber?: string;
}

const handleResponse = async <T>(response: Response): Promise<T> => {
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({
            message: 'An unknown error occurred. The server did not provide a valid error message.'
        }));
        throw new Error(errorData.message || 'Server responded with an error, but no message was provided.');
    }
    return response.json();
};

export const signup = async (userData: SignupData): Promise<SignupResponse> => {
    const response = await fetch(`${API_BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    return handleResponse<SignupResponse>(response);
};

export const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });
    return handleResponse<LoginResponse>(response);
};
