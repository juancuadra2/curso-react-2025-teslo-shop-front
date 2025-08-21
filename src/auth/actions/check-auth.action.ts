import { tesloApi } from "@/api/teslo-api";
import type { AuthResponse } from "@/interfaces/auth.response";

export const checkAuthAction = async () => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token found');

    try {
        const { data } = await tesloApi.get<AuthResponse>('/auth/check-status');

        localStorage.setItem('token', data.token);

        return data;
    } catch (error) {
        localStorage.removeItem('token');
        throw error;
    }
}