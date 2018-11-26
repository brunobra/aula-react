import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const CartTitle = ({title}) => (
  <h1 className="CartTitle">
    {title}
  </h1>
);

CartTitle.propTypes = {
  title: PropTypes.string
};

CartTitle.defaultProps = {
  title: 'Cart'
};

export default CartTitle;
