import React from 'react';
import PropTypes from 'prop-types';
import './CartHeader.css';
import './CartTitle.css';
import './CartTotal.css';

const CartHeader = ({title, total}) => (
  <div className="CartHeader">
    <h1 className="CartTitle">
      {title}
    </h1>
    <span className="CartTotal">
      {`Total R$ ${total}`}
    </span>
  </div>
);

CartHeader.propTypes = {
  title: PropTypes.string,
  total: PropTypes.number
};

CartHeader.defaultProps = {
  title: 'Carrinho',
  total: 0
};

export default CartHeader;
