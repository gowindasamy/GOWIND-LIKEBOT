// ==========================================
// GOWIND LIKEBOT
// Main Server
// ==========================================

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        project: "GOWIND LIKEBOT",
        version: "1.0.0",
        server: "Running",
        database: "Ready",
        developer: "Govindasamy"
    });
});

// Health Check
app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        status: "OK"
    });
});

// 404 Route
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 GOWIND LIKEBOT Server running on port ${PORT}`);
});
