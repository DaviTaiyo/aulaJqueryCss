const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

//chamar o modulo db.js

const app = express();

app.use(express.json());