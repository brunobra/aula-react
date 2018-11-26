import React, { Component } from 'react';
import './index.css';

import Cart from '../Cart';

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: 'Produto 1',
        price: 10
      },
      {
        id: 2,
        name: 'Produto 2',
        price: 20
      },
      {
        id: 3,
        name: 'Produto 3',
        price: 30
      }
    ]
  }

  handleDeleteProduct(id) {
    this.setState({
      products: this.state.products.filter((product) => product.id !== id)
    });
  }

  render() {
    return (
      <div className="App">
        <Cart
          products={this.state.products}
          onDeleteProduct={this.handleDeleteProduct.bind(this)}
        />
      </div>
    );
  }
}

export default App;
