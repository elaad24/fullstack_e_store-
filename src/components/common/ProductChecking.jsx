import React from "react";
import shoppingCartService from "../../services/shoppingCartAndWishListService";
import { toast } from "react-toastify";
import _ from "lodash";
import { useSelector } from "react-redux";

const ProductCheacing = ({ quantity, user_id, productid, price }) => {
  let shoppingCart = useSelector(
    (state) => state.userShoppingCart.shoppingCart.shoppingCart
  );

  let itemFromShoppingCartRedux = [];

  if (shoppingCart) {
    itemFromShoppingCartRedux = _.filter(
      shoppingCart,
      (shoppingCartProduct) => {
        return shoppingCartProduct.product.productid === productid;
      }
    );
  }

  const updateQty = async () => {
    try {
      toast.success("item qty updated ", { autoClose: 2500 });
      console.log("update QTY ");
      await shoppingCartService.updateProdQtyInShoppingCart(
        user_id,
        productid,
        quantity
      );

      console.log("DSssssssssssssssssssssssssssssssssssssssssssss");
    } catch (err) {
      console.log("err from productChecking  updateQty", err);
      return "err from productChecking updateQty ", err;
    }
  };

  const addToCart = async () => {
    try {
      console.log("add to cart ");
      await shoppingCartService.addToCart({
        quantity,
        user_id,
        productid,
        price,
      });
      toast.success("item added to shoppingcart", { autoClose: 2500 });
    } catch (err) {
      console.log("err from productChecking  addToCart", err);
      return "err from productChecking addToCart ", err;
    }
  };

  console.log("itemFromShoppingCartRedux", itemFromShoppingCartRedux);

  return (
    <div className="  col-9  ">
      <h5 className="text-center ">procead</h5>
      <div className="row m-1 justify-content-between ">
        <button className="btn btn-secondary">add to wishlist</button>

        <button
          className="btn btn-primary"
          onClick={itemFromShoppingCartRedux.length > 0 ? updateQty : addToCart}
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCheacing;
