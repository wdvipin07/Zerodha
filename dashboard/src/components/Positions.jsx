import React from "react";
import { useState, useEffect } from "react";

// import { positions } from "../data/data";

import axios from "axios";

const Positions = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/allPositions")
      .then((response) => {
        setPositions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching positions:", error);
      });
  }, []);

  return (
    <>
      <h3 className="title">Positions {positions.length}</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {positions.map((stock, index) => {
            const currValue = stock.price * stock.qty;
            const isProfit = currValue - stock.avg * stock.qty;
            const profitClass = isProfit > 0 ? "profit" : "loss";
            const dayChange = parseFloat(stock.day); // Automatically handles +, - signs
            const dayClass = dayChange < 0 ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg}</td>
                <td>{stock.price}</td>
                <td className={profitClass}>{isProfit.toFixed(2)}</td>
                <td className={profitClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
