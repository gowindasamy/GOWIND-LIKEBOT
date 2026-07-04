// ==========================================
// GOWIND LIKEBOT
// Order Model
// Instagram Likes Only
// ==========================================

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    userId: {

        type: mongoose.Schema.Types.ObjectId,

        ref: "User",

        required: true

    },

    username: {

        type: String,

        required: true

    },

    postUrl: {

        type: String,

        required: true,

        trim: true

    },

    providerOrderId: {

        type: String,

        default: ""

    },

    quantity: {

        type: Number,

        required: true

    },

    price: {

        type: Number,

        required: true

    },

    service: {

        type: String,

        default: "Instagram Likes"

    },

    status: {

        type: String,

        default: "Pending",

        enum: [
            "Pending",
            "Processing",
            "Completed",
            "Partial",
            "Cancelled",
            "Failed"
        ]

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

module.exports = mongoose.model("Order", orderSchema);
