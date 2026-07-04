// ======================================
// GOWIND LIKEBOT
// Database Module
// ======================================

const mongoose = require("mongoose");

// Connect MongoDB
async function connectDatabase() {

    try {

        await mongoose.connect(process.env.MONGODB_URI);

        console.log("✅ MongoDB Connected");

    } catch (error) {

        console.error("❌ Database Connection Failed");

        console.error(error.message);

        process.exit(1);

    }

}

// Disconnect Database
async function disconnectDatabase() {

    try {

        await mongoose.disconnect();

        console.log("✅ MongoDB Disconnected");

    } catch (error) {

        console.error(error.message);

    }

}

// Database Status
async function getDatabaseStatus(req, res) {

    return res.json({

        success: true,

        database: mongoose.connection.readyState === 1
            ? "Connected"
            : "Disconnected"

    });

}

module.exports = {
    connectDatabase,
    disconnectDatabase,
    getDatabaseStatus
};
