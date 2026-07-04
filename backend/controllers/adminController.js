// ==========================================
// GOWIND LIKEBOT
// Admin Controller
// Instagram Likes Only
// ==========================================

const User = require("../models/User");
const Order = require("../models/Order");
const Settings = require("../models/Settings");

// Dashboard
async function getDashboard(req, res) {

    try {

        const totalUsers = await User.countDocuments();

        const totalOrders = await Order.countDocuments();

        const activeUsers = await User.countDocuments({
            status: "active"
        });

        res.json({

            success: true,

            dashboard: {

                totalUsers,

                totalOrders,

                activeUsers

            }

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

}

// Create User
async function createUser(req, res) {

    try {

        const {

            username,

            password,

            balance

        } = req.body;

        const user = new User({

            username,

            password,

            balance

        });

        await user.save();

        res.json({

            success: true,

            message: "User Created",

            user

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

}

// Delete User
async function deleteUser(req, res) {

    try {

        const { username } = req.body;

        await User.deleteOne({

            username

        });

        res.json({

            success: true,

            message: "User Deleted"

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

}

// Update Balance
async function updateBalance(req, res) {

    try {

        const {

            username,

            balance

        } = req.body;

        const user = await User.findOne({

            username

        });

        if (!user) {

            return res.status(404).json({

                success: false,

                message: "User Not Found"

            });

        }

        user.balance = balance;

        await user.save();

        res.json({

            success: true,

            message: "Balance Updated",

            balance: user.balance

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

}

// All Orders
async function getAllOrders(req, res) {

    try {

        const orders = await Order.find();

        res.json({

            success: true,

            orders

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

}

// Update Settings
async function updateSettings(req, res) {

    try {

        const settings = await Settings.findOne();

        if (!settings) {

            return res.status(404).json({

                success: false,

                message: "Settings Not Found"

            });

        }

        Object.assign(settings, req.body);

        await settings.save();

        res.json({

            success: true,

            message: "Settings Updated",

            settings

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

}

module.exports = {

    getDashboard,

    createUser,

    deleteUser,

    updateBalance,

    getAllOrders,

    updateSettings

};
