// import required modules
const express = require("express");
const routes= require('./routes');

// Create instance of express
const app = express();

// define a port number ( usually in env file)
const PORT = process.env.PORT || 3005;

// middleware to parse JSON requests and CORS
app.use(express.json());


// Middleware for logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);   //Returns a date as a string value in ISO format
  next();
});

app.get("/", (req, res) => {
  res.send("Working HOME PAGE");
});

//init routes
routes.initRoute(app);

  // Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
