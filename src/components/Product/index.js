import React from 'react';
import PropTypes from 'prop-types';
import './Product.css';
import './ProductName.css';
import './ProductPrice.css';

const Product = ({name, price}) => (
  <div className="Product">
     <span className="ProductName">
      {name}
    </span>
    <span className="ProductPrice">
      {`R$ ${price}`}
    </span>
  </div>
);

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number
};

Product.defaultProps = {
  name: 'Produto',
  price: 0
};

export default Product;
