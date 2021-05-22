import React, { useState } from "react";

const Counter = ({ parentCallback }) => {
  const [amount, setAmount] = useState(0);

  return (
    <div className="  col-9  ">
      <h5 className="text-center ">Quantity</h5>
      <div className="row m-1 justify-content-between ">
        <button
          className="btn btn-danger"
          onClick={() => {
            amount <= 0 ? setAmount(amount) : setAmount(amount - 1);
            amount <= 0 ? parentCallback(amount) : parentCallback(amount - 1);
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
