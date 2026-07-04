// ==========================================
// GOWIND LIKEBOT
// Main Server
// Instagram Likes Only
// Version : 1.2.0
// ==========================================

// ==============================
// Packages
// ==============================
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// ==============================
// App
// ==============================
const app = express();
const PORT = process.env.PORT || 3000;

// ==============================
// Database
// ==============================
const database = require("./database");

// ==============================
// Routes
// ==============================
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const orderRoutes = require("./routes/orders");
const adminRoutes = require("./routes/admin");
const apiRoutes = require("./routes/api");

// ==============================
// Middleware
// ==============================
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

// ==============================
// Database Connection
// ==============================
if (database.connectDatabase) {
    database.connectDatabase();
}

// ==============================
// Home
// ==============================
app.get("/", (req, res) => {

    res.status(200).json({

        success: true,

        project: "GOWIND LIKEBOT",

        version: "1.2.0",

        service: "Instagram Likes Only",

        server: "Running",

        database: "Connected",

        developer: "Govindasamy"

    });

});

// ==============================
// Health Check
// ==============================
app.get("/health", (req, res) => {

    res.status(200).json({

        success: true,

        status: "Healthy"

    });

});

// ==============================
// Authentication
// ==============================
app.use("/api/auth", authRoutes);

// ==============================
// User
// ==============================
app.use("/api/user", userRoutes);

// ==============================
// Orders
// ==============================
app.use("/api/orders", orderRoutes);

// ==============================
// Admin
// ==============================
app.use("/api/admin", adminRoutes);

// ==============================
// IndianSMM Provider API
// ==============================
app.use("/api/provider", apiRoutes);

// ==============================
// 404 Handler
// ==============================
app.use((req, res) => {

    res.status(404).json({

        success: false,

        message: "Route Not Found"

    });

});

// ==============================
// Start Server
// ==============================
app.listen(PORT, () => {

    console.log("=========================================");
    console.log("🚀 GOWIND LIKEBOT SERVER STARTED");
    console.log("=========================================");
    console.log("Project   : GOWIND LIKEBOT");
    console.log("Version   : 1.2.0");
    console.log("Service   : Instagram Likes Only");
    console.log("Port      :", PORT);
    console.log("Status    : Running");
    console.log("=========================================");

});
