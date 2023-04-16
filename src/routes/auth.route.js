const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth.controller");
router.get("/register",controller.register);
router.post("/register",controller.create);
router.post("/login",controller.loginUser);
router.post("/change", controller.update);

module.exports = router;