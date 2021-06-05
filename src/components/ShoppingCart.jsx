import React, { useEffect, useState } from "react";
import PageHeader from "../components/common/PageHeader";
import shoppingCartService from "../services/shoppingCartAndWishListService";
import { useSelector } from "react-redux";
import ShoppingCartPreviewItem from "./common/ShoppingCartPreviewItem";

const ShoppingCart = () => {
  let user = useSelector((state) => state.userSystem);
  let user_id = user.user ? user.user.userInfo.id : "";
  // shoping cart from server . map

  /* const getShoppingCart = async () => {
    let cart = await shoppingCartService.getShoppingCart(user_id);
    console.log(cart.data.products);
    products = cart.data.products;
    console.log("products", products);
    return cart.data.products;
  }; */

  const [products, setProduct] = useState([]);

  useEffect(async () => {
    try {
      let cart = await shoppingCartService.getShoppingCart(user_id);
      console.log("products", cart.data.products);
      setProduct(cart.data.products);
    } catch (err) {
      console.log(err);
      return err;
    }
  }, []);
  console.log(products.length);
  console.log("new rrun");
  console.log(user_id);

  return (
    <div className="container">
      <PageHeader titleText="shopping cart  page" />

      <div className="row">
        <div className="col-12">
          {products.length != 0 ? (
            products.map((product) => {
              console.log(product);
              return (
                <ShoppingCartPreviewItem
                  key={product._id}
                  prodDate={product}
                  user_id={user_id}
                />
              );
            })
          ) : (
            <p>no items in shopping carrt</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
// try to build shopping cart
