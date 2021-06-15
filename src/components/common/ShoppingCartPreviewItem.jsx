import React, { useCallback, useEffect, useState } from "react";
import Counter from "../common/Counter";
import productService from "../../services/productService";
import shoppingCartService from "../../services/shoppingCartAndWishListService";
import { Link } from "react-router-dom";
import { updateReduxShoppingCart } from "../../redux/reduxFunctions";

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
  };

  // for counter
  const [amount, setAmount] = useState(Number(prodDate.product.quantity));
  const callback = useCallback(async (amount) => {
    setAmount(amount);

    await shoppingCartService.updateProdQtyInShoppingCart(
      user_id,
      prodDate.product.productid,
      amount
    );

    // need to update redux !!
  });

  let total_price = Number(Number(product.price) * Number(amount));

  return (
    <div className="shoppingCArtProduct   d-flex justify-content-between align-items-center p-3">
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
            qty={Number(amount)}
            maxNumber={product.qty}
          />
        }
      </div>

      <div className="my-3 d-flex flex-column ">
        <h4>price: {total_price} $</h4>
        <h5>in stock : {product.qty}</h5>
      </div>
      <div className=" align-self-end ">
        <button className="btn btn-danger " onClick={removeItem}>
          remove
        </button>
      </div>
    </div>
  );
};
export default ShoppingCartPreviewItem;
