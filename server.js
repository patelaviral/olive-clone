const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const rootDir = __dirname;

app.use(express.static(rootDir));

app.get("/", (_req, res) => {
  res.sendFile(path.join(rootDir, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
