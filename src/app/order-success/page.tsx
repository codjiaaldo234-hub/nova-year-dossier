"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { MessageCircle, PartyPopper } from "lucide-react";
import { buildOrderMessage } from "@/lib/whatsapp";
import { formatPrice } from "@/lib/format";

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("order") ?? "NVY-XXXX";
  const amount = Number(searchParams.get("amount") ?? 0);

  return (
    <main className="mx-auto max-w-4xl px-4 py-20 md:px-6">
      <div className="rounded-[32px] border border-emerald-400/20 bg-[linear-gradient(135deg,rgba(16,185,129,0.15),rgba(10,10,10,0.85))] p-8 text-center shadow-[0_20px_60px_rgba(16,185,129,0.15)] md:p-12">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
          <PartyPopper size={40} />
        </div>
        <h1 className="mt-6 text-4xl font-black text-white">🎉 COMMANDE CONFIRMÉE !</h1>
        <p className="mt-4 text-lg text-slate-200">Merci pour votre commande chez NOVA&apos;YEAR.</p>
        <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-left text-slate-300">
          <div className="flex justify-between gap-3 text-sm"><span>Numéro de commande</span><span className="font-semibold text-white">{orderNumber}</span></div>
          <div className="mt-3 flex justify-between gap-3 text-sm"><span>Total</span><span className="font-semibold text-white">{formatPrice(amount)}</span></div>
          <div className="mt-3 flex justify-between gap-3 text-sm"><span>Statut</span><span className="font-semibold text-emerald-300">Confirmée</span></div>
        </div>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={`https://wa.me/221771234567?text=${encodeURIComponent(buildOrderMessage(orderNumber))}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-400 px-5 py-3 text-sm font-bold text-slate-950"
          >
            <MessageCircle size={16} />
            💬 CONTACTER NOVA&apos;YEAR SUR WHATSAPP
          </a>
          <Link href="/shop" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white">
            Continuer l’achat
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<main className="mx-auto max-w-4xl px-4 py-20 text-center text-white md:px-6">Chargement...</main>}>
      <OrderSuccessContent />
    </Suspense>
  );
}
