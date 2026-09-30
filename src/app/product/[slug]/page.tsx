import { ProductDetailClient } from "@/components/products/ProductDetailClient";
import { products } from "@/data/products";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-20 text-center md:px-6">
        <h1 className="text-4xl font-black text-white">Produit introuvable</h1>
      </main>
    );
  }

  const relatedProducts = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3);

  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
}
