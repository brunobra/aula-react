import React, { Component } from 'react';
import './index.css';

import ProductName from '../ProductName';

class Product extends Component {
  render() {
    return (
      <div className="Product">
        <ProductName />
      </div>
    );
  }
}

export default Product;
