const mongoose = require("mongoose");

const CryptoCurrentSchema = new mongoose.Schema({
  id: String,
  name: String,
  symbol: String,
  price: Number,
  market_cap: Number,
  change_24h: Number,
  last_updated: Date
});

module.exports = mongoose.model("CryptoCurrent", CryptoCurrentSchema);