// src/app/layout.tsx (Simplified version without AuthProvider)
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff2",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff2",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "SIMASHAJI - Sistem Manajemen Asrama Haji",
  description:
    "Platform booking dan manajemen asrama haji yang mudah dan terpercaya",
  keywords: ["asrama", "haji", "booking", "manajemen", "indonesia"],
  authors: [{ name: "SIMASHAJI Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={` antialiased`}
      >
        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
        >
          {children}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
