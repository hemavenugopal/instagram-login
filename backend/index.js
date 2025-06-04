const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

let username = "Raj";
let password = "123";
app.post("/login", (req, res) => {
  console.log(req.body.userName);
  console.log(req.body.password);

  if (req.body.userName === username && req.body.password === password) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(5000, () => {
  console.log("Server started...");
});
