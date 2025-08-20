import type { User } from '@/interfaces/user.interface'
import { create } from 'zustand'
import { LoginAction } from '../actions/login-action'

type AuthState = {
    // Properties
    user: User | null;
    token: string | null;

    // Getters

    // Actions
    login: (login: string, password: string) => Promise<boolean>;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
    //Implementación del Store
    user: null,
    token: null,

    login: async (email: string, password: string) => {
        try {
            const data = await LoginAction(email, password);
            localStorage.setItem("token", data.token);

            set({ user: data.user, token: data.token });

            return true;
        } catch (error) {
            console.log(error);
            set({ user: null, token: null });
            localStorage.removeItem("token");
            return false;
        }
    },
    logout: () => {
        localStorage.removeItem("token");
        set({ user: null, token: null });
    }
}))
