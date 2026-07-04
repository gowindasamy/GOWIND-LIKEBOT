// ======================================
// GOWIND LIKEBOT
// Authentication Module
// ======================================

const users = [
    {
        username: "admin",
        password: "admin123",
        role: "admin"
    },
    {
        username: "user",
        password: "user123",
        role: "user"
    }
];

// Login
function login(req, res) {

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            success: false,
            message: "Username and Password are required."
        });
    }

    const account = users.find(
        user =>
            user.username === username &&
            user.password === password
    );

    if (!account) {
        return res.status(401).json({
            success: false,
            message: "Invalid Username or Password."
        });
    }

    return res.status(200).json({
        success: true,
        message: "Login Successful",
        user: {
            username: account.username,
            role: account.role
        }
    });
}

// Change Password
function changePassword(req, res) {

    return res.json({
        success: true,
        message: "Change Password module coming soon."
    });

}

// Logout
function logout(req, res) {

    return res.json({
        success: true,
        message: "Logout Successful."
    });

}

module.exports = {
    login,
    changePassword,
    logout
};
