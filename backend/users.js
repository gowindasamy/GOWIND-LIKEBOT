// ======================================
// GOWIND LIKEBOT
// User Module
// ======================================

// User Profile
function getProfile(req, res) {

    res.json({
        success: true,
        username: "user",
        balance: 0,
        role: "user",
        status: "Active"
    });

}

// User Balance
function getBalance(req, res) {

    res.json({
        success: true,
        balance: 0
    });

}

// Add Balance
function addBalance(req, res) {

    const { amount } = req.body;

    res.json({
        success: true,
        message: "Balance Added",
        amount
    });

}

// Deduct Balance
function deductBalance(req, res) {

    const { amount } = req.body;

    res.json({
        success: true,
        message: "Balance Deducted",
        amount
    });

}

// Change Username
function updateUsername(req, res) {

    const { username } = req.body;

    res.json({
        success: true,
        message: "Username Updated",
        username
    });

}

module.exports = {
    getProfile,
    getBalance,
    addBalance,
    deductBalance,
    updateUsername
};
