import type { Category } from "@/types/store";

export const categories: Category[] = [
  {
    slug: "decoration",
    name: "Décoration",
    icon: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
    description: "Lumières, bougies et détails magiques pour une soirée inoubliable.",
    accent: "from-amber-500/30 to-yellow-200/10",
  },
  {
    slug: "fete",
    name: "Fête",
    icon: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80",
    description: "Collections élégantes pour accueillir 2027 avec style.",
    accent: "from-rose-500/30 to-orange-200/10",
  },
  {
    slug: "mode-accessoires",
    name: "Mode & Accessoires",
    icon: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    description: "Looks premium, accessoires exclusifs et finitions raffinées.",
    accent: "from-purple-500/30 to-pink-200/10",
  },
  {
    slug: "cadeaux",
    name: "Cadeaux",
    icon: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
    description: "Idées cadeaux festives, premium et pensées pour les proches.",
    accent: "from-cyan-500/25 to-blue-200/10",
  },
  {
    slug: "nouveautes",
    name: "Nouveautés",
    icon: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    description: "Les dernières pièces qui donnent le ton de la saison.",
    accent: "from-indigo-500/25 to-violet-200/10",
  },
  {
    slug: "promotions",
    name: "Promotions",
    icon: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
    description: "Offres limitées pour faire entrer l’élégance dans votre budget.",
    accent: "from-red-500/25 to-amber-200/10",
  },
];
