import React from 'react';
import './index.css';

import CartTitle from '../CartTitle';
import CartTotal from '../CartTotal';

const CartHeader = ({title}) => (
  <div className="CartHeader">
    <CartTitle title={title} />
    <CartTotal />
  </div>
);

export default CartHeader;
