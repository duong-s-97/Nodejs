let mongoose = require("mongoose");

let student = new mongoose.Schema({
  name: {
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
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 100,
  },
  tel: {
    type: String,
    minLength: 10,
    maxLength: 30,
    validate: {
      validator: (y) => {
        const phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
        const digits = p.replace(/\D/g, "");
        return phoneRe.test(digits);
      },
      message: (t) => `${i.value} không phải là số điện thoại`,
    },
  },
  class: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 255,
  },
  room: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 255,
  },
});

module.exports = mongoose.model("student", student);
