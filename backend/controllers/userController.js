// ==========================================
// GOWIND LIKEBOT
// User Controller
// Instagram Likes Only
// ==========================================

const User = require("../models/User");

// Get Profile
async function getProfile(req, res) {

    try {

        const { username } = req.params;

        const user = await User.findOne({ username });

        if (!user) {

            return res.status(404).json({
                success: false,
                message: "User not found."
            });

        }

        res.json({
            success: true,
            user
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

}

// Get Balance
async function getBalance(req, res) {

    try {

        const { username } = req.params;

        const user = await User.findOne({ username });

        if (!user) {

            return res.status(404).json({
                success: false,
                message: "User not found."
            });

        }

        res.json({
            success: true,
            balance: user.balance
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

}

// Add Balance
async function addBalance(req, res) {

    try {

        const { username, amount } = req.body;

        const user = await User.findOne({ username });

        if (!user) {

            return res.status(404).json({
                success: false,
                message: "User not found."
            });

        }

        user.balance += Number(amount);

        await user.save();

        res.json({
            success: true,
            balance: user.balance
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

}

// Deduct Balance
async function deductBalance(req, res) {

    try {

        const { username, amount } = req.body;

        const user = await User.findOne({ username });

        if (!user) {

            return res.status(404).json({
                success: false,
                message: "User not found."
            });

        }

        if (user.balance < amount) {

            return res.status(400).json({
                success: false,
                message: "Insufficient Balance"
            });

        }

        user.balance -= Number(amount);

        await user.save();

        res.json({
            success: true,
            balance: user.balance
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

}

module.exports = {

    getProfile,
    getBalance,
    addBalance,
    deductBalance

};
