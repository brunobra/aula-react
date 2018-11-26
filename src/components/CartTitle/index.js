import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class CartTitle extends Component {
  render() {
    return (
      <h1 className="CartTitle">
        {this.props.title}
      </h1>
    );
  }
}

CartTitle.propTypes = {
  title: PropTypes.string
};

CartTitle.defaultProps = {
  title: 'Cart'
};

export default CartTitle;
