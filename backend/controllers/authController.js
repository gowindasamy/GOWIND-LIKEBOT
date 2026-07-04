// ==========================================
// GOWIND LIKEBOT
// Authentication Controller
// Instagram Likes Only
// ==========================================

const User = require("../models/User");

// Login
async function login(req, res) {

    try {

        const { username, password } = req.body;

        if (!username || !password) {

            return res.status(400).json({

                success: false,
                message: "Username and Password are required."

            });

        }

        const user = await User.findOne({ username });

        if (!user) {

            return res.status(404).json({

                success: false,
                message: "User not found."

            });

        }

        if (user.password !== password) {

            return res.status(401).json({

                success: false,
                message: "Invalid Password."

            });

        }

        return res.json({

            success: true,
            message: "Login Successful",

            user: {

                id: user._id,
                username: user.username,
                role: user.role,
                balance: user.balance,
                status: user.status

            }

        });

    } catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

}

// Logout
async function logout(req, res) {

    return res.json({

        success: true,
        message: "Logout Successful"

    });

}

// Change Password
async function changePassword(req, res) {

    return res.json({

        success: true,
        message: "Change Password - Coming Soon"

    });

}

module.exports = {

    login,
    logout,
    changePassword

};
