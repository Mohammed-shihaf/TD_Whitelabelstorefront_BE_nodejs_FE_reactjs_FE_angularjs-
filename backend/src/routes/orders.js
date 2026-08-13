"use strict";
const express = require("express");
const { listOrders } = require("../data/orders");
const router = express.Router();

router.get("/", (req, res) => {
  const orders = listOrders(req.header("x-tenant-id"));
  if (!orders) return res.status(404).json({ error: "unknown tenant" });
  res.json({ orders });
});

module.exports = router;
