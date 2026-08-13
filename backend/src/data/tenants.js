"use strict";
const TENANTS = {
  acme: { tier: "self-serve", brand: "Acme", primaryColor: "#2563eb" },
  globex: { tier: "enterprise", brand: "Globex Corp", primaryColor: "#0f172a" },
};

function getTenant(id) {
  return TENANTS[id];
}

module.exports = { getTenant };
