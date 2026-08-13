import { expect } from "chai";
import { totalOrderValue, formatCurrency } from "../src/orders.js";

describe("totalOrderValue", () => {
  it("sums order totals", () => {
    expect(totalOrderValue([{ total: 10 }, { total: 5.5 }])).to.equal(15.5);
  });
  it("returns 0 for an empty list", () => {
    expect(totalOrderValue([])).to.equal(0);
  });
});

describe("formatCurrency", () => {
  it("formats with a dollar sign and 2 decimals", () => {
    expect(formatCurrency(49)).to.equal("$49.00");
  });
});
