// ==========================================
// GOWIND LIKEBOT
// Main Server
// ==========================================

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Routes
const authRoutes = require("./routes/auth");

// Config
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Home
app.get("/", (req, res) => {
    res.json({
        success: true,
        project: "GOWIND LIKEBOT",
        version: "1.1.0",
        server: "Running",
        database: "Ready",
        developer: "Govindasamy"
    });
});

// Health Check
app.get("/health", (req, res) => {
    res.json({
        success: true,
        status: "OK"
    });
});

// API Routes
app.use("/api/auth", authRoutes);

// 404
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
