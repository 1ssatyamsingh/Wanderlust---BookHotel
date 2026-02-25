const Listing = require("../models/listing");

module.exports.index =  async (req,res)=>{
  const allListings = await Listing.find({});
  res.render("listings/index.ejs",{allListings});
};

module.exports.renderNewForm = (req,res)=>{
  res.render("listings/new.ejs");
};

module.exports.showListing =async (req,res)=>{
  let {id} = req.params;
  const listing =  await Listing.findById(id).populate({path : "reviews", populate: { path: "author"}}).populate("owner");
  if(!listing){
  req.flash("error","Requested listing does not exist!");
  return res.redirect("/listings");
  }
  res.render("listings/show.ejs", {listing});
};

module.exports.createListing =  async (req,res,next)=>{
  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = {url, filename};
  await newListing.save();
  req.flash("success", "New Listing created!")
  res.redirect("/listings");
};

module.exports.editListing = async (req,res)=>{
  let {id} = req.params;
  const listing =  await Listing.findById(id);
  if(!listing){
  req.flash("error","Requested listing does not exist!");
  return res.redirect("/listings");
  }
  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload","/upload/w_250");
  res.render("listings/edit.ejs",{listing, originalImageUrl});
};

module.exports.updateListing = async (req,res)=>{
  let {id} = req.params;
  let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});
  if(typeof req.file !== "undefined"){
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = {url, filename};
    await listing.save();
  }
  
  req.flash("success","Listing updated");
  res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req,res)=>{
  let {id} = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success","Listing Deleted!");
  res.redirect("/listings");
};

module.exports.searchListings = async (req,res)=>{
  let {q} = req.query;
  if(!q || q.trim() === ""){
    return res.redirect("/listings");
  }
  
  const searchQuery = {
    $or: [
      {title: {$regex: q, $options: "i"}},
      {location: {$regex: q, $options: "i"}},
      {description: {$regex: q, $options: "i"}}
    ]
  };
  
  const allListings = await Listing.find(searchQuery);
  res.render("listings/index.ejs", {allListings, searchQuery: q});
};

module.exports.filterByCategory = async (req,res)=>{
  let {category} = req.params;
  const validCategories = ["trending", "rooms", "iconic-cities", "mountains", "castles", "amazing-pools", "camping", "farms", "arctic", "domes", "boats"];
  
  if(!validCategories.includes(category)){
    req.flash("error", "Invalid category!");
    return res.redirect("/listings");
  }
  
  const allListings = await Listing.find({category: category});
  const categoryDisplay = category.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  res.render("listings/index.ejs", {allListings, filterCategory: category, categoryDisplay});
};