const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const User = require("../models/user.js");

const mongo_url = process.env.ATLASDB_URL || 'mongodb://127.0.0.1:27017/wanderlust';

main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("error in db", err);
  });

async function main() {
  await mongoose.connect(mongo_url);
}

const cleanupDB = async () => {
  try {
    // Delete all listings
    const deletedListings = await Listing.deleteMany({});
    console.log(`Deleted ${deletedListings.deletedCount} listings`);

    // Delete all reviews
    const deletedReviews = await Review.deleteMany({});
    console.log(`Deleted ${deletedReviews.deletedCount} reviews`);

    // Delete all users (optional - comment out if you want to keep user accounts)
    const deletedUsers = await User.deleteMany({});
    console.log(`Deleted ${deletedUsers.deletedCount} users`);

    console.log("✅ Database cleanup completed successfully!");
    process.exit(0);
  } catch (err) {
    console.log("❌ Error during cleanup:", err);
    process.exit(1);
  }
};

cleanupDB();
