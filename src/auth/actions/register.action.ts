import { tesloApi } from "@/api/teslo-api";
import type { AuthResponse } from "@/interfaces/auth.response";

export const registerAction = async(
    fullName: string,
    email: string,
    password: string
) => {
    try {
        const { data } = await tesloApi.post<AuthResponse>('/auth/register', {
            fullName,
            email,
            password
        });
        return data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
}