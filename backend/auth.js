// ======================================
// GOWIND LIKEBOT
// Authentication Module
// ======================================

// User Login
function login(req, res) {

    const { username, password } = req.body;

    if (!username || !password) {
        return res.json({
            success: false,
            message: "Username and Password are required."
        });
    }

    // TODO:
    // Check user in database
    // Verify password
    // Create session / JWT

    return res.json({
        success: true,
        message: "Login successful."
    });
}

// Change Password
function changePassword(req, res) {

    // TODO:
    // Verify old password
    // Save new password

    return res.json({
        success: true,
        message: "Password changed successfully."
    });
}

// Logout
function logout(req, res) {

    // TODO:
    // Destroy session / remove token

    return res.json({
        success: true,
        message: "Logged out successfully."
    });
}

module.exports = {
    login,
    changePassword,
    logout
};
