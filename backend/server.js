// ======================================
// GOWIND LIKEBOT
// Main Server File
// ======================================

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        project: "GOWIND LIKEBOT",
        server: "Running"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
