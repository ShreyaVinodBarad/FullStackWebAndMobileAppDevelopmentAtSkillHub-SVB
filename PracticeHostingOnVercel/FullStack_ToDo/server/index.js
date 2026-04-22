// 📌 Here, first we will start server, then connect to database and we will do testing.

const express = require("express")
// 👆 Importing express

require("dotenv").config({ path: "./.env" })
// 👆 If env file is in main folder we can call config directly, but if not u have to mention path(optional)
// 👆 For connecting with database we need Mongodb's URL, so will import .env file

const cookieParser = require("cookie-parser")
// 👆 Importing cookie-parser

const mongoose = require("mongoose")
// 👆 Importing mongoose to connect with the database

mongoose.connect(process.env.MONGO_URL)
//                       👆 Giving variable where mongo's URL is there.
// 👆 Connecting to database => for the URL given in MONGO_URL variable

const cors = require("cors")
const protect = require("./middlewares/protect.js")
// 👆 Importing cors package and storing it in variable cors. cors allows your frontend and backend to talk to each other.

const rateLimit = require("express-rate-limit")
// 👆 Importing express-rate-limit

const app = express()
// 👆 Creating server

// const limiter = rateLimit({
//     // 👆 Creates a rate limiting rule
//     window: 1000 * 60,
//     /*
//     👆
//     Time window = 1 minute
//     (1000 ms × 60 = 60,000 ms = 1 min)
//     */
//     max: 5
//     // 👆 User can make only 5 requests in 1 minute
// })
// app.use(limiter)
/*
👆
- Apply this limiter to your app
- Now all requests will follow this rule
*/
// 👆 This code must be after creating server and before writing other code

app.use(cors({ origin: "http://localhost:3000", credentials: true }))
/*
👆
app → Your Express server
use() → Tells the server to use something
cors() → Allow requests from other websites (like your frontend)
credentials: true → Tells server: “I allow this frontend to send cookies and receive cookies.”
-> It tells your backend:
“Allow frontend (localhost:3000) to send requests here.”
-> In short: 
credentials: "include" (frontend) → send cookies => redux -> apis -> auth.api.ts
credentials: true (backend) → allow cookies
*/

app.use(express.json()) // 👉 The work of this function is to put data in req.body
// 👆 To put data in req.body we have to call a middleware

app.use(cookieParser()) // 👉 Puts data in req.cookies
/*
👆
app.use() = use middleware in your app
cookieParser() = function that reads cookies from request
*/

// 📌 To - Do CRUD
app.use("/api/todo", protect, require("./routes/todo.routes.js"))
// 👆 Adding routing             👆 adding router => When you will see this URL - "/api/todo", go to this routing file - "./routes/todo.routes.js"
// 👆 When ever you are in todo route run this protect middleware before running code of todo.routes.js file  

// 📌 Authentication
app.use("/api/auth", require("./routes/auth.routes.js"))
// 👆 👆 Adding routing             👆 adding router => When you will see this URL - "/api/auth", go to this routing file - "./routes/auth.routes.js"

mongoose.connection.once("open", () => {
    console.log("DB connected!")
    app.listen(process.env.PORT, console.log("Server running..."))
    // 👆 Starting Server => Passing argument - Port Number
})
// 👆 Connecting to database => Checking if MongoDB is connected
// 👆 When database gets connected open named event fires it is a custom event and the function given is executed.

// console.log("Mongo URL:", process.env.MONGO_URL)

module.exports = app