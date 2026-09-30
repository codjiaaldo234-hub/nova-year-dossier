const faqs = [
  ["Quels sont les délais de livraison ?", "La majorité des commandes sont expédiées sous 24 à 48 heures selon votre localisation."],
  ["Puis-je commander sans créer de compte ?", "Oui. Le parcours de commande est entièrement invité pour faciliter l’achat."],
  ["Comment fonctionne le code promo ?", "Le code promo de démonstration est NOVA30 et applique une réduction de 10 % sur le panier."],
  ["Que faire en cas de besoin d’aide ?", "Vous pouvez contacter notre équipe via le bouton WhatsApp flottant ou la page contact."],
];

export default function FaqPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 md:px-6">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.26em] text-amber-300">FAQ</p>
      <h1 className="text-4xl font-black text-white">Questions fréquentes</h1>
      <div className="mt-8 space-y-4">
        {faqs.map(([question, answer]) => (
          <div key={question} className="rounded-[24px] border border-white/10 bg-[#111111] p-5">
            <h2 className="text-lg font-semibold text-white">{question}</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">{answer}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
