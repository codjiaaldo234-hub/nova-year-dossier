"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Minus, Plus, Star, Truck, ShieldCheck, MessageCircle, ArrowRight } from "lucide-react";
import { useCart } from "@/components/providers/CartProvider";
import { formatPrice } from "@/lib/format";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import type { Product } from "@/types/store";

export function ProductDetailClient({ product, relatedProducts }: { product: Product; relatedProducts: Product[] }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0] ?? "Standard");
  const [quantity, setQuantity] = useState(1);

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <div className="mb-8 flex items-center gap-2 text-sm text-slate-300">
        <Link href="/" className="hover:text-amber-200">Accueil</Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-amber-200">Boutique</Link>
        <span>/</span>
        <span className="text-white">{product.name}</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <div className={`overflow-hidden rounded-[30px] bg-gradient-to-br ${product.theme.gradient}`}>
            <img
              src={product.images[0]}
              alt={product.name}
              className="h-[420px] w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((image, index) => (
              <div key={`${image}-${index}`} className="overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900">
                <img src={image} alt={`${product.name} vue ${index + 1}`} className="h-28 w-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[30px] border border-white/10 bg-[#111111] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.3)]">
          <div className="mb-3 inline-flex rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-amber-200">
            {product.badge}
          </div>
          <h1 className="text-3xl font-bold text-white md:text-4xl">{product.name}</h1>

          <div className="mt-4 flex items-center gap-4 text-sm text-slate-300">
            <div className="flex items-center gap-1 text-amber-300">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={14} fill="currentColor" />
              ))}
            </div>
            <span>{product.rating}.0</span>
            <span>({product.reviewsCount} avis fictifs)</span>
          </div>

          <div className="mt-5 flex items-end gap-3">
            <span className="text-4xl font-black text-white">{formatPrice(product.price)}</span>
            <span className="text-lg text-slate-400 line-through">{formatPrice(product.oldPrice)}</span>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-emerald-300">
            <ShieldCheck size={18} />
            <span>Disponibilité : {product.stock > 0 ? `En stock (${product.stock} disponibles)` : "Épuisé"}</span>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Variantes</p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    type="button"
                    onClick={() => setSelectedVariant(variant)}
                    className={`rounded-full border px-3 py-2 text-sm ${
                      selectedVariant === variant
                        ? "border-amber-400 bg-amber-500/15 text-amber-100"
                        : "border-white/10 bg-white/5 text-slate-200"
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Quantité</p>
              <div className="flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 p-2">
                <button type="button" className="rounded-full p-2 text-white hover:bg-white/5" onClick={() => setQuantity((current) => Math.max(1, current - 1))}>
                  <Minus size={16} />
                </button>
                <span className="min-w-8 text-center text-lg font-semibold text-white">{quantity}</span>
                <button type="button" className="rounded-full p-2 text-white hover:bg-white/5" onClick={() => setQuantity((current) => current + 1)}>
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => {
                addToCart(product, quantity, selectedVariant);
                router.push("/checkout");
              }}
              className="rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-4 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/20"
            >
              ACHETER MAINTENANT
            </button>
            <button
              type="button"
              onClick={() => addToCart(product, quantity, selectedVariant)}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white"
            >
              AJOUTER AU PANIER
            </button>
            <a
              href={buildWhatsAppLink(`Bonjour NOVA'YEAR\n\nJe souhaite commander :\nProduit : ${product.name}\nQuantité : ${quantity}\nPrix : ${product.price} FCFA\n\nMerci de m'indiquer les modalités de livraison.`)}
              target="_blank"
              rel="noreferrer"
              className="sm:col-span-2 flex items-center justify-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-200"
            >
              <MessageCircle size={16} />
              COMMANDER SUR WHATSAPP
            </a>
          </div>

          <div className="mt-8 space-y-3 border-t border-white/10 pt-6 text-sm text-slate-300">
            <div className="flex items-center gap-3"><Truck size={16} className="text-amber-300" /> Livraison rapide</div>
            <div className="flex items-center gap-3"><ShieldCheck size={16} className="text-amber-300" /> Paiement sécurisé</div>
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[26px] border border-white/10 bg-[#111111] p-6">
          <h2 className="text-2xl font-bold text-white">Description</h2>
          <p className="mt-4 leading-7 text-slate-300">{product.description}</p>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-white">Caractéristiques</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2"><span className="text-amber-300">•</span> {feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-[26px] border border-white/10 bg-[#111111] p-6">
          <h2 className="text-2xl font-bold text-white">Avis clients</h2>
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-1 text-amber-300">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">“Le produit est splendide et la finition est vraiment premium. L’expérience d’achat est très fluide.”</p>
            <div className="mt-4 text-xs uppercase tracking-[0.18em] text-slate-400">Awa • 18 Déc 2026</div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-3xl font-bold text-white">Vous pourriez aussi aimer</h2>
          <Link href="/shop" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-200 hover:text-amber-100">
            Voir la boutique <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {relatedProducts.map((related) => (
            <Link key={related.id} href={`/product/${related.slug}`} className="rounded-[26px] border border-white/10 bg-[#111111] p-4 transition hover:border-amber-300/40 hover:-translate-y-1">
              <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${related.theme.gradient}`}>
                <img src={related.images[0]} alt={related.name} className="h-40 w-full object-cover" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-semibold text-white">{related.name}</span>
                <span className="text-sm text-amber-200">{formatPrice(related.price)}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
