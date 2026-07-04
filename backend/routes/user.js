// ======================================
// GOWIND LIKEBOT
// User Routes
// ======================================

const express = require("express");
const router = express.Router();

const user = require("../user");

// Profile
router.get("/profile", user.getProfile);

// Balance
router.get("/balance", user.getBalance);

// Add Balance
router.post("/add-balance", user.addBalance);

// Deduct Balance
router.post("/deduct-balance", user.deductBalance);

// Update Username
router.put("/update-username", user.updateUsername);

module.exports = router;
