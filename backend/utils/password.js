// ==========================================
// GOWIND LIKEBOT
// Password Utility
// ==========================================

const crypto = require("crypto");

// Hash Password
function hashPassword(password) {

    return crypto
        .createHash("sha256")
        .update(password)
        .digest("hex");

}

// Compare Password
function comparePassword(password, hashedPassword) {

    const hash = hashPassword(password);

    return hash === hashedPassword;

}

module.exports = {

    hashPassword,

    comparePassword

};
