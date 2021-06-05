import React from "react";
import shoppingCartService from "../../services/shoppingCartAndWishListService";
import { toast } from "react-toastify";

const ProductCheacing = ({ quantity, user_id, productid }) => {
  const addToCart = async () => {
    try {
      await shoppingCartService.addToCart({ quantity, user_id, productid });
      toast.success("item added to shoppingcart", { autoClose: 2500 });
    } catch (err) {}
  };

  return (
    <div className="  col-9  ">
      <h5 className="text-center ">procead</h5>
      <div className="row m-1 justify-content-between ">
        <button className="btn btn-secondary">add to wishlist</button>

        <button className="btn btn-primary" onClick={addToCart}>
          add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCheacing;
