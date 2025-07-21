const axios = require("axios");
const CryptoCurrent = require("../models/CryptoCurrent");
const CryptoHistory = require("../models/CryptoHistory");

const fetchAndStoreCrypto = async () => {
  const date=new Date();
  console.log("Fetching crypto data..."+ date.toLocaleString());
  try {
    const url = "https://api.coingecko.com/api/v3/coins/markets";
    const { data } = await axios.get(url, {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 10,
        page: 1
      }
    });

    await CryptoCurrent.deleteMany({});
    await CryptoCurrent.insertMany(data.map(c => ({
      id: c.id,
      name: c.name,
      symbol: c.symbol,
      price: c.current_price,
      market_cap: c.market_cap,
      change_24h: c.price_change_percentage_24h,
      last_updated: new Date(c.last_updated)
    })));

    await CryptoHistory.create({ data });

    console.log("Data fetched and stored");
  } catch (err) {
    console.error("Error fetching crypto data:", err.message);
  }
};

module.exports = fetchAndStoreCrypto;