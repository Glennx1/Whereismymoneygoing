import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DataBanner } from "@/components/DataBanner";

export const metadata: Metadata = {
  title: "Bengaluru Project Tracker • Bengaluru Public Projects Tracker",
  description: "Independent citizen tracker following budget allocations, payouts, and real progress across major infrastructure projects in Bengaluru.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#faf9f6] text-[#1d1d1f] antialiased selection:bg-neutral-900 selection:text-white">
        <Navbar />
        <DataBanner />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
