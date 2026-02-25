# Wanderlust - Travel Listings Platform

A full-stack web application for browsing, creating, and reviewing travel listings with location maps and category-based filtering.

## 🌟 Features

- **User Authentication**: Secure signup and login with Passport.js
- **Listing Management**: Create, read, update, and delete travel listings
- **Category Filtering**: Browse listings by 11 different categories (Trending, Rooms, Mountains, Castles, etc.)
- **Search Functionality**: Search listings by title, location, or description
- **Review System**: Leave ratings and comments on listings
- **Map Integration**: Google Maps embed for each listing location
- **Image Uploads**: Upload listing images to Cloudinary
- **Tax Display Toggle**: Toggle GST display on listing prices
- **Responsive Design**: Mobile-friendly interface with Bootstrap
- **Session Management**: Express-session with MongoDB store
- **Authorization**: Owner-only editing/deletion, author-only review deletion

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: Passport.js with Local Strategy
- **Frontend**: EJS templates, Bootstrap 5
- **File Storage**: Cloudinary
- **Validation**: Joi
- **Session**: Express-session with MongoDB store
- **Other**: Multer (file uploads), Connect-Flash (flash messages)

## 📋 Prerequisites

- Node.js v20.17.0 or higher
- MongoDB Atlas account or local MongoDB
- Cloudinary account for image uploads
- Git

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd MajorProject
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create `.env` file** in the root directory:

   ```
   NODE_ENV=development
   ATLASDB_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/wanderlust
   SECRET=your_session_secret_key_here
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   ```

4. **Initialize the database with sample data**
   ```bash
   node init/index.js
   ```

## 📖 How to Run

1. **Start the development server**

   ```bash
   nodemon app.js
   ```

2. **Open in browser**
   ```
   http://localhost:8080
   ```

## 📊 Database Management

### Clean All Data

Removes all listings and reviews from the database:

```bash
node init/cleanup.js
```

### Reinitialize Database

Adds 20 sample listings with maps and categories:

```bash
node init/index.js
```

**Note**: Running `init/index.js` automatically clears existing listings before adding new ones.

## 📁 Project Structure

```
MajorProject/
├── app.js                 # Main Express application
├── middleware.js          # Custom middleware (auth, validation)
├── cloudConfig.js         # Cloudinary configuration
├── schema.js              # Joi validation schemas
├── package.json           # Dependencies and scripts
├── controllers/           # Request handlers
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
├── models/                # MongoDB schemas
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── routes/                # API routes
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── views/                 # EJS templates
│   ├── layouts/
│   │   └── boilerplate.ejs
│   ├── includes/
│   │   ├── navbar.ejs
│   │   ├── footer.ejs
│   │   └── flash.ejs
│   ├── listings/
│   │   ├── index.ejs
│   │   ├── show.ejs
│   │   ├── new.ejs
│   │   └── edit.ejs
│   ├── users/
│   │   ├── login.ejs
│   │   └── signup.ejs
│   └── error.ejs
├── public/                # Static files
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
├── utils/                 # Utility functions
│   ├── ExpressError.js
│   └── wrapAsync.js
└── init/                  # Database initialization
    ├── data.js
    ├── index.js
    └── cleanup.js
```

## 🎯 Usage

### User Registration & Login

1. Click "Sign Up" in navbar
2. Create account with username, email, and password
3. Login with credentials
4. After login, access "Airbnb your home" to create listings

### Create a Listing

1. Navigate to "Airbnb your home"
2. Fill in details:
   - Title
   - Description
   - Category (required)
   - Price
   - Location
   - Image upload
   - Map embed code (optional)
3. Click "Add"

### Filter Listings

- Click category icons at the top (Trending, Mountains, etc.)
- Use search bar to find by title, location, or description

### View Listing Details

1. Click on any listing card
2. View:
   - Full description
   - Location map
   - Existing reviews
3. Leave your own review (if logged in)

### Edit/Delete Listings

- Only listing owner can edit or delete
- Click "Edit" or "Delete" button on listing detail page

## 🔐 Authentication

- Uses Passport.js with Local Strategy
- Passwords hashed with salt
- Session stored in MongoDB
- Automatic redirect to login if accessing protected routes

## 🗺 Map Integration

Each listing can have an embedded Google Maps iframe. To add:

1. Go to Google Maps
2. Search for location
3. Click Share → Embed a map
4. Copy the embed URL (src attribute)
5. Paste in listing form's "Map Embed Code" field

## 🎨 Categories

1. **Trending** - Popular destinations
2. **Rooms** - Room rentals
3. **Iconic Cities** - Famous cities
4. **Mountains** - Mountain retreats
5. **Castles** - Historic castles
6. **Amazing Pools** - Places with pools
7. **Camping** - Camping sites
8. **Farms** - Farm stays
9. **Arctic** - Arctic experiences
10. **Domes** - Geodesic domes
11. **Boats** - Boat rentals

## 🐛 Troubleshooting

### Listings not showing on startup

- Ensure `.env` file is properly configured
- Run `node init/index.js` to initialize data
- Check MongoDB connection

### Images not uploading

- Verify Cloudinary credentials in `.env`
- Check file format (PNG, JPG, JPEG supported)

### Map not displaying

- Ensure map embed URL is in correct format
- URL should start with `https://www.google.com/maps/embed?pb=`

### Cannot login

- Verify MongoDB connection
- Check if user account exists
- Clear browser session cookies

## 📝 Sample Credentials

After running `init/index.js`, a default admin account is created:

- **Username**: admin
- **Email**: admin@wanderlust.com
- **Password**: admin123

## ⚙️ Environment Variables

| Variable           | Description              | Example                  |
| ------------------ | ------------------------ | ------------------------ |
| `NODE_ENV`         | Environment mode         | development / production |
| `ATLASDB_URL`      | MongoDB Atlas connection | mongodb+srv://...        |
| `SECRET`           | Session secret key       | any random string        |
| `CLOUD_NAME`       | Cloudinary account name  | your_cloud_name          |
| `CLOUD_API_KEY`    | Cloudinary API key       | your_api_key             |
| `CLOUD_API_SECRET` | Cloudinary API secret    | your_api_secret          |

## 🚢 Deployment

For production deployment:

1. Set `NODE_ENV=production`
2. Use production MongoDB Atlas cluster
3. Configure Cloudinary production account
4. Set secure session secret
5. Deploy to hosting (Heroku, AWS, DigitalOcean, etc.)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Created as a major project for travel listings platform.

## 🤝 Contributing

Feel free to fork, submit issues, and create pull requests.

---

**Version**: 1.0.0  
**Last Updated**: February 25, 2026
