// get users
const fs = require("fs");


// empty user array
let users = [];     
const USERS_FILE = "users.json";

//check if JSON file exists
if (fs.existsSync(USERS_FILE)) {
  users = JSON.parse(fs.readFileSync(USERS_FILE, "utf8"));
}

const getUsers = (req,res,next) => {
    res.json(users);
};

// add user
const addUser = async (req,res,next) => {
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));  //JSON.stringify(value, replacer, space)
  res.status(201).json({ message: "User added!", user: newUser });
};

// Update a user
const updateUser = async (req,res,next) => {
const userId = parseInt(req.params.id); //take userId from parameters.
const user = users.find((u) => u.id === userId);   //search if any id present in user array matches the user id in param
if (!user) {
  return res.status(404).json({ error: "User not found" });
}

user.name = req.body.name;  //if it matches , change current name to present in body
fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
res.json({ message: "User updated!", user });
};

// Delete a user
const deleteUser = async (req,res,next) => {
const userId = parseInt(req.params.id);  
users = users.filter((u) => u.id !== userId);
fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
res.json({ message: "User deleted!" });
};



const usersController = {
    getUsers,
    addUser,
    updateUser,
    deleteUser
}

module.exports=usersController;