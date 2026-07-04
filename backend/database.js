// ==========================================
// GOWIND LIKEBOT
// Database Module
// MongoDB Atlas
// ==========================================

const mongoose = require("mongoose");

// ==========================================
// Connect Database
// ==========================================
async function connectDatabase() {

    try {

        await mongoose.connect(process.env.MONGODB_URI, {

            autoIndex: true

        });

        console.log("======================================");
        console.log("✅ MongoDB Connected Successfully");
        console.log("Database :", mongoose.connection.name);
        console.log("Host     :", mongoose.connection.host);
        console.log("Status   : Connected");
        console.log("======================================");

    } catch (error) {

        console.log("======================================");
        console.log("❌ MongoDB Connection Failed");
        console.log(error.message);
        console.log("======================================");

        process.exit(1);

    }

}

// ==========================================
// Disconnect Database
// ==========================================
async function disconnectDatabase() {

    try {

        await mongoose.disconnect();

        console.log("======================================");
        console.log("MongoDB Disconnected");
        console.log("======================================");

    } catch (error) {

        console.log(error.message);

    }

}

// ==========================================
// Database Status
// ==========================================
function getDatabaseStatus() {

    if (mongoose.connection.readyState === 1) {

        return "Connected";

    }

    if (mongoose.connection.readyState === 2) {

        return "Connecting";

    }

    if (mongoose.connection.readyState === 3) {

        return "Disconnecting";

    }

    return "Disconnected";

}

// ==========================================
// Database Information
// ==========================================
function getDatabaseInfo() {

    return {

        database: mongoose.connection.name,

        host: mongoose.connection.host,

        status: getDatabaseStatus()

    };

}

// ==========================================
// Export
// ==========================================
module.exports = {

    connectDatabase,

    disconnectDatabase,

    getDatabaseStatus,

    getDatabaseInfo

};
