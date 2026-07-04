// ======================================
// GOWIND LIKEBOT
// IndianSMM Store API Routes
// Instagram Likes Only
// ======================================

const express = require("express");
const router = express.Router();

const api = require("../api");

// Provider Balance
router.get("/balance", api.getBalance);

// Provider Services
router.get("/services", api.getServices);

// Create Instagram Likes Order
router.post("/add", api.createApiOrder);

// Check Order Status
router.post("/status", api.getOrderStatus);

// Refill Order
router.post("/refill", api.refillOrder);

// Cancel Order
router.post("/cancel", api.cancelOrder);

module.exports = router;
