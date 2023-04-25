const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  books: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
  },
});

const bookSchema = new mongoose.Schema({
  book1: String,
  book2: String,
  book3: String,

  // students: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Student",
  // },
});

studentSchema.plugin(paginate);

const StudentModel = mongoose.model("Student", studentSchema);
const BookModel = mongoose.model("Book", bookSchema);

module.exports = {
  StudentModel,
  BookModel,
};
