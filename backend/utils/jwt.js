// ==========================================
// GOWIND LIKEBOT
// JWT Utility
// ==========================================

const jwt = require("jsonwebtoken");

// Generate Token
function generateToken(user) {

    return jwt.sign(

        {
            id: user._id,
            username: user.username,
            role: user.role
        },

        process.env.JWT_SECRET,

        {
            expiresIn: "7d"
        }

    );

}

// Verify Token
function verifyToken(token) {

    try {

        return jwt.verify(

            token,

            process.env.JWT_SECRET

        );

    } catch (error) {

        return null;

    }

}

module.exports = {

    generateToken,

    verifyToken

};
