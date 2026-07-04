// ==========================================
// GOWIND LIKEBOT
// Main Server
// Instagram Likes Only
// ==========================================

// Packages
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Create App
const app = express();

// Configuration
const PORT = process.env.PORT || 3000;

// Backend Modules
const database = require("./database");

// Routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const orderRoutes = require("./routes/orders");
const adminRoutes = require("./routes/admin");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==========================================
// Connect Database
// ==========================================

if (database.connectDatabase) {
    database.connectDatabase();
}

// ==========================================
// Home
// ==========================================

app.get("/", (req, res) => {

    res.status(200).json({

        success: true,
        project: "GOWIND LIKEBOT",
        version: "1.2.0",
        service: "Instagram Likes Only",
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

// Authentication
app.use("/api/auth", authRoutes);

// User
app.use("/api/user", userRoutes);

// Orders
app.use("/api/orders", orderRoutes);

// Admin
app.use("/api/admin", adminRoutes);

// ==========================================
// 404 Not Found
// ==========================================

app.use((req, res) => {

    res.status(404).json({

        success: false,
        message: "Route Not Found"

    });

});

// ==========================================
// Server Start
// ==========================================

app.listen(PORT, () => {

    console.log("======================================");
    console.log("🚀 GOWIND LIKEBOT SERVER STARTED");
    console.log("======================================");
    console.log("Project  : GOWIND LIKEBOT");
    console.log("Version  : 1.2.0");
    console.log("Service  : Instagram Likes Only");
    console.log("Port     :", PORT);
    console.log("Status   : Running");
    console.log("======================================");

});
