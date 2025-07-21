const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cron = require("node-cron");
const fetchAndStoreCrypto = require("./cron/fetchCrypto");

require("dotenv").config();
const app = express();
// fetchAndStoreCrypto(); 
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB connected");
});

app.use("/api/crypto", require("./routes/crypto"));

cron.schedule("*/2 * * * *", fetchAndStoreCrypto); // Every hour

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
