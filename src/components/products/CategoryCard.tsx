import Link from "next/link";
import type { Category } from "@/types/store";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group block rounded-[28px] border border-white/10 bg-white/5 p-5 transition duration-200 hover:-translate-y-1 hover:border-amber-400/40 hover:bg-white/10"
    >
      <div className={`mb-5 overflow-hidden rounded-2xl bg-gradient-to-br ${category.accent} shadow-lg shadow-amber-950/20`}>
        <img
          src={category.icon}
          alt={category.name}
          className="h-16 w-16 object-cover"
        />
      </div>
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-xl font-semibold text-white">{category.name}</h3>
        <span className="text-lg text-amber-300 transition group-hover:translate-x-1">→</span>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{category.description}</p>
    </Link>
  );
}
