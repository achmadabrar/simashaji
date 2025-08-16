"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import type { CredentialResponse } from "@react-oauth/google";
import logoSimashaji from "../../../assets/logo_simashaji.png";

type AuthGoogleResponse = {
  success: boolean;
  token: string;
  user?: {
    id: string;
    email: string;
    name?: string;
    picture?: string;
  };
};

type GoogleUserinfo = {
  sub: string;
  name?: string;
  given_name?: string;
  family_name?: string;
  picture?: string;
  email: string;
  email_verified?: boolean;
  locale?: string;
};

import {
  FormData,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ErrorAlert,
  SuccessAlert,
  AuthHeader,
  BackButton,
} from "../../../components/AuthComponents";

export default function LoginPage() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const { login, loading, error, clearError } = useAuth();
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear errors when user starts typing
    if (localError) setLocalError(null);
    if (error) clearError();
  };

  const validateForm = (): boolean => {
    if (!formData.email || !formData.password) {
      setLocalError("Email dan password wajib diisi!");
      return false;
    }

    if (!formData.email.includes("@")) {
      setLocalError("Format email tidak valid!");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await login(formData.email, formData.password);
      setSuccessMessage("Login berhasil! Sedang mengarahkan...");
    } catch (err: any) {
      console.error("Login failed:", err.message);
    }
  };

  const handleGoogleLoginSuccess = async (
    credentialResponse: CredentialResponse
  ) => {
    try {
      const token = credentialResponse?.credential;
      if (!token) {
        setLocalError("Token Google tidak ditemukan.");
        return;
      }

      const { data } = await axios.post<AuthGoogleResponse>(
        "http://localhost:5000/api/auth/google",
        { token }
      );

      if (data.success) {
        console.log("Login Google berhasil:", data);
        localStorage.setItem("token", data.token);
        router.push("/dashboard");
      } else {
        setLocalError("Login Google gagal.");
      }
    } catch (err) {
      console.error("Login Google gagal:", err);
      setLocalError("Terjadi kesalahan saat login Google.");
    }
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
          }
        );

        console.log("Google User:", res.data);
        // TODO: Kirim ke backend untuk login/registrasi
      } catch (err) {
        console.error("Login Google error:", err);
      }
    },
    onError: (err) => console.error("Google Login Failed:", err),
  });

  const backToHome = () => {
    router.push("/");
  };

  const displayError = localError || error;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <BackButton onClick={backToHome} disabled={loading} />

        {/* Login Card */}
        <div className="bg-white rounded-2xl text-black shadow-xl p-8">
          <AuthHeader
            title="Masuk ke Simashaji"
            subtitle="Selamat datang kembali! Silakan masuk ke akun Anda."
            logoSrc={logoSimashaji}
          />

          {/* Success Message */}
          {successMessage && <SuccessAlert message={successMessage} />}

          {/* Error Alert */}
          {displayError && (
            <ErrorAlert
              message={displayError}
              onClose={() => {
                setLocalError(null);
                clearError();
              }}
            />
          )}

          {/* Google Login */}
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={() => console.log("Login Google gagal")}
            useOneTap
          />

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">atau</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="nama@email.com"
                  className="w-full pl-10 pr-4 text-black py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Masukkan password"
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  disabled={loading}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  disabled={loading}
                />
                <span className="ml-2 text-sm text-gray-600">Ingat saya</span>
              </label>
              <button
                type="button"
                className="text-sm text-blue-600 hover:text-blue-700"
                disabled={loading}
              >
                Lupa password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Memproses..." : "Masuk"}
            </button>
          </form>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Belum punya akun?{" "}
            <Link
              href="/auth/register"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Daftar sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
