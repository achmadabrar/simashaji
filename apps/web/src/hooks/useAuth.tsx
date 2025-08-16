"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  birth_date?: string;
  address?: string;
  profile_image?: string;
  membership_type: string;
  points: number;
  rating: number;
  total_bookings: number;
  joined_at: string;
  last_active?: string;
  is_email_verified?: boolean;
}

interface RegisterData {
  name: string;
  email: string;
  phone?: string;
  password: string;
  confirmPassword: string;
}

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

  const clearError = () => {
    setError(null);
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      console.log("Attempting login with:", { email });

      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      console.log("Login response status:", response.status);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({
          success: false,
          message: `HTTP error! status: ${response.status}`,
        }));
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      console.log("Login successful:", {
        success: data.success,
        user: data.data.user.email,
      });

      if (data.success) {
        // Store auth data
        localStorage.setItem("auth_token", data.data.token);
        localStorage.setItem("user_data", JSON.stringify(data.data.user));

        // Redirect to user dashboard
        router.push("/users/user");
      } else {
        throw new Error(data.message || "Login failed");
      }
    } catch (err: any) {
      console.error("Login error:", err);
      setError(err.message || "Terjadi kesalahan saat login");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: RegisterData) => {
    setLoading(true);
    setError(null);

    try {
      console.log("Attempting registration with:", {
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("Register response status:", response.status);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({
          success: false,
          message: `HTTP error! status: ${response.status}`,
        }));
        throw new Error(errorData.message || "Registration failed");
      }

      const result = await response.json();
      console.log("Registration successful:", {
        success: result.success,
        user: result.data.user.email,
      });

      if (result.success) {
        // Store auth data
        localStorage.setItem("auth_token", result.data.token);
        localStorage.setItem("user_data", JSON.stringify(result.data.user));

        // Redirect to user dashboard
        router.push("/user");
      } else {
        throw new Error(result.message || "Registration failed");
      }
    } catch (err: any) {
      console.error("Registration error:", err);
      setError(err.message || "Terjadi kesalahan saat registrasi");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    login,
    register,
    clearError,
  };
};
