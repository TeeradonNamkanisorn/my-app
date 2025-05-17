require("dotenv").config();
const express = require("express");
const PORT = 7070;

const app = express();

app.get("/", (req, res) => {
  const msg = `The env variables are DB_USER=${process.env.DB_USER}, DB_PASSWORD=${process.env.DB_PASSWORD} `;
  res.send(msg);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
