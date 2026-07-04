// ==========================================
// GOWIND LIKEBOT
// Authentication Controller
// ==========================================

const User = require("../models/User");
const { generateToken } = require("../utils/jwt");
const {
    hashPassword,
    comparePassword
} = require("../utils/password");

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

        if (!comparePassword(password, user.password)) {

            return res.status(401).json({

                success: false,
                message: "Invalid Password."

            });

        }

        const token = generateToken(user);

        return res.json({

            success: true,
            message: "Login Successful",

            token,

            user: {

                id: user._id,
                username: user.username,
                role: user.role,
                balance: user.balance

            }

        });

    } catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

}

// Register User
async function register(req, res) {

    try {

        const {

            username,
            password

        } = req.body;

        const exists = await User.findOne({

            username

        });

        if (exists) {

            return res.status(400).json({

                success: false,
                message: "Username already exists."

            });

        }

        const user = new User({

            username,

            password: hashPassword(password)

        });

        await user.save();

        res.json({

            success: true,
            message: "Registration Successful."

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

}

// Logout
async function logout(req, res) {

    res.json({

        success: true,
        message: "Logout Successful."

    });

}

module.exports = {

    login,
    register,
    logout

};
