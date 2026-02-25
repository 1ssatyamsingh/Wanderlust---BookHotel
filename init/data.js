const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    category: "amazing-pools",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu, California",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.0633893231606!2d-118.68204!3d34.027656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82eff2ec7e7dd%3A0xd8d696b0703bd48a!2sMalibu%2C%20California!5e0!3m2!1sen!2sus!4v1234567890"
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    category: "mountains",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City, New York",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290356!2d-74.00601!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316ee45e75%3A0xc80b8f06e177fe62!2sNew%20York%20City!5e0!3m2!1sen!2sus!4v1234567890"
  },
  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    category: "amazing-pools",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen, Colorado",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3091.5584627200925!2d-106.8175!3d39.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x873b8e28bc0b0001%3A0x4e9e7f3e7d5e5e5e!2sAspen%2C%20Colorado!5e0!3m2!1sen!2sus!4v1234567890"
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    category: "amazing-pools",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence, Italy",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.7788887776606!2d11.255814!3d43.7696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a556f86577185%3A0xa6f4f34b95e27e1!2sFlorence%2C%20Italy!5e0!3m2!1sen!2sit!4v1234567890"
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    category: "amazing-pools",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland, Oregon",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2826.0388825289765!2d-122.6762!3d45.5152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950a569733ac03%3A0x2c4f347629b29f97!2sPortland%2C%20Oregon!5e0!3m2!1sen!2sus!4v1234567890"
  },
  {
    title: "Beachfront Paradise",
    description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    category: "amazing-pools",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun, Mexico",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.5627556606236!2d-87.07!3d21.16!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c27e1e7f7f7f7%3A0x5e5e5e5e5e5e5e5e!2sCancun%2C%20Mexico!5e0!3m2!1sen!2smx!4v1234567890"
  },
  {
    title: "Rustic Cabin by the Lake",
    description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    category: "camping",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe, Nevada",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.2383726945364!2d-120.09!3d39.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809b7a8f7f7f7f7f%3A0x1e1e1e1e1e1e1e1e!2sLake%20Tahoe%2C%20Nevada!5e0!3m2!1sen!2sus!4v1234567890"
  },
  {
    title: "Luxury Penthouse with City Views",
    description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    category: "rooms",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles, California",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.3842087887446!2d-118.24!3d34.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da25%3A0xce21b4b2e5711ce9!2sLos%20Angeles%2C%20California!5e0!3m2!1sen!2sus!4v1234567890"
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    category: "rooms",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier, Switzerland",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.2842087887446!2d7.23!3d46.09!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e9b7f7f7f7f7f%3A0x2e2e2e2e2e2e2e2e!2sVerbier%2C%20Switzerland!5e0!3m2!1sen!2sch!4v1234567890"
  },
  {
    title: "Safari Lodge in the Serengeti",
    description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    category: "arctic",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park, Tanzania",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.7542087887446!2d34.55!3d-2.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1883fa73e85e3d7d%3A0x2e2e2e2e2e2e2e2e!2sSerengeti%20National%20Park%2C%20Tanzania!5e0!3m2!1sen!2stz!4v1234567890"
  },
  {
    title: "Private Island Retreat",
    description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    category: "boats",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0442087887446!2d177.97!3d-17.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e5b547f7f7f7f7f%3A0x2e2e2e2e2e2e2e2e!2sFiji!5e0!3m2!1sen!2sfj!4v1234567890"
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description: "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    category: "rooms",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds, United Kingdom",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.3842087887446!2d-1.89!3d51.84!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870f5f5f5f5f5f5%3A0x2e2e2e2e2e2e2e2e!2sCotswolds%2C%20United%20Kingdom!5e0!3m2!1sen!2sgb!4v1234567890"
  },
  {
    title: "Historic Brownstone in Boston",
    description: "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    category: "iconic-cities",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston, Massachusetts",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.2742087887446!2d-71.06!3d42.36!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d18ceb5%3A0xb1b1b1b1b1b1b1b1!2sBoston%2C%20Massachusetts!5e0!3m2!1sen!2sus!4v1234567890"
  },
  {
    title: "Beachfront Bungalow in Bali",
    description: "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    category: "amazing-pools",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali, Indonesia",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.3842087887446!2d115.19!3d-8.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7192f97d6b5e9%3A0x1e1e1e1e1e1e1e1e!2sBali%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1234567890"
  },
  {
    title: "Mountain View Cabin in Banff",
    description: "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    category: "mountains",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff, Canada",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.8342087887446!2d-116.21!3d51.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537a18f7f7f7f7f7%3A0x1e1e1e1e1e1e1e1e!2sBanff%2C%20Canada!5e0!3m2!1sen!2sca!4v1234567890"
  },
  {
    title: "Art Deco Apartment in Miami",
    description: "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    category: "trending",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami, Florida",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.9342087887446!2d-80.19!3d25.79!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad1eada81e95%3A0x3d3d3d3d3d3d3d3d!2sMiami%2C%20Florida!5e0!3m2!1sen!2sus!4v1234567890"
  },
  {
    title: "Tropical Villa in Phuket",
    description: "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    category: "amazing-pools",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket, Thailand",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.3342087887446!2d98.29!3d7.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30503f7c7f7f7f7f%3A0x1e1e1e1e1e1e1e1e!2sPhuket%2C%20Thailand!5e0!3m2!1sen!2sth!4v1234567890"
  },
  {
    title: "Historic Castle in Scotland",
    description: "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    category: "castles",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands, Scotland",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.3842087887446!2d-4.42!3d57.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488785a5a5f5f5f5%3A0x1e1e1e1e1e1e1e1e!2sScottish%20Highlands%2C%20Scotland!5e0!3m2!1sen!2sgb!4v1234567890"
  },
  {
    title: "Farm Stay Experience",
    description: "Experience authentic farm life in this charming farmhouse on a working organic farm.",
    category: "farms",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 600,
    location: "Tuscany, Italy",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.0342087887446!2d11.88!3d43.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a123456789ab0%3A0x1e1e1e1e1e1e1e1e!2sTuscany%2C%20Italy!5e0!3m2!1sen!2sit!4v1234567890"
  },
  {
    title: "Arctic Cabin Adventure",
    description: "Experience the magic of the Northern Lights from this cozy arctic cabin.",
    category: "arctic",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Lapland, Finland",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2225.3342087887446!2d25.75!3d67.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45d2e7c7c7c7c7c7%3A0x1e1e1e1e1e1e1e1e!2sLapland%2C%20Finland!5e0!3m2!1sen!2sfi!4v1234567890"
  },
  {
    title: "Desert Dome Luxury",
    description: "Sleep under the stars in this luxurious geodesic dome in the desert.",
    category: "domes",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "Joshua Tree, California",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367.2842087887446!2d-116.34!3d34.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db3d7f7f7f7f7f%3A0x1e1e1e1e1e1e1e1e!2sJoshua%20Tree%2C%20California!5e0!3m2!1sen!2sus!4v1234567890"
  },
  {
    title: "Yacht Getaway",
    description: "Charter this luxurious yacht for sailing the Caribbean islands.",
    category: "boats",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Caribbean",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8342087887446!2d-64.90!3d18.20!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c90f7f7f7f7f7f7%3A0x1e1e1e1e1e1e1e1e!2sCaribbean!5e0!3m2!1sen!2sus!4v1234567890"
  },
  {
    title: "Camping Glamping Tent",
    description: "Experience glamping at its finest with this unique safari tent.",
    category: "camping",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Namib Desert, Namibia",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.0842087887446!2d16.31!3d-23.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8df7f7f7f7f7f7%3A0x1e1e1e1e1e1e1e1e!2sNamib%20Desert%2C%20Namibia!5e0!3m2!1sen!2sna!4v1234567890"
  },
  {
    title: "Tokyo Urban Apartment",
    description: "Modern apartment in the heart of Tokyo with access to best restaurants and culture.",
    category: "rooms",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo, Japan",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.9942087887446!2d139.69!3d35.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x74002a99826d3f7b%3A0xaf5a7a7a7a7a7a7a!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sjp!4v1234567890"
  },
  {
    title: "Venice Canal House",
    description: "Stay in an authentic Venetian palace overlooking the Grand Canal.",
    category: "iconic-cities",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Venice, Italy",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.2542087887446!2d12.33!3d45.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1daf4c3873b%3A0xb4b4b4b4b4b4b4b4!2sVenice%2C%20Italy!5e0!3m2!1sen!2sit!4v1234567890"
  }
];

module.exports = { data: sampleListings };