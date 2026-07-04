// ======================================
// GOWIND LIKEBOT
// Order Routes
// Instagram Likes Only
// ======================================

const express = require("express");
const router = express.Router();

const orders = require("../orders");

// Create New Order
router.post("/create", orders.createOrder);

// Order History
router.get("/history", orders.getOrderHistory);

// Order Status
router.get("/status/:orderId", orders.getOrderStatus);

// Price Calculator
router.post("/price", orders.calculatePrice);

// Cancel Order
router.post("/cancel", orders.cancelOrder);

module.exports = router;
