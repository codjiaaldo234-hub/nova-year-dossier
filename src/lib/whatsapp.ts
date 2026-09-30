import { contactConfig } from "@/config/contact";

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildProductMessage(productName: string, quantity: number, price: number) {
  return `Bonjour NOVA'YEAR\n\nJe souhaite commander :\n\nProduit : ${productName}\nQuantité : ${quantity}\nPrix : ${price} FCFA\n\nMerci de m'indiquer les modalités de livraison.`;
}

export function buildCartMessage(items: { name: string; quantity: number }[], total: number) {
  const lines = items
    .map((item) => `- ${item.name} x${item.quantity}`)
    .join("\n");

  return `Bonjour NOVA'YEAR\n\nJe souhaite commander :\n\n${lines}\n\nTotal estimé : ${total} FCFA\n\nMerci de me confirmer la livraison.`;
}

export function buildOrderMessage(orderNumber: string) {
  return `Bonjour NOVA'YEAR\n\nJe souhaite suivre ma commande ${orderNumber}.\nMerci de me confirmer le statut et la livraison.`;
}
