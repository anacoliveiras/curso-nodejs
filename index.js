// const { Person } = require("./person");
const dotnev = require("dotenv");

const connectToDatabase = require("./src/database/connect");

dotnev.config();

connectToDatabase();

// require("./modules/path");
// require("./modules/fs");
// require("./modules/http");
require("./modules/express");

// const person = new Person("Ana");
