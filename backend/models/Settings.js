// ==========================================
// GOWIND LIKEBOT
// Settings Model
// Instagram Likes Only
// ==========================================

const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema({

    panelName: {

        type: String,

        default: "GOWIND LIKEBOT"

    },

    serviceName: {

        type: String,

        default: "Instagram Likes"

    },

    serviceId: {

        type: Number,

        required: true

    },

    likePrice: {

        type: Number,

        default: 0

    },

    currency: {

        type: String,

        default: "INR"

    },

    apiUrl: {

        type: String,

        required: true

    },

    apiKey: {

        type: String,

        required: true

    },

    panelStatus: {

        type: Boolean,

        default: true

    },

    createdAt: {

        type: Date,

        default: Date.now

    },

    updatedAt: {

        type: Date,

        default: Date.now

    }

});

module.exports = mongoose.model("Settings", settingsSchema);
