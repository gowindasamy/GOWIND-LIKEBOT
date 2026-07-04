// ==========================================
// GOWIND LIKEBOT
// Main Server
// ==========================================

// Packages
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// App
const app = express();

// Routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const orderRoutes = require("./routes/orders");

// Config
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// ==========================================
// Home
// ==========================================
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        project: "GOWIND LIKEBOT",
        version: "1.2.0",
        server: "Running",
        database: "Ready",
        developer: "Govindasamy"
    });
});

// ==========================================
// Health Check
// ==========================================
app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        status: "OK"
    });
});

// ==========================================
// API Routes
// ==========================================
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/orders", orderRoutes);

// ==========================================
// 404 Handler
// ==========================================
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});

// ==========================================
// Start Server
// ==========================================
app.listen(PORT, () => {
    console.log("====================================");
    console.log("🚀 GOWIND LIKEBOT SERVER STARTED");
    console.log("====================================");
    console.log(`Server : http://localhost:${PORT}`);
    console.log(`Port   : ${PORT}`);
    console.log("Status : Running");
    console.log("====================================");
});
