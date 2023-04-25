const express = require("express");
const dotenv = require("dotenv").config();
const connecDB = require("./mongo");
const { BaseRouter } = require("./routes/routes");

const app = express();
connecDB();

const Port = process.env.PORT || 9000;
app.use(express.json());

app.use("/v1", BaseRouter);

app.listen(Port, () => {
  console.log(`Server is Running on http://localhost: ${Port}`);
});
