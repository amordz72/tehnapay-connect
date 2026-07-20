require("dotenv").config();

const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api", require("./routes/api"));

app.listen(PORT, () => {
  console.log(`✅ Agent started on http://localhost:${PORT}`);
});
