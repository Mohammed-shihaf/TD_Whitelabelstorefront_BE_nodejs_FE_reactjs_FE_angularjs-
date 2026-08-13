"use strict";
const express = require("express");
const { getTenant } = require("../data/tenants");
const router = express.Router();

router.get("/", (req, res) => {
  const tenant = getTenant(req.header("x-tenant-id"));
  if (!tenant) return res.status(404).json({ error: "unknown tenant" });
  res.json(tenant);
});

module.exports = router;
