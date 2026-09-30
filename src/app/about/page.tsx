export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 md:px-6">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.26em] text-amber-300">À propos</p>
      <h1 className="text-4xl font-black text-white">Une maison de création dédiée aux fêtes</h1>
      <p className="mt-6 text-lg leading-8 text-slate-300">
        NOVA&apos;YEAR conçoit des produits qui allient élégance, énergie festive et modernité pour aider chacun à vivre la nouvelle année dans le style.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {[
          ["Premium", "Des pièces sélectionnées avec soin pour une expérience haut de gamme."],
          ["Festive", "Des collections pensées pour les grands moments et les célébrations."],
          ["Accessible", "Une boutique pensée pour commander rapidement, sans friction."],
        ].map(([title, text]) => (
          <div key={title} className="rounded-[24px] border border-white/10 bg-[#111111] p-5">
            <h2 className="text-xl font-bold text-white">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
