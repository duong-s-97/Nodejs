let mongoose = require("mongoose");

let subject = new mongoose.Schema({
  subjectName: {
    type: String,
    required: true,
    minLength: [5, "Tên có độ dài tối thiểu là 5"],
    maxLength: 255,
  },
  hours: {
    type: Number,
    required: true,
    min: 1,
    max: 100,
  },
  teacherName: {
    type: String,
    required: true,
    minLength: [5, "Tên có độ dài tối thiểu là 5"],
    maxLength: 255,
  },
  email: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 255,
    unique: [true, "Email đã tồn tại"],
  },
  tel: {
    type: String,
    minLength: 10,
    maxLength: 30,

  },
});

module.exports = mongoose.model("subject", subject);
