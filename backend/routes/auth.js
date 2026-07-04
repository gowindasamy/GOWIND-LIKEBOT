const express = require("express");
const router = express.Router();

const {
    login,
    logout,
    changePassword
} = require("../auth");

// Login
router.post("/login", login);

// Logout
router.post("/logout", logout);

// Change Password
router.post("/change-password", changePassword);

module.exports = router;
// ======================================
// GOWIND LIKEBOT
// Authentication Routes
// ======================================

const express = require("express");
const router = express.Router();

const auth = require("../auth");

// Login
router.post("/login", auth.login);

// Logout
router.post("/logout", auth.logout);

// Change Password
router.post("/change-password", auth.changePassword);

// Export
module.exports = router;
