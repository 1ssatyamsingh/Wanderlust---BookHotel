const mongoose = require("mongoose");
const initData =  require("./data.js");
const Listing  = require("../models/listing.js");
const User = require("../models/user.js");

if(process.env.NODE_ENV != "production"){
  require("dotenv").config();
}

const dbUrl = process.env.ATLASDB_URL || 'mongodb://127.0.0.1:27017/wanderlust';

main().then(()=>{
  console.log("connected to db");
})
.catch((err)=>{
  console.log("error in db", err);
})

async function main(){
  await mongoose.connect(dbUrl);
};

const initDB = async () =>{
  try {
    await Listing.deleteMany({});
    console.log("Cleared all existing listings");
    
    // Get or create a default user
    let defaultUser = await User.findOne({username: "admin"});
    if (!defaultUser) {
      const newUser = new User({
        email: "admin@wanderlust.com",
        username: "admin"
      });
      defaultUser = await User.register(newUser, "admin123");
      console.log("Created default admin user");
    }
    
    // Map all listings with the owner
    initData.data = initData.data.map((obj)=> ({...obj, owner: defaultUser._id}));
    await Listing.insertMany(initData.data);
    console.log(`✅ Data initialized successfully! Added ${initData.data.length} listings`);
    process.exit(0);
  } catch(err) {
    console.log("❌ Error during initialization:", err);
    process.exit(1);
  }
};

initDB();