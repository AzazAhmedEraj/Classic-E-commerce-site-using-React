import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DeshiBazar - Premium Bangladeshi E-Commerce",
  description: "আপনার বিশ্বস্ত অনলাইন শপিং গন্তব্য - Authentic Bengali products, Jamdani sarees, Nakshi kantha, traditional crafts and more. Quality meets heritage.",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  keywords: ['Bangladeshi products', 'Jamdani', 'Nakshi Kantha', 'Deshi', 'Traditional crafts', 'Bengali culture'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body className="min-h-screen antialiased mesh-gradient">{children}</body>
    </html>
  );
}
