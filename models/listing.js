const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema  = new Schema({
  title: {
    type: String,
    requied: true,
  },
  description: String,
  category: {
    type: String,
    enum: ["trending", "rooms", "iconic-cities", "mountains", "castles", "amazing-pools", "camping", "farms", "arctic", "domes", "boats"],
    default: "trending"
  },
  mapEmbed: {
    type: String,
    default: ""
  },
  image: {
    url: String,
    filename: String,
  },
  price: Number,
  location: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

listingSchema.post("findOneAndDelete", async (listing)=>{
  if(listing){
  await Review.deleteMany({_id : {$in: listing.reviews}});
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;