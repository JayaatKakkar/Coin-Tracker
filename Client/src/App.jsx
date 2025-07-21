import React, { useEffect, useState } from 'react';
import CryptoTable from './components/CryptoTable';

function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/crypto/live") // replace with deployed backend if needed
      .then((res) => res.json())
      .then((data) => {
        setCryptoData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">📈 Top 10 Cryptocurrencies</h2>
      {loading ? <p>Loading...</p> : <CryptoTable data={cryptoData} />}
    </div>
  );
}

export default App;
