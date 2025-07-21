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
git clone https://github.com/jayaatKakkar/Coin-Tracker.git
cd Coin-Tracker

###Backend Setup
cd Backend
npm install / npm i

-- Create .env file and make below 
MONGODB_URI=your_URI
PORT=5000

-- Start the Server

run npm start


--- Frontend Setup

Open new Terminal
cd client
run npm install
run npm run dev


----How the Cron Job Works
The backend uses a cron job to fetch and store data at 00:00:

cron.schedule("0 0 * * *", fetchAndStoreCrypto);
You can change the interval by editing the cron expression.

--- Output
Frontend shows top 10 coins with live price, 24h change, and market cap.

MongoDB stores:

current collection: latest coin data.

history collection: historical coin data at 00:00AM.

🌐 Deployment
You can host the frontend on Vercel or Netlify, and the backend on Render or Railway. Use MongoDB Atlas for the database.


