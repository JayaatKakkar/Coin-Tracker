const mongoose = require("mongoose");

const CryptoHistorySchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  data: [Object]
});

module.exports = mongoose.model("CryptoHistory", CryptoHistorySchema);