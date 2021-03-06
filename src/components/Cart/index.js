import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

import CartHeader from '../CartHeader';
import Product from '../Product';
import CartFooter from '../CartFooter';

const Cart = ({products, onDeleteProduct, onAddProduct}) => {
  const getTotalPrice = (products) => {
    let total = 0;

    for (let product of products) {
      total = total + product.price;
    }

    return total;
  };

  return (
    <div className="Cart">
      <CartHeader
        title="Carrinho"
        total={getTotalPrice(products)}
      />
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          onDelete={() => onDeleteProduct(product.id)}
        />
      ))}
      <CartFooter onAddProduct={onAddProduct} />
    </div>
  );
}

Cart.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      price: PropTypes.number
    })
  ),
  onDeleteProduct: PropTypes.func.isRequired,
  onAddProduct: PropTypes.func.isRequired
};

Cart.defaultProps = {
  products: []
};

export default Cart;
