"use strict";
const request = require("supertest");
const { expect } = require("chai");
const app = require("../src/app");

describe("GET /api/tenant-orders", () => {
  it("returns a self-serve tenant's orders", async () => {
    const res = await request(app).get("/api/tenant-orders").set("x-tenant-id", "acme");
    expect(res.body.orders).to.have.lengthOf(1);
  });

  it("returns an enterprise tenant's orders", async () => {
    const res = await request(app).get("/api/tenant-orders").set("x-tenant-id", "globex");
    expect(res.body.orders).to.have.lengthOf(2);
  });

  it("404s for an unknown tenant", async () => {
    const res = await request(app).get("/api/tenant-orders").set("x-tenant-id", "nope");
    expect(res.status).to.equal(404);
  });
});
