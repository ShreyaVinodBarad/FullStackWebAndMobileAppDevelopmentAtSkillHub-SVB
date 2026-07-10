const { register, login, logout } = require("../controllers/auth.controller.js")

const rateLimit = require("express-rate-limit")

// 👇 Taking out router's functionality from express.
const router = require("express").Router()

const authLimiter = rateLimit({
    window: 1000 * 60,
    /*
    👆
    Time window = 1 minute  
    (1000 ms × 60 = 60,000 ms = 1 min)
    */
    max: 3
    // 👆 User can make only 3 requests in 1 minute
})
// 👆 Creates a rate limiting rule

router
    .post("/signup", register)
    .post("/signin", authLimiter, login)
    .post("/signout", logout)

module.exports = router
// 👆 Exporting router variable