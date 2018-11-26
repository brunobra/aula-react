import React, { Component } from 'react';
import './index.css';

import CartHeader from '../CartHeader';

class Cart extends Component {
  render() {
    return (
      <div className="Cart">
        <CartHeader />
      </div>
    );
  }
}

export default Cart;
