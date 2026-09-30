import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppLink("Bonjour NOVA'YEAR 👋 J'ai besoin d'aide pour mon achat.")}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-400 text-white shadow-[0_15px_40px_rgba(34,197,94,0.35)] transition hover:scale-105 md:h-16 md:w-16"
      aria-label="WhatsApp"
    >
      <div className="flex items-center gap-2 text-sm font-semibold">
        <MessageCircle size={22} />
      </div>
    </a>
  );
}
