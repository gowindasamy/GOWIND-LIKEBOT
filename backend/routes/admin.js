// ======================================
// GOWIND LIKEBOT
// Admin Routes
// ======================================

const express = require("express");
const router = express.Router();

const admin = require("../admin");

// Dashboard
router.get("/dashboard", admin.getDashboard);

// Create User
router.post("/create-user", admin.createUser);

// Delete User
router.delete("/delete-user", admin.deleteUser);

// Update User Balance
router.put("/update-balance", admin.updateBalance);

// Update Like Price
router.put("/update-price", admin.updatePrice);

// Get All Orders
router.get("/orders", admin.getAllOrders);

// Block / Unblock User
router.put("/user-status", admin.updateUserStatus);

module.exports = router;
