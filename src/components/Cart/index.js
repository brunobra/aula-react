import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

import CartHeader from '../CartHeader';
import Product from '../Product';

const Cart = ({products}) => (
  <div className="Cart">
    <CartHeader
      title="Carrinho"
    />
    {products.map((product) => (
      <Product
        key={product.id}
        name={product.name}
        price={product.price}
      />
    ))}
  </div>
);

Cart.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      price: PropTypes.number
    })
  )
};

Cart.defaultProps = {
  products: []
};

export default Cart;
