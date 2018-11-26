import React, { Component } from 'react';
import './index.css';

import CartHeader from '../CartHeader';
import Product from '../Product';

class Cart extends Component {
  render() {
    return (
      <div className="Cart">
        <CartHeader
          title="Carrinho"
        />
        <Product />
        <Product />
        <Product />
      </div>
    );
  }
}

export default Cart;
