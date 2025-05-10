const express = require("express");
const { models } = require("mongoose");
const router = express.Router(); // Very important to merge the parent route data with the child route data 
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const { signUp, renderSignUp, renderLoginForm, login, logout } = require("../controllers/user");

router.route("/signup")
.get(renderSignUp)
.post(wrapAsync (signUp) );


router.route("/login")
.get(renderLoginForm)
.post(saveRedirectUrl, passport.authenticate('local', { 
    failureRedirect: '/login', 
    failureFlash: true
}), login );


router.get("/logout", logout)
module.exports = router; 