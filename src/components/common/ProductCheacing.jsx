import React from "react";

const ProductCheacing = ({ amount, user_id, product }) => {
  return (
    <div className="  col-9  ">
      <h5 className="text-center ">procead</h5>
      <div className="row m-1 justify-content-between ">
        <button className="btn btn-secondary">add to wishlist</button>

        <button className="btn btn-primary">add to cart</button>
      </div>
    </div>
  );
};

export default ProductCheacing;
