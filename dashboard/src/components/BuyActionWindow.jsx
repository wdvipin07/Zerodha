import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext.jsx";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);
  const [mode, setMode] = useState("BUY"); // BUY or SELL
  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = async () => {
    try {
      await axios.post("http://localhost:3000/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: mode,
      });
      closeBuyWindow();
    } catch (err) {
      alert("Order not added: " + err.message);
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="mode-toggle">
          <button
            className={mode === "BUY" ? "btn btn-blue" : "btn btn-grey"}
            onClick={() => setMode("BUY")}
          >
            Buy
          </button>
          <button
            className={mode === "SELL" ? "btn btn-red" : "btn btn-grey"}
            onClick={() => setMode("SELL")}
          >
            Sell
          </button>
        </div>
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => {
                setStockQuantity(e.target.value);
              }}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => {
                setStockPrice(e.target.value);
              }}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>
      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link
            className={mode === "BUY" ? "btn btn-blue" : "btn btn-red"}
            onClick={handleBuyClick}
          >
            {mode === "BUY" ? "Buy" : "Sell"}
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BuyActionWindow;
