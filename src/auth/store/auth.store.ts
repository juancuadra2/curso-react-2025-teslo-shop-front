import type { User } from '@/interfaces/user.interface'
import { create } from 'zustand'
import { LoginAction } from '../actions/login-action'
import { checkAuthAction } from '../actions/check-auth.action';
import { registerAction } from '../actions/register.action';

type AuthStatus = 'authenticated' | 'unauthenticated' | 'checking';

type AuthState = {
    // Properties
    user: User | null;
    token: string | null;
    authStatus: AuthStatus;

    // Getters
    isAdmin: () => boolean;

    // Actions
    login: (login: string, password: string) => Promise<boolean>;
    logout: () => void;
    checkAuthStatus: () => Promise<boolean>;
    register: (fullName: string, email: string, password: string) => Promise<boolean>;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
    //Implementación del Store
    user: null,
    token: null,
    authStatus: 'checking',

    isAdmin: () => {
        const roles = get().user?.roles || [];
        return roles.includes('admin');
    },

    login: async (email: string, password: string) => {
        try {
            set({ authStatus: 'checking' });
            const data = await LoginAction(email, password);
            localStorage.setItem("token", data.token);

            set({ user: data.user, token: data.token, authStatus: 'authenticated' });
            return true;
        } catch (error) {
            console.log(error);
            set({ user: null, token: null, authStatus: 'unauthenticated' });
            localStorage.removeItem("token");
            return false;
        }
    },

    logout: () => {
        localStorage.removeItem("token");
        set({ user: null, token: null, authStatus: 'unauthenticated' });
    },

    checkAuthStatus: async () => {
        try {
            const { user, token } = await checkAuthAction();
            set({ user, token, authStatus: 'authenticated' });
            return true;
        } catch (error) {
            console.error(error);
            set({ user: undefined, token: undefined, authStatus: 'unauthenticated' });
            return false;
        }
    },

    register: async (fullName: string, email: string, password: string) => {
        try {
            const data = await registerAction(fullName, email, password);
            localStorage.setItem("token", data.token);

            set({ user: data.user, token: data.token, authStatus: 'authenticated' });
            return true;
        } catch (error) {
            console.log(error);
            set({ user: null, token: null, authStatus: 'unauthenticated' });
            localStorage.removeItem("token");
            return false;
        }
    }
}))
