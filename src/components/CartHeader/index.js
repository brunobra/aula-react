import React, { Component } from 'react';
import './index.css';

import CartTitle from '../CartTitle';

class CartHeader extends Component {
  render() {
    return (
      <div className="CartHeader">
        <CartTitle />
      </div>
    );
  }
}

export default CartHeader;
