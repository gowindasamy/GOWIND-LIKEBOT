// ==========================================
// GOWIND LIKEBOT
// Authentication Middleware
// ==========================================

function authMiddleware(req, res, next) {

    const username = req.headers.username;

    if (!username) {

        return res.status(401).json({

            success: false,
            message: "Authentication Required"

        });

    }

    req.username = username;

    next();

}

module.exports = authMiddleware;
