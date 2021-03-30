const express = require("express");
const UserController = require("./src/controllers/user.controllers");

const router = express();

//find and show all users
router.get("/usuarios", UserController.getAll);

//create user
router.post("/usuarios", UserController.save);

//find one user by id
router.get("/usuarios/:id", UserController.getById);

//Put user by id
router.put("/usuarios/:id", UserController.update);

//Delete user by id
router.delete("/usuarios/:id", UserController.delete);

module.exports = router;
