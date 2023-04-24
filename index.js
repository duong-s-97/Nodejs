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

const userRouter = require("./src/routes/user.route");
app.use("/user", userRouter);


// app route
app.get("/", function (req, res) {
  res.render('users/home');
});
