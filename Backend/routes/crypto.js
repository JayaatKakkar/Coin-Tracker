const express = require("express");
const axios = require("axios");
const CryptoCurrent = require("../models/CryptoCurrent");
const router = express.Router();

router.get("/live", async (req, res) => {
  try {
    const data = await CryptoCurrent.find();
    console.log(data);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;