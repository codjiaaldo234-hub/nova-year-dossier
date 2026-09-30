"use client";

import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2, MessageCircle } from "lucide-react";
import { useCart } from "@/components/providers/CartProvider";
import { buildCartMessage } from "@/lib/whatsapp";
import { formatPrice } from "@/lib/format";

export default function CartPage() {
  const { items, subtotal, shipping, discount, total, updateQuantity, removeFromCart, promoCode, applyPromoCode, resetPromoCode } = useCart();

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <div className="mb-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.26em] text-amber-300">Panier</p>
        <h1 className="text-4xl font-black text-white">Votre sélection</h1>
      </div>

      {items.length === 0 ? (
        <div className="rounded-[28px] border border-dashed border-white/15 bg-[#111111] p-12 text-center">
          <ShoppingBag className="mx-auto text-amber-300" size={46} />
          <h2 className="mt-6 text-2xl font-bold text-white">Votre panier est vide</h2>
          <Link href="/shop" className="mt-6 inline-flex rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-5 py-3 text-sm font-bold text-slate-950">
            Continuer mes achats
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex flex-col gap-4 rounded-[26px] border border-white/10 bg-[#111111] p-4 md:flex-row md:items-center">
                <div className={`flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br ${item.theme.gradient} text-4xl`}>
                  {item.theme.emoji}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-xl font-semibold text-white">{item.name}</h2>
                      <p className="mt-1 text-sm text-slate-400">Variante : {item.variant}</p>
                    </div>
                    <button type="button" onClick={() => removeFromCart(item.id, item.variant)} className="text-slate-400 hover:text-red-300">
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 p-2">
                      <button type="button" className="rounded-full p-1.5 text-white hover:bg-white/10" onClick={() => updateQuantity(item.id, item.quantity - 1, item.variant)}><Minus size={14} /></button>
                      <span className="min-w-6 text-center text-sm font-semibold text-white">{item.quantity}</span>
                      <button type="button" className="rounded-full p-1.5 text-white hover:bg-white/10" onClick={() => updateQuantity(item.id, item.quantity + 1, item.variant)}><Plus size={14} /></button>
                    </div>
                    <div className="text-lg font-bold text-white">{formatPrice(item.price * item.quantity)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="rounded-[28px] border border-white/10 bg-[#111111] p-5">
            <h3 className="text-xl font-semibold text-white">Résumé</h3>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <div className="flex justify-between"><span>Sous-total</span><span>{formatPrice(subtotal)}</span></div>
              <div className="flex justify-between"><span>Livraison</span><span>{shipping === 0 ? "Gratuite" : formatPrice(shipping)}</span></div>
              <div className="flex justify-between"><span>Réduction</span><span>- {formatPrice(discount)}</span></div>
              <div className="border-t border-white/10 pt-3 text-base font-semibold text-white flex justify-between"><span>Total</span><span>{formatPrice(total)}</span></div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-3">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Code promo</label>
              <div className="flex gap-2">
                <input
                  defaultValue={promoCode}
                  onBlur={(event) => {
                    const value = event.target.value;
                    if (value) {
                      applyPromoCode(value);
                    } else {
                      resetPromoCode();
                    }
                  }}
                  placeholder="NOVA30"
                  className="w-full rounded-full border border-white/10 bg-[#0d0d0d] px-3 py-2 text-sm text-white outline-none"
                />
              </div>
            </div>

            <Link href="/checkout" className="mt-6 block w-full rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-4 py-3 text-center text-sm font-bold text-slate-950">
              PASSER AU CHECKOUT
            </Link>

            <a
              href={`https://wa.me/221771234567?text=${encodeURIComponent(buildCartMessage(items.map((item) => ({ name: item.name, quantity: item.quantity })), total))}`}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-200"
            >
              <MessageCircle size={16} />
              💬 COMMANDER VIA WHATSAPP
            </a>
          </aside>
        </div>
      )}
    </main>
  );
}
