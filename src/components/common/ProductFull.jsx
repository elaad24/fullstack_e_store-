import React, { useCallback, useState } from "react";
import Counter from "./Counter";
import ProductCheacing from "./ProductCheacing";

const ProductFull = ({
  product: { name, price, pic, description, qty, category, seller_id },
  productId,
  user_id,
}) => {
  const product = { name, price, pic, description, qty, category, seller_id };

  const [amount, setAmount] = useState(0);

  const callback = useCallback((amount) => {
    setAmount(amount);
  }, []);

  return (
    <div className="flex d-flex">
      <div className="col-lg-6">
        <div className="card mr-1" style={{ ml: "", width: "100%" }}>
          <img
            className="card-img-top"
            height="300 em "
            width="150 em"
            src={pic}
            alt={name}
          />
        </div>
      </div>
      <div className="col-lg-5">
        <h4>{name}</h4>
        <h3>{description}</h3>
        <hr />
        <h5>category : {category}</h5>
        <p className="mb-0">prod id :{productId} </p>
        <p className="mb-0">seller id : {seller_id}</p>

        <p>
          price per unit : <b> {price} $</b>
        </p>

        <Counter parentCallback={callback} />
        <p>total price - {amount * price}$</p>
        {user_id ? (
          <ProductCheacing
            amount={amount}
            user_id={user_id}
            product={product}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProductFull;
