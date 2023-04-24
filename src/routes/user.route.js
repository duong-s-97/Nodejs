const express = require("express");
let router = express.Router();
let userController = require("../controllers/user.controller");

router.get("/", userController.get);
router.get("/create", userController.createForm);
router.post("/create", userController.save);
router.get("/list", userController.list);

module.exports = router;
