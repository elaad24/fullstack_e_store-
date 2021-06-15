import React, { useEffect, useState } from "react";
import PageHeader from "../components/common/PageHeader";
import shoppingCartService from "../services/shoppingCartAndWishListService";
import { connect, useSelector } from "react-redux";
import ShoppingCartPreviewItem from "./common/ShoppingCartPreviewItem";
import { updateReduxShoppingCart } from "../redux/reduxFunctions";
import { Redirect } from "react-router";
import userService from "../services/userService";

const ShoppingCart = () => {
  let user = useSelector((state) => state.userSystem);
  let user_id = user.user ? user.user.userInfo.id : "";

  const [products, setProduct] = useState([]);

  let shoppingCartRedux = useSelector((state) => state.userShoppingCart);

  var shoppingCartProductRedux = shoppingCartRedux.shoppingCart
    ? shoppingCartRedux.shoppingCart.shoppingCart
    : "";

  useEffect(async () => {
    try {
      let cart = await shoppingCartService.getShoppingCart(user_id);

      setProduct(cart.data.products);
    } catch (err) {
      console.log(err);
      return err;
    }
  }, shoppingCartProductRedux);

  if (!userService.getCurrentUser()) return <Redirect to="/" />;

  // sum the total price for the all products

  let priceList = [];
  for (let i of products) {
    priceList.push(i.product.price * Number(i.product.quantity));
  }
  let totalPrice = priceList.reduce((a, b) => a + b, 0);

  return (
    <div className="container ">
      <PageHeader titleText="shopping cart  page" />

      <div className="border justify-content-center mb-1 rounded p-3">
        <div style={{ textAlign: "center" }}>
          <h5>
            <i>Finel price</i> : {totalPrice} $
          </h5>
        </div>
        <div style={{ textAlign: "right" }}>
          <div className="btn btn-success">checkout</div>
        </div>
      </div>

      <div className="row ">
        <div className="col-12">
          {products.length != 0 ? (
            <>
              {products.map((product) => {
                return (
                  <ShoppingCartPreviewItem
                    key={product._id}
                    prodDate={product}
                    user_id={user_id}
                  />
                );
              })}
            </>
          ) : (
            <p>no items in shopping carrt</p>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = () => {
  return {
    shopingCartInfo: ShoppingCart.shoppingCartProductRedux,
  };
};

export default connect(mapStateToProps)(ShoppingCart);
