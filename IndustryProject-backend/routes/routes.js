const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs").promises;

async function loadSafePlaces() {
  const jsonData = await fs.readFile(
    path.join(__dirname, "../data/safeplaces.json"),
    "utf8"
  );
  return JSON.parse(jsonData);
}

router.get("/safeplaces", async (req, res) => {
  try {
    const data = await loadSafePlaces();
    res.json(data.safePlaces);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error reading safe places data");
  }
});

module.exports = router;
