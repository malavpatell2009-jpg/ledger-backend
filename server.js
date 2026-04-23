const express = require("express");
const app = express();
app.use(express.json());

app.post("/add", (req, res) => {
  const text = req.body.text.toLowerCase();

  let type = "debit";
  if (text.includes("diya") || text.includes("aapyu")) {
    type = "credit";
  }

  const amount = text.match(/\d+/)?.[0] || "0";
  const name = text
