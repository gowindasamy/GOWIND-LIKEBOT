// ==========================================
// GOWIND LIKEBOT
// API Controller
// Instagram Likes Only
// IndianSMM Store
// ==========================================

const axios = require("axios");
const Settings = require("../models/Settings");

// Get Provider Balance
async function getBalance(req, res) {

    try {

        const settings = await Settings.findOne();

        const response = await axios.post(settings.apiUrl, {

            key: settings.apiKey,
            action: "balance"

        });

        res.json({

            success: true,
            data: response.data

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

}

// Get Services
async function getServices(req, res) {

    try {

        const settings = await Settings.findOne();

        const response = await axios.post(settings.apiUrl, {

            key: settings.apiKey,
            action: "services"

        });

        res.json({

            success: true,
            data: response.data

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

}

// Create Instagram Likes Order
async function createOrder(req, res) {

    try {

        const {

            link,

            quantity

        } = req.body;

        const settings = await Settings.findOne();

        const response = await axios.post(settings.apiUrl, {

            key: settings.apiKey,

            action: "add",

            service: settings.serviceId,

            link,

            quantity

        });

        res.json({

            success: true,

            data: response.data

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

}

// Order Status
async function getStatus(req, res) {

    try {

        const { order } = req.body;

        const settings = await Settings.findOne();

        const response = await axios.post(settings.apiUrl, {

            key: settings.apiKey,

            action: "status",

            order

        });

        res.json({

            success: true,

            data: response.data

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

}

module.exports = {

    getBalance,

    getServices,

    createOrder,

    getStatus

};
