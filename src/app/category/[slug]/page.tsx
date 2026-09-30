import Link from "next/link";
import { ProductCard } from "@/components/products/ProductCard";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((item) => item.slug === params.slug);
  const categoryProducts = products.filter((product) => product.category === params.slug);

  if (!category) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-20 text-center md:px-6">
        <h1 className="text-4xl font-black text-white">Catégorie introuvable</h1>
        <Link href="/shop" className="mt-6 inline-flex rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-5 py-3 text-sm font-bold text-slate-950">
          Retour à la boutique
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <div className="mb-8 rounded-[30px] border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.03] p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">Catégorie</p>
        <div className="mt-3 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/25 to-yellow-200/5 text-3xl">{category.icon}</div>
          <div>
            <h1 className="text-4xl font-black text-white">{category.name}</h1>
            <p className="mt-2 text-slate-300">{category.description}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {categoryProducts.length > 0 ? (
          categoryProducts.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <div className="md:col-span-2 xl:col-span-3 rounded-[26px] border border-dashed border-white/15 bg-[#111111] p-12 text-center text-slate-300">
            Aucun produit dans cette catégorie pour le moment.
          </div>
        )}
      </div>
    </main>
  );
}
