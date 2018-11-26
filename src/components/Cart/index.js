import React from 'react';
import './index.css';

import CartHeader from '../CartHeader';
import Product from '../Product';

const Cart = () => (
  <div className="Cart">
    <CartHeader
      title="Carrinho"
    />
    <Product />
    <Product />
    <Product />
  </div>
);

export default Cart;
