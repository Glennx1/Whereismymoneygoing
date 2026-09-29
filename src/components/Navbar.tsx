"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Camera } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Projects" },
    { href: "/map", label: "Map View" },
    { href: "/red-flags", label: "Delays & Warnings" },
    { href: "/agencies", label: "Departments" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-[#faf9f6]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-white font-bold text-sm tracking-tight">
            NK
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-semibold tracking-tight text-neutral-900">
                NammaKharcha
              </span>
              <span className="text-xs text-neutral-400 font-normal">
                Bengaluru
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "bg-neutral-200/80 text-neutral-900 font-semibold"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/40"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action: Share a photo */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/submit-report"
            className="flex items-center gap-1.5 rounded-full bg-neutral-900 px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-neutral-800 transition-all active:scale-95"
          >
            <Camera className="h-3.5 w-3.5" />
            <span>Share a Photo</span>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center p-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
          aria-label="Toggle menu"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-4 py-3 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive ? "bg-neutral-100 text-neutral-900 font-semibold" : "text-neutral-600"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-neutral-100">
            <Link
              href="/submit-report"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-lg bg-neutral-900 px-4 py-2.5 text-xs font-medium text-white"
            >
              <Camera className="h-4 w-4" />
              <span>Share a Photo from Ground</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
