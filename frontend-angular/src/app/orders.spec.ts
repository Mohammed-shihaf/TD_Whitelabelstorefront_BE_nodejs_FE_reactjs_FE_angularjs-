import { totalOrderValue, formatCurrency } from './orders';

describe('totalOrderValue', () => {
  it('sums order totals', () => {
    expect(totalOrderValue([{ id: 1, total: 10, status: 'shipped' }, { id: 2, total: 5.5, status: 'shipped' }])).toBe(15.5);
  });
});

describe('formatCurrency', () => {
  it('formats with a dollar sign and 2 decimals', () => {
    expect(formatCurrency(4200)).toBe('$4200.00');
  });
});
