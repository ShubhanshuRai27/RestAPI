const express = require("express");
const router = express.Router();

const usersController =require("../controller/users.controller");
const validate =require('../middleware/validate');


router.get('/',usersController.getUsers);
router.post('/',validate,usersController.addUser);
router.put('/:id',usersController.updateUser);
router.delete('/:id',usersController.deleteUser);

module.exports = router;