import React from "react";
import PageHeader from "./common/PageHeader";
import userService from "../services/userService";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import productService from "../services/productService";
import { useEffect } from "react";
import { useState } from "react";
import Product from "./common/ProductCard";

const Profile = () => {
  let user = useSelector((state) => state.userSystem);
  let user_id = user.user ? user.user.userInfo.id : "";
  const [products, setProduct] = useState("");

  useEffect(async () => {
    const { data } = await productService.getAllProducts();

    setProduct(data);
    console.log(data);
    data.map((prod) => {
      if (prod.seller_id == user_id) {
        console.log(prod);
      }
    });
    return data;
  }, []);

  if (!userService.getCurrentUser()) return <Redirect to="/" />;

  return (
    <div className="container">
      <PageHeader titleText="profile page" />

      <div className="row">
        <h3 className="mx-auto">basic user info </h3>

        <div className="col-lg-12">
          <h3>Name : {user.user.userInfo.name} </h3>
          <h3>
            user is seller : {user.user.userInfo.seller ? "True" : "False"}
          </h3>
          <h3>user id # : {user.user.userInfo.id}</h3>
        </div>
        <h4 className="mx-auto">user products for sale:</h4>
        <br />
        <div className="row">
          {products
            ? products.map((product) => {
                if (product.seller_id == user_id) {
                  return <Product key={product._id} product={product} />;
                }
              })
            : "you dont have any product on sale "}
        </div>
      </div>
    </div>
  );
};

export default Profile;
