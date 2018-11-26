import React from 'react';
import './index.css';

import ProductName from '../ProductName';
import ProductPrice from '../ProductPrice';

const Product = () => (
  <div className="Product">
    <ProductName />
    <ProductPrice />
  </div>
);

export default Product;
