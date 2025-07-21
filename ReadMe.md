# 🚀 Full-Stack Crypto Tracker (MERN Stack)

A full-stack cryptocurrency tracker built with the MERN stack. It fetches real-time crypto data using the [CoinGecko API](https://www.coingecko.com/), stores current and historical data in MongoDB, displays it via a React dashboard, and uses a cron job to update data every 24hours.

---

## 🛠️ Tech Stack Used

- **Frontend**: React, Axios, Bootstrap
- **Backend**: Node.js, Express.js, Axios
- **Database**: MongoDB (via Mongoose)
- **Scheduler**: `node-cron`
- **API Source**: [CoinGecko Public API](https://www.coingecko.com/)
- **Hosting**: 
  - Frontend: Vercel / Netlify
  - Backend: Render / Cyclic.sh / Railway
  - Database: MongoDB Atlas

---

## ⚙️ Setup Instructions

### 📁 1. Clone the Repository

```bash
git clone https://github.com/your-username/crypto-tracker-mern.git
cd crypto-tracker-mern
