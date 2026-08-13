export interface Order {
  id: number;
  total: number;
  status: string;
}

export function totalOrderValue(orders: Order[]): number {
  return orders.reduce((sum, o) => sum + o.total, 0);
}

export function formatCurrency(amount: number): string {
  return `$${amount.toFixed(2)}`;
}
