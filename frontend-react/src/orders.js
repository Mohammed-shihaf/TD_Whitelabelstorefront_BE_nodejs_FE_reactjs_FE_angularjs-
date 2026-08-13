export function totalOrderValue(orders) {
  return orders.reduce((sum, o) => sum + o.total, 0);
}

export function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}
