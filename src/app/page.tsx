import Link from "next/link";
import { BadgeCheck, Gift, ShieldCheck, Sparkles, Star, Truck, Zap } from "lucide-react";
import { CategoryCard } from "@/components/products/CategoryCard";
import { ProductCard } from "@/components/products/ProductCard";
import { Countdown } from "@/components/marketing/Countdown";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories } from "@/data/categories";
import { featuredProducts } from "@/data/products";
import { reviews } from "@/data/reviews";

export default function HomePage() {
  return (
    <main className="pb-20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.15),transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-200">
              <Sparkles size={14} />
              Nouvelle collection 2027
            </div>
            <h1 className="max-w-xl text-5xl font-black leading-[0.95] tracking-tight text-white md:text-6xl">
              UNE NOUVELLE ANNÉE.
              <span className="mt-2 block text-amber-300">UNE NOUVELLE ÉNERGIE.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
              Découvrez notre sélection spéciale pour célébrer la nouvelle année avec style.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/shop" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_20px_35px_rgba(251,191,36,0.25)]">
                ACHETER MAINTENANT
              </Link>
              <Link href="/shop" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white">
                DÉCOUVRIR LES OFFRES
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2"><BadgeCheck size={16} className="text-emerald-300" /> Paiement sécurisé</div>
              <div className="flex items-center gap-2"><Truck size={16} className="text-amber-300" /> Livraison rapide</div>
              <div className="flex items-center gap-2"><Gift size={16} className="text-pink-300" /> Cadeaux premium</div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.18),transparent_30%),linear-gradient(135deg,#121212,#090909)] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <div className="overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-br from-amber-300 via-yellow-500 to-orange-600 p-2">
                <img
                  src="https://images.unsplash.com/photo-1519664824562-d4a1fd6ff8cc?auto=format&fit=crop&w=1200&q=80"
                  alt="Collection Nouvel An"
                  className="h-[520px] w-full rounded-[22px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <SectionHeading eyebrow="Countdown" title="LA NOUVELLE ANNÉE APPROCHE" description="Le réveillon approche à grands pas, profitez des offres avant le coup d’envoi de la fête." />
        </div>
        <Countdown />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <SectionHeading eyebrow="Catégories" title="Le bon univers pour chaque moment" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionHeading eyebrow="Sélection" title="NOS PRODUITS VEDETTES" description="Des pièces soigneusement sélectionnées pour une célébration haut de gamme, festive et exclusive." />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="overflow-hidden rounded-[32px] border border-amber-300/20 bg-[linear-gradient(135deg,rgba(251,191,36,0.14),rgba(9,9,9,0.8))] p-7 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-amber-400/40 bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-amber-200">
                PACK NOUVEL AN
              </div>
              <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl">L’essentiel pour une soirée sur mesure</h2>
              <div className="mt-4 flex items-center gap-3 text-slate-300">
                <span>Produit A</span>
                <span>+</span>
                <span>Produit B</span>
                <span>+</span>
                <span>Produit C</span>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <span className="text-sm text-slate-400 line-through">30 000 FCFA</span>
                <span className="text-3xl font-black text-white">24 000 FCFA</span>
              </div>
              <p className="mt-3 text-lg text-amber-200">Économisez 6 000 FCFA</p>
              <div className="mt-8 flex gap-3">
                <Link href="/shop" className="rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950">Voir le pack</Link>
                <Link href="/product/pack-noel-minimal" className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white">Découvrir</Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80"
                alt="Pack Nouvel An"
                className="h-[320px] w-full max-w-md rounded-[30px] object-cover shadow-[0_30px_70px_rgba(168,85,247,0.35)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionHeading eyebrow="Confiance" title="Une expérience d’achat rassurante" />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {[
            { icon: <ShieldCheck size={22} />, title: "Paiement sécurisé" },
            { icon: <Truck size={22} />, title: "Livraison" },
            { icon: <Sparkles size={22} />, title: "Assistance WhatsApp" },
            { icon: <Zap size={22} />, title: "Commande rapide" },
            { icon: <BadgeCheck size={22} />, title: "Politique de retour" },
          ].map((item) => (
            <div key={item.title} className="rounded-[24px] border border-white/10 bg-[#101010] p-5 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-200">{item.icon}</div>
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <SectionHeading eyebrow="Avis" title="Ce que pensent nos clients de démonstration" description="Les avis ci-dessous sont inclus à des fins de démonstration et illustrent le parcours utilisateur de la boutique." />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reviews.map((review) => (
            <div key={review.name} className="rounded-[24px] border border-white/10 bg-[#121212] p-5">
              <div className="flex items-center gap-1 text-amber-300">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <Star key={index} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">“{review.comment}”</p>
              <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-400">
                <span>{review.name}</span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
