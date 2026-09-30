"use client";

import { useRouter } from "next/navigation";
import { useCart } from "@/components/providers/CartProvider";
import { formatPrice, formatOrderNumber } from "@/lib/format";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, shipping, discount, total, clearCart } = useCart();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const orderNumber = formatOrderNumber();
    clearCart();
    router.push(`/order-success?order=${orderNumber}&amount=${total}`);
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <div className="mb-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.26em] text-amber-300">Checkout</p>
        <h1 className="text-4xl font-black text-white">Commande invitée</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <form onSubmit={handleSubmit} className="space-y-5 rounded-[30px] border border-white/10 bg-[#111111] p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm text-slate-300">
              <span className="mb-2 block">Nom</span>
              <input required className="w-full rounded-2xl border border-white/10 bg-[#191919] px-4 py-3 text-white outline-none" />
            </label>
            <label className="text-sm text-slate-300">
              <span className="mb-2 block">Prénom</span>
              <input required className="w-full rounded-2xl border border-white/10 bg-[#191919] px-4 py-3 text-white outline-none" />
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm text-slate-300">
              <span className="mb-2 block">Téléphone</span>
              <input required className="w-full rounded-2xl border border-white/10 bg-[#191919] px-4 py-3 text-white outline-none" />
            </label>
            <label className="text-sm text-slate-300">
              <span className="mb-2 block">WhatsApp</span>
              <input required className="w-full rounded-2xl border border-white/10 bg-[#191919] px-4 py-3 text-white outline-none" />
            </label>
          </div>

          <label className="block text-sm text-slate-300">
            <span className="mb-2 block">Email</span>
            <input type="email" required className="w-full rounded-2xl border border-white/10 bg-[#191919] px-4 py-3 text-white outline-none" />
          </label>

          <label className="block text-sm text-slate-300">
            <span className="mb-2 block">Adresse</span>
            <input required className="w-full rounded-2xl border border-white/10 bg-[#191919] px-4 py-3 text-white outline-none" />
          </label>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm text-slate-300">
              <span className="mb-2 block">Ville</span>
              <input required className="w-full rounded-2xl border border-white/10 bg-[#191919] px-4 py-3 text-white outline-none" />
            </label>
            <label className="text-sm text-slate-300">
              <span className="mb-2 block">Mode de livraison</span>
              <select className="w-full rounded-2xl border border-white/10 bg-[#191919] px-4 py-3 text-white outline-none">
                <option>Livraison express</option>
                <option>Retrait à l’atelier</option>
              </select>
            </label>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Mode de paiement</p>
            <div className="grid gap-3 md:grid-cols-2">
              {[
                "Paiement mobile",
                "Carte bancaire",
                "Cash à la livraison",
                "Orange Money",
              ].map((method) => (
                <label key={method} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#191919] px-4 py-3 text-sm text-slate-200">
                  <input type="radio" name="payment" defaultChecked={method === "Paiement mobile"} />
                  <span>{method}</span>
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className="w-full rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-4 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/20">
            CONFIRMER LA COMMANDE
          </button>
        </form>

        <aside className="rounded-[30px] border border-white/10 bg-[#111111] p-6">
          <h2 className="text-2xl font-bold text-white">Résumé de la commande</h2>

          <div className="mt-5 space-y-3">
            {items.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex items-center justify-between gap-3 text-sm text-slate-200">
                <span>{item.name} x{item.quantity}</span>
                <span>{formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm text-slate-300">
            <div className="flex justify-between"><span>Sous-total</span><span>{formatPrice(subtotal)}</span></div>
            <div className="flex justify-between"><span>Livraison</span><span>{shipping === 0 ? "Gratuite" : formatPrice(shipping)}</span></div>
            <div className="flex justify-between"><span>Réduction</span><span>- {formatPrice(discount)}</span></div>
            <div className="flex justify-between pt-3 text-lg font-bold text-white"><span>Total</span><span>{formatPrice(total)}</span></div>
          </div>
        </aside>
      </div>
    </main>
  );
}
