"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Search, SlidersHorizontal } from "lucide-react";
import { ProductCard } from "@/components/products/ProductCard";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export default function ShopPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    let items = products.filter((product) => {
      const matchesCategory = activeCategory === "all" || product.category === activeCategory;
      const matchesQuery =
        normalized.length === 0 ||
        product.name.toLowerCase().includes(normalized) ||
        product.description.toLowerCase().includes(normalized) ||
        product.category.toLowerCase().includes(normalized);

      return matchesCategory && matchesQuery;
    });

    switch (sortBy) {
      case "price-low":
        items = [...items].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        items = [...items].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        items = [...items].sort((a, b) => b.rating - a.rating);
        break;
      default:
        items = [...items].sort((a, b) => Number(b.featured) - Number(a.featured));
    }

    return items;
  }, [activeCategory, query, sortBy]);

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    const categoryMatches = categories.filter((category) => category.name.toLowerCase().includes(query.toLowerCase()));
    const productMatches = products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));
    return [...categoryMatches.map((item) => ({ type: "category", label: item.name })), ...productMatches.map((item) => ({ type: "product", label: item.name }))].slice(0, 5);
  }, [query]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.26em] text-amber-300">Boutique</p>
          <h1 className="text-4xl font-black text-white">La sélection NOVA&apos;YEAR</h1>
        </div>
        <div className="relative w-full max-w-md">
          <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Rechercher un produit, une catégorie..."
            className="w-full rounded-full border border-white/10 bg-[#101010] py-3 pl-11 pr-4 text-sm text-white outline-none ring-0 placeholder:text-slate-400"
          />
        </div>
      </div>

      {query && suggestions.length > 0 ? (
        <div className="mb-8 rounded-[26px] border border-white/10 bg-[#111111] p-4">
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Suggestions</div>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((item, index) => (
              <button key={`${item.type}-${index}`} type="button" className="rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-2 text-xs font-medium text-amber-100">
                {item.type === "category" ? "Catégorie" : "Produit"} · {item.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mb-8 flex flex-col gap-5 rounded-[28px] border border-white/10 bg-[#111111] p-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <button type="button" onClick={() => setActiveCategory("all")} className={`rounded-full px-4 py-2 text-sm ${activeCategory === "all" ? "bg-amber-400 text-slate-950" : "bg-white/5 text-slate-200"}`}>
            Tous
          </button>
          {categories.map((category) => (
            <button
              key={category.slug}
              type="button"
              onClick={() => setActiveCategory(category.slug)}
              className={`rounded-full px-4 py-2 text-sm ${activeCategory === category.slug ? "bg-amber-400 text-slate-950" : "bg-white/5 text-slate-200"}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#181818] px-3 py-2 text-sm text-slate-200">
          <SlidersHorizontal size={16} className="text-amber-200" />
          <select value={sortBy} onChange={(event) => setSortBy(event.target.value)} className="bg-transparent text-sm text-white outline-none">
            <option value="featured" className="bg-[#181818]">Popularité</option>
            <option value="price-low" className="bg-[#181818]">Prix croissant</option>
            <option value="price-high" className="bg-[#181818]">Prix décroissant</option>
            <option value="rating" className="bg-[#181818]">Note</option>
          </select>
          <ChevronDown size={16} className="text-slate-400" />
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="rounded-[30px] border border-dashed border-white/15 bg-[#111111] px-6 py-16 text-center">
          <p className="text-2xl font-bold text-white">Aucun résultat</p>
          <p className="mt-3 text-slate-300">Aucun produit ne correspond à votre recherche pour le moment.</p>
          <button type="button" onClick={() => { setQuery(""); setActiveCategory("all"); }} className="mt-6 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-5 py-3 text-sm font-bold text-slate-950">
            Revenir à la boutique
          </button>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
