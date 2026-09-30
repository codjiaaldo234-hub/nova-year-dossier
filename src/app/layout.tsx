import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { CartProvider } from "@/components/providers/CartProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NOVA'YEAR | Boutique Nouvel An",
  description: "Boutique premium pour célébrer la nouvelle année avec élégance, cadeaux, décoration et accessoires de fête.",
  openGraph: {
    title: "NOVA'YEAR",
    description: "Boutique premium pour célébrer la nouvelle année avec élégance.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#070707] text-white">
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
            <FloatingWhatsApp />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
