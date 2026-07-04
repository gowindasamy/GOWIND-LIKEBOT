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
