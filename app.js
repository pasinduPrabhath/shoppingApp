require("dotenv").config();
const { sendEmail } = require("./api/email");
const express = require("express");
const app = express();
const cors = require("cors"); 
app.use(cors());
// const port = 8000;
const router = require("./api/router");

app.use(express.json());
app.use("/api", router);
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
