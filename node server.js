const express = require("express");
const app = express();

app.use(express.json());

// health check
app.get("/", (req, res) => {
  res.send("OK");
});

app.post("/add", (req, res) => {
  const text = (req.body.text || "").toLowerCase();

  let type = "debit";
  if (text.includes("diya") || text.includes("aapyu")) {
    type = "credit";
  }

  const amount = text.match(/\d+/)?.[0] || "0";
  const name = text.split(" ")[0] || "unknown";

  res.json({ name, amount, type });
});

// IMPORTANT
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
