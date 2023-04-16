const Student = require("../models/student");

// async khai báo hàm xử lý bất đồng bộ 

exports.get = async function (req, res) {
  try {
    // await chờ kết quả của lệnh chứa await chạy xong mới chạy lệnh khác
    // chỉ dùng khi công việc bắt buộc phải trở kết quả từ trên xuống mới có thể làm việc tiếp theo
    const ls1 = await Student.find({});
    const ls2 = await Student.find({name:"A"});
    // sau khi có kết quả từ await mới chạy 
    res.send({
      list1: ls1,
      list2: ls2,
    })
  }catch (err) {
    res.send(err)
  }
}

exports.get = function (req, res) {
  Student.find({})
    .then((rs) => {
      res.render("student/home", {
        items: rs,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.createForm = (req, res) => {
  res.render("student/form");
};
exports.save = (req, res) => {
  let s = req.body;
  let newStudent = new Student(s);
  newStudent
    .save()
    .then((rs) => {
      res.redirect("/students");
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.editForm = (req, res) => {
  let id = req.params.id;
  Student.findById(id)
    .then((rs) => {
      res.render("student/edit", {
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
    .then((rs) => res.redirect("/students"))
    .catch((err) => res.send(err));
};
exports.delete = (req, res) => {
  let id = req.params.id;
  Student.findByIdAndDelete(id)
    .then((rs) => res.redirect("/students"))
    .catch((err) => res.send(err));
};
