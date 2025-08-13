"use client";

import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";
import { authApi, tokenManager, User } from "@/lib/api";

// ==============================
// Type Definitions
// ==============================

export interface RegisterData {
  name: string;
  email: string;
  phone?: string;
  password: string;
  confirmPassword: string;
}

export interface ProfileData {
  name?: string;
  phone?: string;
  birth_date?: string;
  address?: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (data: ProfileData) => Promise<void>;
  isAuthenticated: boolean;
}

// ==============================
// Context & Provider
// ==============================

export const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Cek autentikasi saat komponen mount
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = tokenManager.getToken();
        const cachedUser = tokenManager.getUser();

        if (token && cachedUser) {
          const isTokenValid = await authApi.verifyToken();
          if (isTokenValid) {
            setUser(cachedUser);
          } else {
            tokenManager.removeToken();
          }
        }
      } catch (error) {
        console.error("Authentication initialization error:", error);
        tokenManager.removeToken();
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // Fungsi login
  const login = async (email: string, password: string): Promise<void> => {
    try {
      setLoading(true);
      const authResponse = await authApi.login({ email, password });
      setUser(authResponse.user);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Fungsi register
  const register = async (data: RegisterData): Promise<void> => {
    try {
      setLoading(true);
      const authResponse = await authApi.register(data);
      setUser(authResponse.user);
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Fungsi logout
  const logout = async (): Promise<void> => {
    try {
      await authApi.logout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setUser(null);
    }
  };

  // Fungsi update profile
  const updateProfile = async (data: ProfileData): Promise<void> => {
    try {
      const updatedUser = await authApi.updateProfile(data);
      setUser(updatedUser);
    } catch (error) {
      console.error("Profile update error:", error);
      throw error;
    }
  };

  // Nilai context
  const authStateValue: AuthState = {
    user,
    loading,
    login,
    register,
    logout,
    updateProfile,
    isAuthenticated: Boolean(user),
  };

  return (
    <AuthContext.Provider value={authStateValue}>
      {children}
    </AuthContext.Provider>
  );
}

// ==============================
// Custom Hook
// ==============================

export function useAuth(): AuthState {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider component");
  }

  return context;
}
