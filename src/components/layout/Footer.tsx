import Link from "next/link";
import { Camera, Globe, MessageCircle, Play } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070707] text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-5 md:px-6">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 text-xl font-black tracking-[0.18em] text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-yellow-500 text-sm text-slate-950">
              N
            </span>
            NOVA&apos;YEAR
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
            Une sélection premium pour célébrer la nouvelle année avec élégance, énergie et esprit de fête.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-white">Navigation</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-amber-200">Accueil</Link></li>
            <li><Link href="/shop" className="hover:text-amber-200">Boutique</Link></li>
            <li><Link href="/shop" className="hover:text-amber-200">Promotions</Link></li>
            <li><Link href="/contact" className="hover:text-amber-200">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-white">Assistance</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/faq" className="hover:text-amber-200">FAQ</Link></li>
            <li><Link href="/shipping" className="hover:text-amber-200">Livraison</Link></li>
            <li><Link href="/returns" className="hover:text-amber-200">Retours</Link></li>
            <li><Link href="/contact" className="hover:text-amber-200">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-white">Légal</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/terms" className="hover:text-amber-200">Conditions</Link></li>
            <li><Link href="/privacy" className="hover:text-amber-200">Confidentialité</Link></li>
          </ul>

          <div className="mt-6 flex gap-2">
            {[Camera, Globe, Play, MessageCircle].map((Icon, index) => (
              <a key={index} href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:border-amber-300/40 hover:text-amber-200">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
