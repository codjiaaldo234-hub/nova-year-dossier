export default function ShippingPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 md:px-6">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.26em] text-amber-300">Livraison</p>
      <h1 className="text-4xl font-black text-white">Livraison rapide et sécurisée</h1>
      <div className="mt-8 space-y-4 text-slate-300">
        <p>Nous préparons les commandes rapidement afin de garantir une expédition fluide et efficace.</p>
        <p>Les livraisons sont réalisées dans les villes et zones accessibles selon le mode choisi à la commande.</p>
        <p>Le montant de livraison est calculé automatiquement et devient gratuit dès un certain seuil de commande.</p>
      </div>
    </main>
  );
}
