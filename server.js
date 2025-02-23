// import required modules
const express = require("express");
const fs = require("fs");

// Create instance of express
const app = express();

// define a port number ( usually in env file)
const PORT = 3005;

// middleware to parse JSON requests
app.use(express.json());


// Middleware for logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);   //Returns a date as a string value in ISO format
  next();
});

// empty user array
let users = [];     
const USERS_FILE = "users.json";

//check if JSON file exists
if (fs.existsSync(USERS_FILE)) {
  users = JSON.parse(fs.readFileSync(USERS_FILE, "utf8"));
}



// Validation Middleware
const validateUser = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json({ error: "Name is required" });
  }
  next();
};

// get users
app.get("/users", (req, res) => {
      res.json(users);
  });

// add user
app.post("/users", validateUser , (req, res) => {
    const newUser = { id: users.length + 1, name: req.body.name };
    users.push(newUser);
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));  //JSON.stringify(value, replacer, space)
    res.status(201).json({ message: "User added!", user: newUser });
  });

// Update a user
app.put("/users/:id", validateUser, (req, res) => {
  const userId = parseInt(req.params.id); //take userId from parameters.
  const user = users.find((u) => u.id === userId);   //search if any id present in user array matches the user id in param
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  user.name = req.body.name;  //if it matches , change current name to present in body
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
  res.json({ message: "User updated!", user });
});

// Delete a user
app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);  
  users = users.filter((u) => u.id !== userId);
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
  res.json({ message: "User deleted!" });
});


  // Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });



// Now you can use postman to post users and add them into the users array.