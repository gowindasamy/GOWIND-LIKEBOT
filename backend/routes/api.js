// ======================================
// GOWIND LIKEBOT
// Provider API Routes
// Instagram Likes Only
// ======================================

const express = require("express");
const router = express.Router();

const {
    getBalance,
    getServices,
    createApiOrder,
    getOrderStatus,
    refillOrder,
    cancelOrder
} = require("../api");

// ======================================
// Provider Balance
// GET /api/provider/balance
// ======================================
router.get("/balance", getBalance);

// ======================================
// Provider Services
// GET /api/provider/services
// ======================================
router.get("/services", getServices);

// ======================================
// Create Instagram Likes Order
// POST /api/provider/order
// ======================================
router.post("/order", createApiOrder);

// ======================================
// Check Order Status
// POST /api/provider/status
// ======================================
router.post("/status", getOrderStatus);

// ======================================
// Refill Order
// POST /api/provider/refill
// ======================================
router.post("/refill", refillOrder);

// ======================================
// Cancel Order
// POST /api/provider/cancel
// ======================================
router.post("/cancel", cancelOrder);

// ======================================
// Export Router
// ======================================
module.exports = router;
