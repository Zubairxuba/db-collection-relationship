const { Router } = require("express");
const Pagination = require("../controllder/paginate.controller");

const PaginateRoute = Router();

PaginateRoute.post("/paginate", Pagination);

module.exports = PaginateRoute;
