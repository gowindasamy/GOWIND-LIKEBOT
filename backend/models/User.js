// ==========================================
// GOWIND LIKEBOT
// User Model
// Instagram Likes Only
// ==========================================

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    username: {

        type: String,

        required: true,

        unique: true,

        trim: true

    },

    password: {

        type: String,

        required: true

    },

    role: {

        type: String,

        default: "user",

        enum: ["admin", "user"]

    },

    balance: {

        type: Number,

        default: 0

    },

    status: {

        type: String,

        default: "active",

        enum: ["active", "blocked"]

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

module.exports = mongoose.model("User", userSchema);
