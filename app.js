require("dotenv").config();
const express = require("express");
const app = express();
var cors = require('cors')
const userRouter = require("./api/users/user.router");
const port = process.env.PORT || 3000;
app.use(cors())
app.use(express.json());
app.use("/api/users", userRouter);


app.listen(port, () => {
    console.log("Server running on port " + process.env.PORT + "...");
});