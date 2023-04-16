const Student = require("../models/subject");
exports.get = function (req, res) {
  Student.find({})
    .then((rs) => {
      res.render("subjects/list", {
        items: rs,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.createForm = (req, res) => {
  res.render("subjects/form");
};
exports.save = (req, res) => {
  let s = req.body;
  let newStudent = new Student(s);
  newStudent
    .save()
    .then((rs) => {
      res.redirect("/subjects");
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.editForm = (req, res) => {
  let id = req.params.id;
  Student.findById(id)
    .then((rs) => {
      res.render("subjects/edit", {
        data: rs,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.update = (req, res) => {
  let id = req.params.id;
  let data = req.body;
  Student.findByIdAndUpdate(id, data)
    .then((rs) => res.redirect("/subjects"))
    .catch((err) => res.send(err));
};
exports.delete = (req, res) => {
  let id = req.params.id;
  Student.findByIdAndDelete(id)
    .then((rs) => res.redirect("/subjects"))
    .catch((err) => res.send(err));
};
