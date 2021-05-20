const router = require("express").Router();
const express = require("express");
const app = express();
const { checkToken } = require("../../auth/token_validation.js");
const {
    createUser,
    login,
    // getUsers,
    updateAddressUser,
    GmailRegister,
    GmailLogIn,
    update,
    checkGmailToken,
    checkLoggedIn,
    logOut,
    checkToken2,
    deleteUser
} = require("./user.controller");
const { getUserByEmail } = require("./user.service");
router.post("/register", createUser);
// router.get("/", checkToken, getUsers);
// router.get("/:email", getUserByEmail);
router.post("/login", login);
router.patch("/update", checkToken, update);
router.get("/GmailRegister", GmailRegister);
router.post("/GmailLogIn", GmailLogIn);
router.patch("/update", update);
router.get("/GmailLogIn", GmailLogIn);
router.get("/logOut", logOut);
router.post("/GmailRegister", checkGmailToken);
// router.get("/checkLoggedIn", checkLoggedIn);
module.exports = router;