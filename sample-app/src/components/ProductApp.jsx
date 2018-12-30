import React from "react";
import productData from "./productsData";
import Product from "./Product";

function ProductApp() {
  const products = productData.map(product => {
    return <Product key={product.id} product={product} />;
  });

  return <div>{products}</div>;
}

export default ProductApp;
