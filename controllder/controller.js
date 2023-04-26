const { StudentModel, BookModel } = require("../models/student.schema");

const CreateStudent = async (req, res) => {
  const { name, age, bookId } = req.body;
  console.log(req.body);
  const student = new StudentModel({
    name,
    age,
    books: bookId,
  });

  await student.save();
  res.json({
    message: "Created Student",
    result: student,
  });
};
const CreateBook = async (req, res) => {
  const { book1, book2, book3 } = req.body;
  const book = new BookModel({
    book1,
    book2,
    book3,
  });

  await book.save();

  res.json({
    message: "Created Books",
    result: book,
  });
};

// const Relation = async (req, res) => {
//   const bookWithAuthor = await BookModel.findOne({
//     title: "Maths",
//   }).populate("author");

//   return res.status(200).json({
//     message: "relation",
//     result: bookWithAuthor,
//   });
// };

const Relation = async (req, res) => {
  const { studentId } = req.body;

  // const studentWithBooks = await StudentModel.findById({
  //   _id: studentId,
  // }).populate("books");

  const studentWithBooks = await StudentModel.findOne({
    _id: studentId,
  }).populate("books");

  console.log(studentWithBooks);
  return res.status(200).json({
    message: "Relation of Student with books",
    // CountStudents: studentswith.length,
    result: studentWithBooks,
  });
};

const Pagination = async (req, res) => {
  const { page_no, limit } = req.query;
  console.log(req.query);

  const page = parseInt(page_no) || 1;
  const size = parseInt(limit);

  const options = {
    page: page || 1,
    limit: size || 5,
  };

  const students = await StudentModel.paginate(
    {},

    {
      populate: "books",
      offset: page * size - size,
      limit: size,

      options,
    }
  );
  res.json(students);
};

const UploadFile = async (req, res) => {
  res.send("upload files");
};

const GetAllStudents = async (req, res) => {
  const students = await StudentModel.find().populate("books");

  return res.status(200).json({
    message: "All Students",
    result: students,
  });
};

module.exports = {
  CreateBook,
  CreateStudent,
  // Relation,
  Relation,
  Pagination,
  UploadFile,
  GetAllStudents,
};
