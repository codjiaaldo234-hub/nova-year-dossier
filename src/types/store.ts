export type Category = {
  slug: string;
  name: string;
  icon: string;
  description: string;
  accent: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  oldPrice: number;
  discount: number;
  category: string;
  images: string[];
  rating: number;
  reviewsCount: number;
  stock: number;
  badge: string;
  featured: boolean;
  newItem: boolean;
  trending: boolean;
  features: string[];
  variants: string[];
  theme: {
    gradient: string;
    emoji: string;
    accent: string;
  };
};

export type Review = {
  name: string;
  rating: number;
  comment: string;
  date: string;
};

export type CartItem = Product & {
  quantity: number;
  variant: string;
};
