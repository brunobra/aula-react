import React, { Component } from 'react';
import './index.css';

import CartTitle from '../CartTitle';
import CartTotal from '../CartTotal';

class CartHeader extends Component {
  render() {
    return (
      <div className="CartHeader">
        <CartTitle title={this.props.title} />
        <CartTotal />
      </div>
    );
  }
}

export default CartHeader;
