import React, { useEffect, useState } from "react";
import PageHeader from "./common/PageHeader";
import productService from "../services/productService";
import ProductFull from "./common/ProductFull";
import { useSelector } from "react-redux";

const ProductPage = () => {
  let user = useSelector((state) => state.userSystem);
  let user_id = user.user ? user.user.userInfo.id : "";

  var url_string = window.location.href;
  var url = new URL(url_string);
  var id = url.searchParams.get("id");
  console.log(id);

  const [product, setProduct] = useState("");
  useEffect(async () => {
    const { data } = await productService.getProduct(id);

    setProduct(data);
    console.log(product);
    return data;
  }, []);

  return (
    <div className="container">
      <PageHeader titleText="spesific item page " />
      {<ProductFull product={product} productId={id} user_id={user_id} />}
    </div>
  );
};

export default ProductPage;
