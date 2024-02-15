const path = require("path");
const authRouter = require("./auth/auth.router");
const employeesRouter = require("./employees/employees.router");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");

const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");
const app = express();

app.use(express.json());

app.use("/auth", authRouter)
app.use("/employees", employeesRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;