import React from "react";
import { Link } from "react-router-dom";

const Product = ({
  product: {
    _id,
    category,
    description,
    name,
    pic,
    price,
    qty,
    seller_id,
    time_stamp,
  },
}) => {
  return (
    <Link to={`/item/?id=${_id}`}>
      <div className="col-md-6 col-lg-4 mt-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            height="300 em "
            width="150 em"
            src={pic}
            alt={name}
          />
          <div className="card-body d-flex flex-column align-items-center pb-2">
            <h5 className="card-title">{name}</h5>
            <p className="card-title mb-0">
              <b> {price} $</b>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
