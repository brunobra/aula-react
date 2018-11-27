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
    this.setState(prevState => ({
      products: prevState.products.filter((product) => product.id !== id)
    }));
  }

  handleAddProduct(product) {
    this.setState(prevState => ({
      products: [...prevState.products, product]
    }))
  }

  render() {
    return (
      <div className="App">
        <Cart
          products={this.state.products}
          onDeleteProduct={this.handleDeleteProduct.bind(this)}
          onAddProduct={this.handleAddProduct.bind(this)}
        />
      </div>
    );
  }
}

export default App;
