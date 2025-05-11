// Setting up router
const express = require("express");
const router = express.Router({mergeParams: true}); // Very important to merge the parent route data with the child route data 

const wrapAsync = require("../utils/wrapAsync.js")//requiring the async error file
const ExpressError = require("../utils/ExpressError.js")//requiring the express error file

const Review = require('../models/review.js');// required the listing model
const Listing = require('../models/listing.js');// required the listing model
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");
const { createReview, destroyReview } = require("../controllers/reviews.js");



//post route
router.post("/", isLoggedIn, validateReview, wrapAsync(createReview));

//delete route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor,  wrapAsync(destroyReview))

module.exports = router;