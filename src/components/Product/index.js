import React, { Component } from 'react';
import './index.css';

import ProductName from '../ProductName';
import ProductPrice from '../ProductPrice';

class Product extends Component {
  render() {
    return (
      <div className="Product">
        <ProductName />
        <ProductPrice />
      </div>
    );
  }
}

export default Product;
