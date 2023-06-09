const { Router } = require("express");
const {
  CreateStudent,
  CreateBook,
  Relation,
  Pagination,
  UploadFile,
  GetAllStudents,
} = require("../controllder/controller");

const BaseRouter = Router();

BaseRouter.get("/relation2", Relation);
BaseRouter.post("/create", CreateStudent);
BaseRouter.post("/createbooks", CreateBook);
BaseRouter.get("/getstudents", GetAllStudents);
// paginate route
BaseRouter.post("/paginate", Pagination);

// upload file route
BaseRouter.post("/upload/file", UploadFile);
module.exports = {
  BaseRouter,
};
