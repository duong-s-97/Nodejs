const express = require("express");
// connect mongodb
const database = require("./src/database");
const app = express();

const PORT = process.env.PORT || 4200;

app.listen(PORT, () => {
  console.log("Server is running...");
});

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const studentRouter = require("./src/routes/student.route");
const subjectRouter = require("./src/routes/subjects.route");
const authRouter = require("./src/routes/auth.route");
app.use("/auth", authRouter);

app.use("/students", studentRouter);
app.use("/subjects", subjectRouter);

// app route
app.get("/", function (req, res) {
  const Student = require("./src/models/student");
  Student.find({})
    .then((rs) => {
      res.render("student/home", {
        items: rs,
      });
    })
    .catch((err) => {
      res.send(err);
    });
});
