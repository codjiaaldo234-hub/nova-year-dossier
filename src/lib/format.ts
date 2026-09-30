export function formatPrice(value: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "XOF",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatOrderNumber() {
  return `NVY-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}
