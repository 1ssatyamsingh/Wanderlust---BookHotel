const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");
const listingController = require("../controllers/reviews.js");

//Reviews
//Post Route
router.post("/",isLoggedIn,validateReview, wrapAsync(listingController.createReview));

//Delete review route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(listingController.deleteReview));

module.exports = router;
