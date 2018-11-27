import React from 'react';
import {connect} from 'react-redux';

import {addProduct, removeProduct} from '../../flux/actions';

import './index.css';
import Cart from '../Cart';

const App = ({product, removeProduct, addProduct}) => (
  <div className="App">
    <Cart
      products={product.products}
      onDeleteProduct={removeProduct}
      onAddProduct={addProduct}
    />
  </div>
);

const mapStateToProps = state => ({
  product: state.product
});

const mapDispatchToProps = {
  addProduct,
  removeProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
