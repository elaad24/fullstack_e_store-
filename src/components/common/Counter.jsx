import React, { useState } from "react";

const Counter = ({ parentCallback, qty }) => {
  const [amount, setAmount] = useState(qty);

  return (
    <div className="">
      <h5 className="text-center ">Quantity</h5>
      <div className="row m-1 justify-content-between ">
        <button
          className="btn btn-danger"
          onClick={() => {
            amount <= 1 ? setAmount(amount) : setAmount(amount - 1);
            amount <= 1 ? parentCallback(amount) : parentCallback(amount - 1);
          }}
        >
          -
        </button>
        <span id="amount">{amount}</span>
        <button
          className="btn btn-success"
          onClick={() => {
            setAmount(amount + 1);
            parentCallback(amount + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
