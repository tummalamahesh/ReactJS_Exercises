import React from "react";

class Product extends React.Component {
  render() {
    return (
      <div>
        <h2>Product Name:{this.props.product.name}</h2>
        <h2>Product Price:{this.props.product.price}</h2>
        <h2>Product Description:{this.props.product.description}</h2>
      </div>
    );
  }
}

export default Product;
