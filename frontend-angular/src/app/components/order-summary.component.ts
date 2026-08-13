import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Order, totalOrderValue, formatCurrency } from '../orders';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>{{ orders.length }} orders, total {{ total() }}</p>
    <ul><li *ngFor="let o of orders">#{{ o.id }} — {{ formatCurrency(o.total) }} ({{ o.status }})</li></ul>
  `,
})
export class OrderSummaryComponent {
  @Input() orders: Order[] = [];

  total(): string {
    return formatCurrency(totalOrderValue(this.orders));
  }

  formatCurrency(amount: number): string {
    return formatCurrency(amount);
  }
}
