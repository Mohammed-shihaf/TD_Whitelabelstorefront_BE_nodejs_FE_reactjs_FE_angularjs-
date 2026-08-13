"use strict";
const express = require("express");
const tenantConfigRouter = require("./routes/tenantConfig");
const ordersRouter = require("./routes/orders");

const app = express();
app.use(express.json());

app.use("/api/tenant-config", tenantConfigRouter);
app.use("/api/tenant-orders", ordersRouter);
app.get("/health", (req, res) => res.json({ status: "ok" }));

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`whitelabelstorefront-backend listening on ${port}`));
}
module.exports = app;
