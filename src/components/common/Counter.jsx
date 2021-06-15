import React, { useState } from "react";

const Counter = ({ parentCallback, qty, maxNumber }) => {
  // maxNumber is the highest number that the counter can reach - is to set to the qty of product in stock
  const [amount, setAmount] = useState(Number(qty));
  console.log("Qty from counter ", amount);
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
            amount >= maxNumber
              ? setAmount(Number(amount))
              : setAmount(Number(amount) + Number(1));
            amount >= maxNumber
              ? parentCallback(Number(amount))
              : parentCallback(Number(amount) + Number(1));
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
