import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/AppProviders";
import AutoPopupForm from "@/components/AutoPopupForm";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayurveda Wellness Beacon - Natural Healing & Holistic Wellness",
  description: "Discover authentic Ayurvedic treatments, consultations, and wellness solutions. Expert guidance for natural healing, preventive care, and holistic health.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProviders>
          <AutoPopupForm />
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
