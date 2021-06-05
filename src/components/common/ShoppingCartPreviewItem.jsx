import React, { useCallback, useEffect, useState } from "react";
import Counter from "../common/Counter";
import productService from "../../services/productService";
import shoppingCartService from "../../services/shoppingCartAndWishListService";
import { Link } from "react-router-dom";

const ShoppingCartPreviewItem = ({ prodDate, user_id }) => {
  // getting info about product

  const [product, setProduct] = useState({});

  useEffect(async () => {
    //prodResponse = all the data from the server about the prod incloud req info
    // could use for future bug hunt

    let productRespons = await productService.getProduct(
      prodDate.product.productid
    );
    setProduct(productRespons.data);
  }, []);

  //remove item from shopping cart
  const removeItem = async () => {
    await shoppingCartService.removeProdFromShoppinCart(
      user_id,
      prodDate.product.productid
    );
    console.log(product.name, " removed ");
  };

  // for counter
  const [amount, setAmount] = useState(prodDate.product.quantity);

  const callback = useCallback((amount) => {
    setAmount(amount);
  }, []);

  return (
    <div className="shoppingCArtProduct d-flex justify-content-between align-items-center p-3">
      <div className="">
        <img src={product.pic} alt={product.name} width="150em" />
      </div>

      <div class="">
        <Link to={`../item/?id=${prodDate.product.productid}`}>
          <h5 class="card-title text-dark ">
            {" "}
            <u>{product.name}</u>
          </h5>
          <p class="card-text text-dark">{product.description}</p>
        </Link>
      </div>

      <div className="my-3 col-2">
        {
          <Counter
            key={prodDate.product._id}
            parentCallback={callback}
            qty={amount}
          />
        }
      </div>
      <div className="my-3 d-flex flex-column justify-content-around">
        <h4>price: {product.price} $</h4>
        <h5>in stock : {product.qty}</h5>
      </div>
      <div>
        <button className="btn btn-danger" onClick={removeItem}>
          remove
        </button>
      </div>
    </div>
  );
};
export default ShoppingCartPreviewItem;
