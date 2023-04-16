const express = require("express");
let router = express.Router();
let subjectRouter = require("../controllers/subject.controller");
router.get("/", subjectRouter.get);
router.get("/create-subject", subjectRouter.createForm);
router.post("/create-subject", subjectRouter.save);
router.get("/edit-subject/:id", subjectRouter.editForm);
router.post("/edit-subject/:id", subjectRouter.update);
router.post("/delete-subject/:id", subjectRouter.delete);

module.exports = router;
