import { useEffect, useState } from "react";

// White-Label Storefront: React serves SELF-SERVE tenants only.
// Enterprise tenants get the Angular storefront instead.
export default function App() {
  const [tenant, setTenant] = useState(null);

  useEffect(() => {
    fetch("/api/tenant-config", { headers: { "x-tenant-id": "acme" } })
      .then((r) => r.json())
      .then(setTenant)
      .catch(() => setTenant(null));
  }, []);

  if (!tenant) return <p>Loading tenant…</p>;

  return (
    <div style={{ background: tenant.primaryColor, color: "#fff" }}>
      <h1>{tenant.brand} storefront (React, self-serve)</h1>
    </div>
  );
}
