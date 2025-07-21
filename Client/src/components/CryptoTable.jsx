import React from "react";

function CryptoTable({ data }) {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price ($)</th>
            <th>Market Cap</th>
            <th>24h Change (%)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((crypto, index) => (
            <tr key={crypto.id}>
              <td>{index + 1}</td>
              <td>{crypto.name}</td>
              <td>{crypto.symbol.toUpperCase()}</td>
              <td>{crypto.price.toFixed(2)}</td>
              <td>${crypto.market_cap.toLocaleString()}</td>
              <td className={crypto.change_24h >= 0 ? 'text-success' : 'text-danger'}>
                {crypto.change_24h.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CryptoTable;
