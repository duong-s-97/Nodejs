const User = require("../models/user");
const bcrypt = require("bcryptjs");
exports.register = (req,res)=>{
    res.render("auth/login");
};
exports.create = async (req,res)=>{
    // kiem tra email da co hay chua
    let existUser = await User.findOne({email: req.body.email});
    if(existUser) res.status(422).send("Email is exist");
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password,salt);
    // save to db
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    });
    user.save().then(rs=>res.send("done")).catch(err=>res.send(err));
}

exports.loginUser = async (req,res)=>{
    let existUser = await User.findOne({email: req.body.email});
    if(!existUser) return res.status(401).send("Email or password is not correct");
    const checkPassword = await bcrypt.compare(req.body.password,existUser.password);
    if(!checkPassword) return res.status(401).send("Email or password is not correct");
    res.send(`User ${existUser.name} has logged in <button >Change password</button>`);

}

exports.update = (req, res) => {
    let id = req.params.id;
    let data = req.body;
    Student.findByIdAndUpdate(id, data)
      .then((rs) => res.redirect("/auth/login"))
      .catch((err) => res.send(err));
  };