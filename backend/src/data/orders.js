"use strict";
// Real tenant-scoped order history - a genuine second resource beyond
// tenant config, distinct data shape (orders, not config).
const ORDERS = {
  acme: [{ id: 1, total: 49.0, status: "shipped" }],
  globex: [{ id: 1, total: 4200.0, status: "processing" }, { id: 2, total: 1800.0, status: "shipped" }],
};

function listOrders(tenantId) {
  return ORDERS[tenantId];
}

module.exports = { listOrders };
