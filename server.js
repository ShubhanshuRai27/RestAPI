// import required modules
const express = require("express");

// Create instance of express
const app = express();

// define a port number ( usually in env file)
const PORT = 3005;

// middleware to parse JSON requests
app.use(express.json());


// empty user array
let users = [];     

// get users
app.get("/users", (req, res) => {
    res.json(users);
  });

// add user
app.post("/users", (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json({ message: "User added!", user: newUser });
  });


  // Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });



// Now you can use postman to post users and add them into the users array.