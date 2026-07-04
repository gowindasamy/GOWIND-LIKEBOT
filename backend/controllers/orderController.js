// ==========================================
// GOWIND LIKEBOT
// Order Controller
// Instagram Likes Only
// ==========================================

const Order = require("../models/Order");
const User = require("../models/User");

// Create Order
async function createOrder(req, res) {

    try {

        const {
            username,
            postUrl,
            quantity,
            price
        } = req.body;

        const user = await User.findOne({ username });

        if (!user) {

            return res.status(404).json({
                success: false,
                message: "User not found."
            });

        }

        if (user.balance < price) {

            return res.status(400).json({
                success: false,
                message: "Insufficient Balance"
            });

        }

        // TODO:
        // Send Order to IndianSMM Store API

        const order = new Order({

            userId: user._id,

            username,

            postUrl,

            quantity,

            price,

            providerOrderId: "",

            status: "Pending"

        });

        await order.save();

        user.balance -= price;

        await user.save();

        res.json({

            success: true,

            message: "Order Created Successfully",

            order

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

}

// Order History
async function getOrderHistory(req, res) {

    try {

        const { username } = req.params;

        const orders = await Order.find({ username });

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

// Order Status
async function getOrderStatus(req, res) {

    try {

        const { id } = req.params;

        const order = await Order.findById(id);

        if (!order) {

            return res.status(404).json({

                success: false,

                message: "Order not found."

            });

        }

        res.json({

            success: true,

            order

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

}

module.exports = {

    createOrder,

    getOrderHistory,

    getOrderStatus

};
