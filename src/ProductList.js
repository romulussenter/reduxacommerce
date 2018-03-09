import React from "react";

const ProductList = props => {
    const ProductItems = props.products.map(product => product.name).map(name => <li>{name}</li>);
  return (
    <ul>
      <li>{ProductItems}</li>
    </ul>
  );
};

export default ProductList;
