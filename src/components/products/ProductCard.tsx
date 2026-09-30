"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingBag, Star } from "lucide-react";
import { useCart } from "@/components/providers/CartProvider";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/types/store";

export function ProductCard({ product }: { product: Product }) {
  const router = useRouter();
  const { addToCart } = useCart();

  const handleBuyNow = () => {
    addToCart(product, 1, product.variants[0] ?? "Standard");
    router.push("/checkout");
  };

  return (
    <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#121212] shadow-[0_20px_50px_rgba(15,15,15,0.45)] transition duration-200 hover:-translate-y-1 hover:border-amber-400/30">
      <div className="relative overflow-hidden p-4">
        <div className="absolute left-4 top-4 z-10 inline-flex rounded-full border border-white/20 bg-black/30 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-200 backdrop-blur-sm">
          {product.badge}
        </div>
        <div className={`relative flex h-64 items-center justify-center overflow-hidden rounded-[22px] bg-gradient-to-br ${product.theme.gradient}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="space-y-4 px-4 pb-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link href={`/product/${product.slug}`} className="text-xl font-semibold text-white hover:text-amber-200">
              {product.name}
            </Link>
            <div className="mt-2 flex items-center gap-1 text-amber-300">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={14} fill="currentColor" className="opacity-100" />
              ))}
              <span className="ml-2 text-xs text-slate-300">{product.rating}.0 · {product.reviewsCount} avis</span>
            </div>
          </div>
        </div>

        <div className="flex items-end gap-2">
          <span className="text-2xl font-bold text-white">{formatPrice(product.price)}</span>
          <span className="text-sm text-slate-400 line-through">{formatPrice(product.oldPrice)}</span>
        </div>

        <p className="text-sm leading-6 text-slate-300">{product.description}</p>

        <div className="flex gap-2 pt-2">
          <button
            onClick={() => addToCart(product, 1, product.variants[0] ?? "Standard")}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <ShoppingBag size={16} />
            Ajouter
          </button>
          <button
            onClick={handleBuyNow}
            className="flex-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-4 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/20"
          >
            Acheter
          </button>
        </div>
      </div>
    </article>
  );
}
