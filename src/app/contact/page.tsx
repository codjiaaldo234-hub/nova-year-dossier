import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 md:px-6">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.26em] text-amber-300">Contact</p>
      <h1 className="text-4xl font-black text-white">Parlons de votre projet</h1>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="space-y-4 rounded-[28px] border border-white/10 bg-[#111111] p-6">
          {[{ icon: Phone, label: "Téléphone", value: "+221 77 123 45 67" }, { icon: Mail, label: "Email", value: "hello@novayear.store" }, { icon: MapPin, label: "Adresse", value: "Dakar, Sénégal" }].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10 text-amber-200"><Icon size={18} /></div>
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{label}</div>
                <div className="mt-1 text-white">{value}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-[28px] border border-white/10 bg-[#111111] p-6">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
            <MessageCircle size={14} />
            WhatsApp
          </div>
          <p className="text-sm leading-7 text-slate-300">Pour un conseil personnalisé, envoyez-nous un message directement sur WhatsApp et nous vous répondrons rapidement.</p>
          <a href="https://wa.me/221771234567" target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-gradient-to-r from-emerald-500 to-green-400 px-5 py-3 text-sm font-bold text-slate-950">
            Démarrer une discussion
          </a>
        </div>
      </div>
    </main>
  );
}
