import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import Counter from "./Counter";
import ProductCheacing from "./ProductChecking";
import _ from "lodash";
import { CartCheck } from "react-bootstrap-icons";

const ProductFull = ({
  product: { name, price, pic, description, qty, category, seller_id },
  productId,
  user_id,
}) => {
  const product = { name, price, pic, description, qty, category, seller_id };

  let shoppingCartItemQty = null;
  let counterQty = null;
  // take info from redux
  let shoppingCart = useSelector(
    (state) => state.userShoppingCart.shoppingCart.shoppingCart
  );
  if (shoppingCart) {
    let shoppingCartItem = _.filter(shoppingCart, (shoppingCartProduct) => {
      return shoppingCartProduct.product.productid == productId;
    });

    if (shoppingCartItem.length != 0) {
      shoppingCartItemQty = Number(shoppingCartItem[0].product.quantity);
    }
  }
  let inShoppingCart = false;

  if (!shoppingCart) {
    counterQty = 1;
  } else if (shoppingCart && shoppingCartItemQty) {
    counterQty = shoppingCartItemQty;
    inShoppingCart = true;
  } else if (shoppingCart && !shoppingCartItemQty) {
    counterQty = 1;
  }

  const [amount, setAmount] = useState(counterQty);

  const callback = useCallback((amount) => {
    setAmount(amount);
  }, []);

  return (
    <div className="">
      <div className="row">
        <h3 className="mx-auto">
          {inShoppingCart ? (
            <div className="text-primary mx-auto">
              <span class="badge badge-pill badge-primary">
                In shopping-cart <CartCheck className="ml-1" size={24} />
              </span>
            </div>
          ) : (
            ""
          )}
        </h3>
      </div>
      <div className=" d-lg-flex">
        <div className="col-lg-6  ">
          <div className="card mr-1 " style={{ ml: "", width: "100%" }}>
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
          <p className="mb-0">seller id : {seller_id}</p>
          <p className="mb-0">in stock : {qty} </p>

          <p>
            price per unit : <b> {price} $</b>
          </p>
          <Counter
            parentCallback={callback}
            qty={counterQty}
            key={productId}
            maxNumber={qty}
          />
          <div className="row">
            <p className=" my-2 mx-auto">total price : {amount * price}$</p>
          </div>
          {user_id ? (
            <ProductCheacing
              quantity={amount}
              user_id={user_id}
              productid={productId}
              price={price}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductFull;
