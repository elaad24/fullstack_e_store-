import React, { useEffect, useState } from "react";
import PageHeader from "./common/PageHeader";
import productService from "../services/productService";
import Product from "./common/ProductCard";

const Home = () => {
  const [products, setProduct] = useState("");
  useEffect(async () => {
    const { data } = await productService.getAllProducts();

    setProduct(data.sort(() => Math.random() - 0.5));
    return data;
  }, []);

  return (
    <div className="container">
      <PageHeader titleText="Home page" />

      <div className="row">
        <div className="col-12">
          <div className="row">
            {products
              ? products.map((product) => {
                  return <Product key={product._id} product={product} />;
                })
              : "There is no products ! "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
