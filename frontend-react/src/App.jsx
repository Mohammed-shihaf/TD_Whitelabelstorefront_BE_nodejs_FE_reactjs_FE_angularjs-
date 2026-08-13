import { useEffect, useState } from "react";
import OrderSummary from "./components/OrderSummary";
import TenantSwitcher from "./components/TenantSwitcher";

// White-Label Storefront: React serves SELF-SERVE tenants only.
// Enterprise tenants get the Angular storefront instead.
export default function App() {
  const [tenantId, setTenantId] = useState("acme");
  const [tenant, setTenant] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/api/tenant-config", { headers: { "x-tenant-id": tenantId } })
      .then((r) => r.json())
      .then(setTenant)
      .catch(() => setTenant(null));
    fetch("/api/tenant-orders", { headers: { "x-tenant-id": tenantId } })
      .then((r) => r.json())
      .then((data) => setOrders(data.orders))
      .catch(() => setOrders([]));
  }, [tenantId]);

  if (!tenant) return <p>Loading tenant…</p>;

  return (
    <div style={{ background: tenant.primaryColor, color: "#fff" }}>
      <h1>{tenant.brand} storefront (React, self-serve)</h1>
      <TenantSwitcher tenantId={tenantId} onSwitch={setTenantId} />
      <OrderSummary orders={orders} />
    </div>
  );
}
