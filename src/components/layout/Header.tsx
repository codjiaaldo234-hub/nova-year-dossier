"use client";

import Link from "next/link";
import { Menu, MessageCircle, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/components/providers/CartProvider";
import { PromoBar } from "@/components/layout/PromoBar";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Boutique", href: "/shop" },
  { label: "Catégories", href: "/shop" },
  { label: "Promotions", href: "/shop" },
  { label: "À propos", href: "/about" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080808]/90 backdrop-blur-xl">
      <PromoBar />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-xl font-black tracking-[0.2em] text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-yellow-500 text-lg text-slate-950 shadow-lg shadow-amber-500/30">
            N
          </span>
          NOVA&apos;YEAR
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-200 transition hover:text-amber-200">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <Link href="/shop" aria-label="Recherche" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-amber-300/50 hover:text-amber-200">
            <Search size={18} />
          </Link>
          <a
            href={buildWhatsAppLink("Bonjour NOVA'YEAR 👋 Je souhaite parler avec un conseiller.")}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 transition hover:bg-emerald-500/20 md:flex"
          >
            <MessageCircle size={18} />
          </a>
          <Link
            href="/cart"
            aria-label="Panier"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/40 bg-amber-500/10 text-amber-200 transition hover:bg-amber-500/15"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 ? (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-300 px-1 text-[10px] font-bold text-slate-950">
                {cartCount}
              </span>
            ) : null}
          </Link>

          <button
            type="button"
            aria-label="Menu mobile"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 bg-[#0b0b0b] md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="py-2 text-sm font-medium text-slate-200" onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
