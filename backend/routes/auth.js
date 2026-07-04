// ==========================================
// GOWIND LIKEBOT
// Authentication Routes
// Instagram Likes Only
// ==========================================

const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

// ==========================================
// Login
// POST /api/auth/login
// ==========================================
router.post("/login", authController.login);

// ==========================================
// Register
// POST /api/auth/register
// ==========================================
router.post("/register", authController.register);

// ==========================================
// Logout
// POST /api/auth/logout
// ==========================================
router.post("/logout", authController.logout);

// ==========================================
// Change Password
// POST /api/auth/change-password
// ==========================================
router.post("/change-password", authController.changePassword);

// ==========================================
// Verify Token
// GET /api/auth/verify
// ==========================================
router.get("/verify", (req, res) => {

    res.json({

        success: true,

        message: "Token verification will be implemented."

    });

});

// ==========================================
// Export Router
// ==========================================
module.exports = router;
