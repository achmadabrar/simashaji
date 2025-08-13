// apps/web/src/lib/api.ts
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  birth_date?: string;
  address?: string;
  profile_image?: string;
  membership_type: "REGULAR" | "PREMIUM" | "VIP";
  points: number;
  rating: number;
  total_bookings: number;
  joined_at: string;
  last_active: string;
  is_email_verified: boolean;
}

export interface AuthData {
  user: User;
  token: string;
  tokenType: string;
}

// Token management
const tokenManagerObj = {
  getToken: (): string | null => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("simashaji_token");
  },

  setToken: (token: string): void => {
    if (typeof window === "undefined") return;
    localStorage.setItem("simashaji_token", token);
  },

  removeToken: (): void => {
    if (typeof window === "undefined") return;
    localStorage.removeItem("simashaji_token");
    localStorage.removeItem("simashaji_user");
  },

  getUser: (): User | null => {
    if (typeof window === "undefined") return null;
    const user = localStorage.getItem("simashaji_user");
    return user ? JSON.parse(user) : null;
  },

  setUser: (user: User): void => {
    if (typeof window === "undefined") return;
    localStorage.setItem("simashaji_user", JSON.stringify(user));
  },

  isAuthenticated: (): boolean => {
    return !!tokenManagerObj.getToken();
  },
};

export { tokenManagerObj as tokenManager };

// API request wrapper with auth
const apiRequest = async <T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> => {
  const token = tokenManagerObj.getToken();

  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (token) {
    defaultHeaders.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      // Handle token expiration
      if (response.status === 401 && data.message?.includes("expired")) {
        tokenManagerObj.removeToken();
        if (typeof window !== "undefined") {
          window.location.href = "/auth";
        }
      }
      throw new Error(data.message || `HTTP error! status: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
};

// Auth API functions
const authApiObj = {
  register: async (data: {
    name: string;
    email: string;
    phone?: string;
    password: string;
    confirmPassword: string;
  }): Promise<AuthData> => {
    const response = await apiRequest<AuthData>("/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (response.success && response.data) {
      tokenManagerObj.setToken(response.data.token);
      tokenManagerObj.setUser(response.data.user);
    }

    return response.data!;
  },

  login: async (data: {
    email: string;
    password: string;
  }): Promise<AuthData> => {
    const response = await apiRequest<AuthData>("/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (response.success && response.data) {
      tokenManagerObj.setToken(response.data.token);
      tokenManagerObj.setUser(response.data.user);
    }

    return response.data!;
  },

  logout: async (): Promise<void> => {
    try {
      await apiRequest("/auth/logout", {
        method: "POST",
      });
    } finally {
      tokenManagerObj.removeToken();
    }
  },

  getProfile: async (): Promise<User> => {
    const response = await apiRequest<{ user: User }>("/auth/profile");
    return response.data!.user;
  },

  updateProfile: async (data: {
    name?: string;
    phone?: string;
    birth_date?: string;
    address?: string;
  }): Promise<User> => {
    const response = await apiRequest<{ user: User }>("/auth/profile", {
      method: "PUT",
      body: JSON.stringify(data),
    });

    if (response.success && response.data) {
      tokenManagerObj.setUser(response.data.user);
    }

    return response.data!.user;
  },

  verifyToken: async (): Promise<boolean> => {
    try {
      await apiRequest("/auth/verify");
      return true;
    } catch {
      return false;
    }
  },
};

export { authApiObj as authApi };
export { apiRequest };
