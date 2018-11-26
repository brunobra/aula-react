import React from 'react';
import './Product.css';
import './ProductName.css';
import './ProductPrice.css';

const Product = () => (
  <div className="Product">
     <span className="ProductName">
      Produto
    </span>
    <span className="ProductPrice">
      R$ 20,00
    </span>
  </div>
);

export default Product;
