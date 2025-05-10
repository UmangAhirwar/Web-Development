// Setting up router
const express = require("express");
const router = express.Router();

//Requiring the app.js necessary files to run the code
const wrapAsync = require("../utils/wrapAsync.js"); //requiring the async error file

const Listing = require("../models/listing.js"); // required the listing model
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const {
  index,
  renderNewForm,
  showListing,
  createListing,
  renderEditForm,
  updateListing,
  destroyListing,
} = require("../controllers/listing.js");

// listing form validation

router.route("/")
.get(wrapAsync(index))
.post(validateListing, wrapAsync(createListing));

//New route (Note: Here the create route should come first from the show route because the mongoose starts treating all the routes parameter as an id)
router.get("/new", isLoggedIn, renderNewForm);

router.route("/:id")
.get(wrapAsync(showListing))
.put(isLoggedIn, isOwner, validateListing, wrapAsync(updateListing))
.delete(isLoggedIn, isOwner, wrapAsync(destroyListing));



//Edit route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(renderEditForm));



module.exports = router;
